import { ExecutionContext } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
import { MedicationReferenceService } from '../../shared/services/medication-reference.service.js';
import { RareDiseaseRegistryService } from '../../shared/services/rare-disease-registry.service.js';
/**
 * Reference Tools
 *
 * Tools for fetching detailed facility and specialty information,
 * auditing medication safety, and querying rare disease treatment registries
 */
export declare class ReferenceTools {
    private dataService;
    private medicationReferenceService;
    private rareDiseaseRegistryService;
    constructor(dataService: DataService, medicationReferenceService: MedicationReferenceService, rareDiseaseRegistryService: RareDiseaseRegistryService);
    getHospital(input: {
        hospitalId: string;
    }, context: ExecutionContext): Promise<{
        error: string;
        hospital?: undefined;
        doctors?: undefined;
    } | {
        hospital: {
            id: string;
            name: string;
            location: string;
            imageUrl: string;
            description: string;
        };
        doctors: {
            id: string;
            name: string;
            specialty: string;
            imageUrl: string;
        }[];
        error?: undefined;
    }>;
    getSpecialty(input: {
        specialtyId: string;
    }, context: ExecutionContext): Promise<{
        error: string;
        specialty?: undefined;
        doctors?: undefined;
    } | {
        specialty: {
            id: string;
            name: string;
            description: string;
            imageUrl: string;
        };
        doctors: {
            id: string;
            name: string;
            hospital: string;
            imageUrl: string;
        }[];
        error?: undefined;
    }>;
    auditMedicationSafety(input: {
        patientId: string;
        targetCondition: string;
        intendedDrug: string;
    }, context: ExecutionContext): Promise<{
        status: string;
        message: string;
        patientId: string;
        targetCondition: string;
        intendedDrug: string;
        timestamp: string;
        doNotPrescribe?: undefined;
        conflicts?: undefined;
        summary?: undefined;
    } | {
        status: string;
        doNotPrescribe: boolean;
        conflicts: {
            type: "allergy" | "interaction" | "condition";
            conflictingItem: string;
            severity: "critical" | "warning";
            reason: string;
        }[];
        patientId: string;
        targetCondition: string;
        intendedDrug: string;
        timestamp: string;
        summary: string;
        message?: undefined;
    }>;
    fetchProvenDrugData(input: {
        patientId: string;
        flaggedCondition: string;
    }, context: ExecutionContext): Promise<{
        status: string;
        message: string;
        patientId: string;
        flaggedCondition: string;
        timestamp: string;
        noMatchResult?: undefined;
        condition?: undefined;
        verifiedDrugs?: undefined;
        summary?: undefined;
        lastUpdated?: undefined;
    } | {
        status: string;
        patientId: string;
        flaggedCondition: string;
        noMatchResult: {
            message: string;
            recommendation: string;
            note: string;
        };
        timestamp: string;
        message?: undefined;
        condition?: undefined;
        verifiedDrugs?: undefined;
        summary?: undefined;
        lastUpdated?: undefined;
    } | {
        status: string;
        patientId: string;
        condition: {
            id: string;
            name: string;
            alternateNames: string[];
            description: string;
            registrySource: string;
        };
        verifiedDrugs: {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes: string;
        }[];
        summary: {
            totalVerifiedDrugs: number;
            evidenceLevels: Record<string, number>;
        };
        lastUpdated: string;
        timestamp: string;
        message?: undefined;
        flaggedCondition?: undefined;
        noMatchResult?: undefined;
    }>;
}
//# sourceMappingURL=reference.tools.d.ts.map