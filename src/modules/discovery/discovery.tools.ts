import { ToolDecorator as Tool, z, ExecutionContext, Injectable, Widget } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';

/**
 * Discovery Tools
 * 
 * Tools for browsing hospitals and medical specialties
 */
@Injectable({ deps: [DataService] })
export class DiscoveryTools {
  constructor(private dataService: DataService) {}

  @Tool({
    name: 'list-hospitals',
    description: 'List all available hospitals with their details',
    inputSchema: z.object({}),
  })
  @Widget({ route: 'hospitals-grid' })
  async listHospitals(input: Record<string, never>, context: ExecutionContext) {
    const hospitals = this.dataService.getHospitals();
    return {
      hospitals: hospitals.map((h) => ({
        id: h.id,
        name: h.name,
        location: h.location,
        imageUrl: h.imageUrl,
        description: h.description,
      })),
    };
  }

  @Tool({
    name: 'list-specialties',
    description: 'List all available medical specialties',
    inputSchema: z.object({}),
  })
  @Widget({ route: 'specialties-grid' })
  async listSpecialties(input: Record<string, never>, context: ExecutionContext) {
    const specialties = this.dataService.getSpecialties();
    return {
      specialties: specialties.map((s) => ({
        id: s.id,
        name: s.name,
        description: s.description,
        imageUrl: s.imageUrl,
      })),
    };
  }
}
