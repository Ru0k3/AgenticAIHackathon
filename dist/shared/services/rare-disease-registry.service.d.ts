import { RareDiseaseEntry, VerifiedDrugEntry } from '../schemas/rare-disease-registry.schema.js';
/**
 * Rare Disease Registry Service
 *
 * Manages a curated registry of rare diseases and their verified treatments.
 * This is a reference database for clinical decision support.
 */
export declare class RareDiseaseRegistryService {
    private registry;
    constructor();
    private initializeRegistry;
    /**
     * Search for a rare disease by condition name (case-insensitive, partial match)
     */
    searchByConditionName(conditionName: string): RareDiseaseEntry | null;
    /**
     * Get all verified drugs for a specific condition
     */
    getVerifiedDrugsForCondition(conditionName: string): VerifiedDrugEntry[];
    /**
     * Get a specific rare disease entry by condition ID
     */
    getEntryById(conditionId: string): RareDiseaseEntry | null;
    /**
     * Get all entries in the registry
     */
    getAllEntries(): RareDiseaseEntry[];
    /**
     * Get registry statistics
     */
    getRegistryStats(): {
        totalConditions: number;
        totalVerifiedDrugs: number;
        lastUpdated: string;
    };
}
//# sourceMappingURL=rare-disease-registry.service.d.ts.map