import { ToolDecorator as Tool, z, ExecutionContext, Injectable } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
import { MedicationReferenceService } from '../../shared/services/medication-reference.service.js';
import { RareDiseaseRegistryService } from '../../shared/services/rare-disease-registry.service.js';

/**
 * Reference Tools
 * 
 * Tools for fetching detailed facility and specialty information,
 * auditing medication safety, and querying rare disease treatment registries
 */
@Injectable({ deps: [DataService, MedicationReferenceService, RareDiseaseRegistryService] })
export class ReferenceTools {
  constructor(
    private dataService: DataService,
    private medicationReferenceService: MedicationReferenceService,
    private rareDiseaseRegistryService: RareDiseaseRegistryService,
  ) {}

  @Tool({
    name: 'get-hospital',
    description: 'Get detailed information about a specific hospital including assigned doctors',
    inputSchema: z.object({
      hospitalId: z.string().describe('The ID of the hospital'),
    }),
  })
  async getHospital(input: { hospitalId: string }, context: ExecutionContext) {
    const hospital = this.dataService.getHospitalById(input.hospitalId);
    if (!hospital) {
      return { error: `Hospital with ID ${input.hospitalId} not found` };
    }

    const doctors = this.dataService.getDoctorsByHospital(input.hospitalId);
    return {
      hospital: {
        id: hospital.id,
        name: hospital.name,
        location: hospital.location,
        imageUrl: hospital.imageUrl,
        description: hospital.description,
      },
      doctors: doctors.map((d) => ({
        id: d.id,
        name: d.name,
        specialty: d.specialty,
        imageUrl: d.imageUrl,
      })),
    };
  }

  @Tool({
    name: 'get-specialty',
    description: 'Get detailed information about a medical specialty including roster of doctors',
    inputSchema: z.object({
      specialtyId: z.string().describe('The ID of the specialty'),
    }),
  })
  async getSpecialty(input: { specialtyId: string }, context: ExecutionContext) {
    const specialty = this.dataService.getSpecialtyById(input.specialtyId);
    if (!specialty) {
      return { error: `Specialty with ID ${input.specialtyId} not found` };
    }

    const doctors = this.dataService.getDoctorsBySpecialty(input.specialtyId);
    return {
      specialty: {
        id: specialty.id,
        name: specialty.name,
        description: specialty.description,
        imageUrl: specialty.imageUrl,
      },
      doctors: doctors.map((d) => ({
        id: d.id,
        name: d.name,
        hospital: d.hospital,
        imageUrl: d.imageUrl,
      })),
    };
  }

  @Tool({
    name: 'audit-medication-safety',
    description:
      'Audit medication safety by checking a proposed drug against a patient\'s medical history for allergies, drug interactions, and condition contraindications. Returns a detailed contraindication report with explicit "DO NOT PRESCRIBE" flag if conflicts are found.',
    inputSchema: z.object({
      patientId: z.string().describe('The patient ID'),
      targetCondition: z.string().describe('The medical condition being treated'),
      intendedDrug: z.string().describe('The drug the doctor intends to prescribe'),
    }),
  })
  async auditMedicationSafety(
    input: { patientId: string; targetCondition: string; intendedDrug: string },
    context: ExecutionContext,
  ) {
    const patientHistory = this.dataService.getPatientHistoryById(input.patientId);

    if (!patientHistory) {
      return {
        status: 'error',
        message: `Patient with ID ${input.patientId} not found`,
        patientId: input.patientId,
        targetCondition: input.targetCondition,
        intendedDrug: input.intendedDrug,
        timestamp: new Date().toISOString(),
      };
    }

    const conflicts: Array<{
      type: 'allergy' | 'interaction' | 'condition';
      conflictingItem: string;
      severity: 'critical' | 'warning';
      reason: string;
    }> = [];

    // Check 1: Drug-allergy conflicts
    for (const allergy of patientHistory.allergies) {
      if (
        this.medicationReferenceService.checkDrugAllergyConflict(
          input.intendedDrug,
          allergy.allergen,
        )
      ) {
        conflicts.push({
          type: 'allergy',
          conflictingItem: allergy.allergen,
          severity: allergy.severity === 'severe' ? 'critical' : 'warning',
          reason: `Patient has documented ${allergy.severity} allergy to ${allergy.allergen}; ${input.intendedDrug} has cross-reactivity`,
        });
      }
    }

    // Check 2: Drug-drug interactions
    for (const medication of patientHistory.medications) {
      const interaction = this.medicationReferenceService.checkDrugInteraction(
        input.intendedDrug,
        medication.name,
      );
      if (interaction) {
        conflicts.push({
          type: 'interaction',
          conflictingItem: medication.name,
          severity: interaction.severity,
          reason: `Known interaction between ${input.intendedDrug} and current medication ${medication.name}: ${interaction.reason}`,
        });
      }
    }

    // Check 3: Drug-condition contraindications
    for (const condition of patientHistory.conditions) {
      if (condition.status === 'active' || condition.status === 'chronic') {
        const contraindication =
          this.medicationReferenceService.checkDrugConditionContraindication(
            input.intendedDrug,
            condition.name,
          );
        if (contraindication) {
          conflicts.push({
            type: 'condition',
            conflictingItem: condition.name,
            severity: contraindication.severity,
            reason: `${input.intendedDrug} is contraindicated in ${condition.name}: ${contraindication.reason}`,
          });
        }
      }
    }

    // Determine overall status and DO NOT PRESCRIBE flag
    const hasCriticalConflict = conflicts.some((c) => c.severity === 'critical');
    const status = conflicts.length > 0 ? 'contraindicated' : 'safe';
    const doNotPrescribe = hasCriticalConflict;

    return {
      status,
      doNotPrescribe,
      conflicts,
      patientId: input.patientId,
      targetCondition: input.targetCondition,
      intendedDrug: input.intendedDrug,
      timestamp: new Date().toISOString(),
      summary:
        doNotPrescribe
          ? `⚠️ DO NOT PRESCRIBE: Critical contraindication(s) found. ${conflicts.length} conflict(s) detected.`
          : status === 'safe'
            ? `✓ Safe to prescribe: No contraindications found.`
            : `⚠️ Warning: Non-critical conflict(s) found. ${conflicts.length} warning(s) detected. Review before prescribing.`,
    };
  }

