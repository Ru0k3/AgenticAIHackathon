import { ExecutionContext } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
/**
 * Reference Tools
 *
 * Tools for fetching detailed facility and specialty information
 */
export declare class ReferenceTools {
    private dataService;
    constructor(dataService: DataService);
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
}
//# sourceMappingURL=reference.tools.d.ts.map