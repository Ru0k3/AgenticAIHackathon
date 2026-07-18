var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nitrostack/core';
let MedicationReferenceService = class MedicationReferenceService {
    /**
     * Drug-allergy cross-reactivity map
     * Maps drugs to allergens that may cause reactions in allergic patients
     */
    drugAllergyMap = {
        'Amoxicillin': ['Penicillin', 'Beta-lactams'],
        'Ampicillin': ['Penicillin', 'Beta-lactams'],
        'Cephalexin': ['Penicillin', 'Beta-lactams', 'Cephalosporins'],
        'Ibuprofen': ['NSAIDs', 'Aspirin'],
        'Naproxen': ['NSAIDs', 'Aspirin'],
        'Aspirin': ['NSAIDs', 'Salicylates'],
        'Lisinopril': ['ACE inhibitors'],
        'Enalapril': ['ACE inhibitors'],
        'Metformin': ['Biguanides'],
        'Sulfonamides': ['Sulfa drugs'],
        'Trimethoprim-sulfamethoxazole': ['Sulfa drugs', 'Sulfonamides'],
    };
    /**
     * Drug-drug interaction map
     * Maps pairs of drugs to known interactions
     */
    drugInteractionMap = {
        'Warfarin': {
            'Aspirin': {
                severity: 'critical',
                reason: 'Increased bleeding risk; both are anticoagulants/antiplatelet agents',
            },
            'Ibuprofen': {
                severity: 'warning',
                reason: 'NSAIDs may increase warfarin effect and bleeding risk',
            },
            'Metronidazole': {
                severity: 'warning',
                reason: 'May increase warfarin levels',
            },
        },
        'Metformin': {
            'Contrast dye': {
                severity: 'critical',
                reason: 'Risk of lactic acidosis; hold metformin before contrast procedures',
            },
            'Alcohol': {
                severity: 'warning',
                reason: 'Increased risk of lactic acidosis',
            },
        },
        'Lisinopril': {
            'Potassium supplements': {
                severity: 'warning',
                reason: 'ACE inhibitors increase potassium; risk of hyperkalemia',
            },
            'NSAIDs': {
                severity: 'warning',
                reason: 'May reduce antihypertensive effect and increase renal risk',
            },
        },
        'Simvastatin': {
            'Clarithromycin': {
                severity: 'critical',
                reason: 'Increased statin levels; risk of myopathy and rhabdomyolysis',
            },
            'Grapefruit juice': {
                severity: 'warning',
                reason: 'Increases simvastatin levels',
            },
        },
        'Digoxin': {
            'Verapamil': {
                severity: 'critical',
                reason: 'Increased digoxin levels; risk of toxicity',
            },
            'Amiodarone': {
                severity: 'critical',
                reason: 'Increased digoxin levels; risk of toxicity',
            },
        },
    };
    /**
     * Drug-condition contraindication map
     * Maps drugs to conditions where they are contraindicated
     */
    drugConditionContraindicationMap = {
        'ACE inhibitors': {
            'Pregnancy': {
                severity: 'critical',
                reason: 'Teratogenic; can cause fetal renal damage and death',
            },
            'Hyperkalemia': {
                severity: 'warning',
                reason: 'ACE inhibitors increase potassium levels',
            },
            'Severe renal impairment': {
                severity: 'warning',
                reason: 'May worsen renal function',
            },
        },
        'Lisinopril': {
            'Pregnancy': {
                severity: 'critical',
                reason: 'Teratogenic; can cause fetal renal damage and death',
            },
            'Hyperkalemia': {
                severity: 'warning',
                reason: 'ACE inhibitors increase potassium levels',
            },
            'Severe renal impairment': {
                severity: 'warning',
                reason: 'May worsen renal function',
            },
        },
        'Enalapril': {
            'Pregnancy': {
                severity: 'critical',
                reason: 'Teratogenic; can cause fetal renal damage and death',
            },
            'Hyperkalemia': {
                severity: 'warning',
                reason: 'ACE inhibitors increase potassium levels',
            },
        },
        'NSAIDs': {
            'Severe renal impairment': {
                severity: 'critical',
                reason: 'NSAIDs can cause acute kidney injury',
            },
            'Heart failure': {
                severity: 'warning',
                reason: 'NSAIDs can worsen fluid retention and heart failure',
            },
            'Peptic ulcer disease': {
                severity: 'critical',
                reason: 'NSAIDs increase risk of GI bleeding',
            },
        },
        'Ibuprofen': {
            'Severe renal impairment': {
                severity: 'critical',
                reason: 'NSAIDs can cause acute kidney injury',
            },
            'Heart failure': {
                severity: 'warning',
                reason: 'NSAIDs can worsen fluid retention and heart failure',
            },
            'Peptic ulcer disease': {
                severity: 'critical',
                reason: 'NSAIDs increase risk of GI bleeding',
            },
        },
        'Metformin': {
            'Severe renal impairment': {
                severity: 'critical',
                reason: 'Risk of lactic acidosis',
            },
            'Acute illness': {
                severity: 'warning',
                reason: 'Increased risk of lactic acidosis during acute illness',
            },
        },
        'Warfarin': {
            'Active bleeding': {
                severity: 'critical',
                reason: 'Anticoagulant contraindicated in active bleeding',
            },
            'Severe thrombocytopenia': {
                severity: 'critical',
                reason: 'Increased bleeding risk',
            },
        },
    };
    /**
     * Check if a drug has a known allergy cross-reactivity
     */
    checkDrugAllergyConflict(drug, allergen) {
        const normalizedDrug = this.normalize(drug);
        const normalizedAllergen = this.normalize(allergen);
        // Direct match
        if (normalizedDrug === normalizedAllergen) {
            return true;
        }
        // Check cross-reactivity map
        for (const [mappedDrug, allergens] of Object.entries(this.drugAllergyMap)) {
            if (this.normalize(mappedDrug) === normalizedDrug) {
                return allergens.some((a) => this.normalize(a) === normalizedAllergen);
            }
        }
        return false;
    }
    /**
     * Check for drug-drug interactions
     */
    checkDrugInteraction(drug1, drug2) {
        const normalized1 = this.normalize(drug1);
        const normalized2 = this.normalize(drug2);
        // Check both directions
        for (const [d1, interactions] of Object.entries(this.drugInteractionMap)) {
            if (this.normalize(d1) === normalized1) {
                for (const [d2, interaction] of Object.entries(interactions)) {
                    if (this.normalize(d2) === normalized2) {
                        return interaction;
                    }
                }
            }
        }
        // Check reverse direction
        for (const [d1, interactions] of Object.entries(this.drugInteractionMap)) {
            if (this.normalize(d1) === normalized2) {
                for (const [d2, interaction] of Object.entries(interactions)) {
                    if (this.normalize(d2) === normalized1) {
                        return interaction;
                    }
                }
            }
        }
        return null;
    }
    /**
     * Check for drug-condition contraindications
     */
    checkDrugConditionContraindication(drug, condition) {
        const normalizedDrug = this.normalize(drug);
        const normalizedCondition = this.normalize(condition);
        for (const [d, conditions] of Object.entries(this.drugConditionContraindicationMap)) {
            if (this.normalize(d) === normalizedDrug) {
                for (const [c, contraindication] of Object.entries(conditions)) {
                    if (this.normalize(c) === normalizedCondition) {
                        return contraindication;
                    }
                }
            }
        }
        return null;
    }
    /**
     * Normalize string for comparison (lowercase, trim, remove extra spaces)
     */
    normalize(str) {
        return str.toLowerCase().trim().replace(/\s+/g, ' ');
    }
};
MedicationReferenceService = __decorate([
    Injectable()
], MedicationReferenceService);
export { MedicationReferenceService };
//# sourceMappingURL=medication-reference.service.js.map