  @Tool({
    name: 'fetch_proven_drug_data',
    description:
      'Query the rare disease registry to retrieve verified, evidence-backed drugs for treating a specific rare condition. Returns a structured profile of existing treatments with clinical evidence levels and source citations. If no match is found, returns a clear referral recommendation.',
    inputSchema: z.object({
      patientId: z.string().describe('The patient ID (for audit/traceability)'),
      flaggedCondition: z.string().describe('The rare disease or condition to look up in the registry'),
    }),
  })
  async fetchProvenDrugData(
    input: { patientId: string; flaggedCondition: string },
    context: ExecutionContext,
  ) {
    // Validate inputs
    if (!input.patientId || !input.flaggedCondition) {
      return {
        status: 'error',
        message: 'Both patientId and flaggedCondition are required',
        patientId: input.patientId,
        flaggedCondition: input.flaggedCondition,
        timestamp: new Date().toISOString(),
      };
    }

    // Query the rare disease registry
    const registryEntry = this.rareDiseaseRegistryService.searchByConditionName(
      input.flaggedCondition,
    );

    // Handle no match case
    if (!registryEntry) {
      return {
        status: 'no-match',
        patientId: input.patientId,
        flaggedCondition: input.flaggedCondition,
        noMatchResult: {
          message: 'No verified match found in rare disease registry',
          recommendation: 'Recommend specialist referral for diagnosis confirmation and treatment planning',
          note: 'This condition may be extremely rare, newly identified, or require expert evaluation',
        },
        timestamp: new Date().toISOString(),
      };
    }

    // Return structured profile of verified drugs with evidence and citations
    return {
      status: 'success',
      patientId: input.patientId,
      condition: {
        id: registryEntry.conditionId,
        name: registryEntry.conditionName,
        alternateNames: registryEntry.alternateNames || [],
        description: registryEntry.description,
        registrySource: registryEntry.registrySource,
      },
      verifiedDrugs: registryEntry.verifiedDrugs.map((drug) => ({
        drugName: drug.drugName,
        indication: drug.indication,
        dosageRange: drug.dosageRange,
        evidenceLevel: drug.evidenceLevel,
        citationSource: drug.citationSource,
        notes: drug.notes || '',
      })),
      summary: {
        totalVerifiedDrugs: registryEntry.verifiedDrugs.length,
        evidenceLevels: registryEntry.verifiedDrugs.reduce(
          (acc, drug) => {
            acc[drug.evidenceLevel] = (acc[drug.evidenceLevel] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>,
        ),
      },
      lastUpdated: registryEntry.lastUpdated,
      timestamp: new Date().toISOString(),
    };
  }
}
