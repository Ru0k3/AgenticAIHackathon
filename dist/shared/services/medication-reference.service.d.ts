export declare class MedicationReferenceService {
    /**
     * Drug-allergy cross-reactivity map
     * Maps drugs to allergens that may cause reactions in allergic patients
     */
    private drugAllergyMap;
    /**
     * Drug-drug interaction map
     * Maps pairs of drugs to known interactions
     */
    private drugInteractionMap;
    /**
     * Drug-condition contraindication map
     * Maps drugs to conditions where they are contraindicated
     */
    private drugConditionContraindicationMap;
    /**
     * Check if a drug has a known allergy cross-reactivity
     */
    checkDrugAllergyConflict(drug: string, allergen: string): boolean;
    /**
     * Check for drug-drug interactions
     */
    checkDrugInteraction(drug1: string, drug2: string): {
        severity: 'critical' | 'warning';
        reason: string;
    } | null;
    /**
     * Check for drug-condition contraindications
     */
    checkDrugConditionContraindication(drug: string, condition: string): {
        severity: 'critical' | 'warning';
        reason: string;
    } | null;
    /**
     * Normalize string for comparison (lowercase, trim, remove extra spaces)
     */
    private normalize;
}
//# sourceMappingURL=medication-reference.service.d.ts.map