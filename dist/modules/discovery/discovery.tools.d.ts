import { ExecutionContext } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
/**
 * Discovery Tools
 *
 * Tools for browsing hospitals and medical specialties
 */
export declare class DiscoveryTools {
    private dataService;
    constructor(dataService: DataService);
    listHospitals(input: Record<string, never>, context: ExecutionContext): Promise<{
        hospitals: {
            id: string;
            name: string;
            location: string;
            imageUrl: string;
            description: string;
        }[];
    }>;
    listSpecialties(input: Record<string, never>, context: ExecutionContext): Promise<{
        specialties: {
            id: string;
            name: string;
            description: string;
            imageUrl: string;
        }[];
    }>;
}
//# sourceMappingURL=discovery.tools.d.ts.map