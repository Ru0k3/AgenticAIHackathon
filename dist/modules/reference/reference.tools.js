var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ToolDecorator as Tool, z, Injectable } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
/**
 * Reference Tools
 *
 * Tools for fetching detailed facility and specialty information
 */
let ReferenceTools = class ReferenceTools {
    dataService;
    constructor(dataService) {
        this.dataService = dataService;
    }
    async getHospital(input, context) {
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
    async getSpecialty(input, context) {
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
};
__decorate([
    Tool({
        name: 'get-hospital',
        description: 'Get detailed information about a specific hospital including assigned doctors',
        inputSchema: z.object({
            hospitalId: z.string().describe('The ID of the hospital'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReferenceTools.prototype, "getHospital", null);
__decorate([
    Tool({
        name: 'get-specialty',
        description: 'Get detailed information about a medical specialty including roster of doctors',
        inputSchema: z.object({
            specialtyId: z.string().describe('The ID of the specialty'),
        }),
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ReferenceTools.prototype, "getSpecialty", null);
ReferenceTools = __decorate([
    Injectable({ deps: [DataService] }),
    __metadata("design:paramtypes", [DataService])
], ReferenceTools);
export { ReferenceTools };
//# sourceMappingURL=reference.tools.js.map