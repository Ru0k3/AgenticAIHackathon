import { ExecutionContext } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
import { RareDiseaseRegistryService } from '../../shared/services/rare-disease-registry.service.js';
/**
 * Reference Resources
 *
 * Provides access to reference data including patient medical histories
 * and rare disease treatment registries
 */
export declare class ReferenceResources {
    private dataService;
    private rareDiseaseRegistryService;
    constructor(dataService: DataService, rareDiseaseRegistryService: RareDiseaseRegistryService);
    patientHistory(context: ExecutionContext): Promise<{
        type: "text";
        text: string;
    }>;
    rareDiseaseRegistry(context: ExecutionContext): Promise<{
        type: "text";
        text: string;
    }>;
    exampleResource(context: ExecutionContext): Promise<{
        type: "text";
        text: string;
    }>;
}
//# sourceMappingURL=reference.resources.d.ts.map