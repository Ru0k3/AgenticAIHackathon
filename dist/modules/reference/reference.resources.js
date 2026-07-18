var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ResourceDecorator as Resource } from '@nitrostack/core';
import { DataService } from '../../shared/services/data.service.js';
import { RareDiseaseRegistryService } from '../../shared/services/rare-disease-registry.service.js';
import { Injectable } from '@nitrostack/core';
/**
 * Reference Resources
 *
 * Provides access to reference data including patient medical histories
 * and rare disease treatment registries
 */
let ReferenceResources = class ReferenceResources {
    dataService;
    rareDiseaseRegistryService;
    constructor(dataService, rareDiseaseRegistryService) {
        this.dataService = dataService;
        this.rareDiseaseRegistryService = rareDiseaseRegistryService;
    }
    async patientHistory(context) {
        // This resource is typically accessed via the audit_medication_safety tool
        // which passes the patientId as a parameter. Here we return a generic message.
        return {
            type: 'text',
            text: JSON.stringify({
                message: 'Patient history resource. Use the audit_medication_safety tool to retrieve specific patient data.',
                note: 'This resource provides access to patient medical histories for medication safety audits.',
            }, null, 2),
        };
    }
    async rareDiseaseRegistry(context) {
        // Return registry metadata and usage instructions
        const stats = this.rareDiseaseRegistryService.getRegistryStats();
        return {
            type: 'text',
            text: JSON.stringify({
                message: 'Rare Disease Registry Resource',
                description: 'Use the fetch_proven_drug_data tool to query this registry for verified treatments.',
                stats,
                note: 'This resource provides access to curated, evidence-backed treatments for rare diseases from NIH, FDA, and Orphanet sources.',
            }, null, 2),
        };
    }
    async exampleResource(context) {
        // TODO: Implement resource logic
        return {
            type: 'text',
            text: JSON.stringify({ example: 'data' }, null, 2),
        };
    }
};
__decorate([
    Resource({
        uri: 'reference://patient-history',
        name: 'Patient History',
        description: 'Retrieve a patient\'s medical history including medications, allergies, conditions, and past reactions',
        mimeType: 'application/json',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReferenceResources.prototype, "patientHistory", null);
__decorate([
    Resource({
        uri: 'reference://rare-disease-registry',
        name: 'Rare Disease Registry',
        description: 'Query the rare disease registry for verified, evidence-backed treatments for rare conditions. Returns structured drug profiles with clinical evidence levels and citations.',
        mimeType: 'application/json',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReferenceResources.prototype, "rareDiseaseRegistry", null);
__decorate([
    Resource({
        uri: 'reference://example',
        name: 'Example Resource',
        description: 'TODO: Add description',
        mimeType: 'application/json',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReferenceResources.prototype, "exampleResource", null);
ReferenceResources = __decorate([
    Injectable({ deps: [DataService, RareDiseaseRegistryService] }),
    __metadata("design:paramtypes", [DataService,
        RareDiseaseRegistryService])
], ReferenceResources);
export { ReferenceResources };
//# sourceMappingURL=reference.resources.js.map