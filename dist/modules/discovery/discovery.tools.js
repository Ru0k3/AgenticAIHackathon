var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ToolDecorator as Tool, z, Injectable, Widget } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
/**
 * Discovery Tools
 *
 * Tools for browsing hospitals and medical specialties
 */
let DiscoveryTools = class DiscoveryTools {
    dataService;
    constructor(dataService) {
        this.dataService = dataService;
    }
    async listHospitals(input, context) {
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
    async listSpecialties(input, context) {
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
};
__decorate([
    Tool({
        name: 'list-hospitals',
        description: 'List all available hospitals with their details',
        inputSchema: z.object({}),
    }),
    Widget({ route: 'hospitals-grid' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DiscoveryTools.prototype, "listHospitals", null);
__decorate([
    Tool({
        name: 'list-specialties',
        description: 'List all available medical specialties',
        inputSchema: z.object({}),
    }),
    Widget({ route: 'specialties-grid' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DiscoveryTools.prototype, "listSpecialties", null);
DiscoveryTools = __decorate([
    Injectable({ deps: [DataService] }),
    __metadata("design:paramtypes", [DataService])
], DiscoveryTools);
export { DiscoveryTools };
//# sourceMappingURL=discovery.tools.js.map