import { ToolDecorator as Tool, z, ExecutionContext, Injectable } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';

/**
 * Reference Tools
 * 
 * Tools for fetching detailed facility and specialty information
 */
@Injectable({ deps: [DataService] })
export class ReferenceTools {
  constructor(private dataService: DataService) {}

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
}
