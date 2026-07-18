var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nitrostack/core';
/**
 * Rare Disease Registry Service
 *
 * Manages a curated registry of rare diseases and their verified treatments.
 * This is a reference database for clinical decision support.
 */
let RareDiseaseRegistryService = class RareDiseaseRegistryService {
    registry = [];
    constructor() {
        this.initializeRegistry();
    }
    initializeRegistry() {
        // Initialize with sample rare disease entries
        this.registry = [
            {
                conditionId: 'fabry-001',
                conditionName: 'Fabry Disease',
                alternateNames: ['Alpha-galactosidase A deficiency', 'Angiokeratoma corporis diffusum'],
                description: 'Rare X-linked lysosomal storage disorder caused by deficiency of alpha-galactosidase A enzyme, leading to accumulation of globotriaosylceramide in various tissues.',
                verifiedDrugs: [
                    {
                        drugName: 'Agalsidase Beta (Fabrazyme)',
                        indication: 'Fabry Disease',
                        dosageRange: '1 mg/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2003; EMA Approval 2001',
                        notes: 'Enzyme replacement therapy; first-line treatment for Fabry disease',
                    },
                    {
                        drugName: 'Agalsidase Alfa (Replagal)',
                        indication: 'Fabry Disease',
                        dosageRange: '0.2 mg/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'EMA Approval 2001; FDA Approval 2003',
                        notes: 'Alternative enzyme replacement therapy',
                    },
                    {
                        drugName: 'Migalastat (Galafold)',
                        indication: 'Fabry Disease (amenable variants)',
                        dosageRange: '150 mg orally twice daily',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2018; EMA Approval 2016',
                        notes: 'Chaperone therapy; oral option for amenable genetic variants',
                    },
                ],
                lastUpdated: '2024-01-15T10:00:00Z',
                registrySource: 'NIH Rare Diseases; FDA Orphan Drug Database',
            },
            {
                conditionId: 'gaucher-001',
                conditionName: 'Gaucher Disease',
                alternateNames: ['Glucosylceramidosis', 'Acid beta-glucosidase deficiency'],
                description: 'Lysosomal storage disorder caused by deficiency of glucocerebrosidase enzyme, resulting in accumulation of glucocerebroside in macrophages.',
                verifiedDrugs: [
                    {
                        drugName: 'Imiglucerase (Cerezyme)',
                        indication: 'Gaucher Disease Type 1 and 3',
                        dosageRange: '60 units/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 1994; EMA Approval 1997',
                        notes: 'Enzyme replacement therapy; standard of care',
                    },
                    {
                        drugName: 'Velaglucerase Alfa (VPRIV)',
                        indication: 'Gaucher Disease Type 1 and 3',
                        dosageRange: '60 units/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2010; EMA Approval 2010',
                        notes: 'Recombinant glucocerebrosidase; alternative to imiglucerase',
                    },
                    {
                        drugName: 'Miglustat (Zavesca)',
                        indication: 'Gaucher Disease Type 1 (mild to moderate)',
                        dosageRange: '100 mg orally three times daily',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2003; EMA Approval 2002',
                        notes: 'Substrate reduction therapy; oral option',
                    },
                    {
                        drugName: 'Eliglustat (Cerdelga)',
                        indication: 'Gaucher Disease Type 1',
                        dosageRange: '84 mg orally twice daily',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2014; EMA Approval 2015',
                        notes: 'Substrate reduction therapy; CYP2D6 genotyping required',
                    },
                ],
                lastUpdated: '2024-01-15T10:00:00Z',
                registrySource: 'NIH Rare Diseases; FDA Orphan Drug Database; Orphanet',
            },
            {
                conditionId: 'pompe-001',
                conditionName: 'Pompe Disease',
                alternateNames: ['Glycogen Storage Disease Type II', 'Acid maltase deficiency'],
                description: 'Lysosomal storage disorder caused by deficiency of acid alpha-glucosidase (GAA), leading to glycogen accumulation in muscles and other tissues.',
                verifiedDrugs: [
                    {
                        drugName: 'Alglucosidase Alfa (Myozyme)',
                        indication: 'Pompe Disease (infantile and late-onset)',
                        dosageRange: '20 mg/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2006; EMA Approval 2006',
                        notes: 'Enzyme replacement therapy; improves muscle strength and survival',
                    },
                    {
                        drugName: 'Avalglucosidase Alfa (Nexvladyme)',
                        indication: 'Pompe Disease (late-onset)',
                        dosageRange: '34 mg/kg IV every 2 weeks',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2021; EMA Approval 2021',
                        notes: 'Next-generation enzyme replacement therapy with improved efficacy',
                    },
                ],
                lastUpdated: '2024-01-15T10:00:00Z',
                registrySource: 'NIH Rare Diseases; FDA Orphan Drug Database',
            },
            {
                conditionId: 'mps1-001',
                conditionName: 'Mucopolysaccharidosis Type I (MPS I)',
                alternateNames: ['Hurler Syndrome', 'Scheie Syndrome', 'Hurler-Scheie Syndrome'],
                description: 'Lysosomal storage disorder caused by deficiency of alpha-L-iduronidase enzyme, leading to accumulation of glycosaminoglycans.',
                verifiedDrugs: [
                    {
                        drugName: 'Laronidase (Aldurazyme)',
                        indication: 'Mucopolysaccharidosis Type I',
                        dosageRange: '0.58 mg/kg IV weekly',
                        evidenceLevel: 'approved',
                        citationSource: 'FDA Approval 2003; EMA Approval 2003',
                        notes: 'Enzyme replacement therapy; reduces organomegaly and improves respiratory function',
                    },
                ],
                lastUpdated: '2024-01-15T10:00:00Z',
                registrySource: 'NIH Rare Diseases; FDA Orphan Drug Database',
            },
        ];
    }
    /**
     * Search for a rare disease by condition name (case-insensitive, partial match)
     */
    searchByConditionName(conditionName) {
        const normalizedSearch = conditionName.toLowerCase().trim();
        return (this.registry.find((entry) => entry.conditionName.toLowerCase().includes(normalizedSearch) ||
            entry.alternateNames?.some((alt) => alt.toLowerCase().includes(normalizedSearch))) || null);
    }
    /**
     * Get all verified drugs for a specific condition
     */
    getVerifiedDrugsForCondition(conditionName) {
        const entry = this.searchByConditionName(conditionName);
        return entry ? entry.verifiedDrugs : [];
    }
    /**
     * Get a specific rare disease entry by condition ID
     */
    getEntryById(conditionId) {
        return this.registry.find((entry) => entry.conditionId === conditionId) || null;
    }
    /**
     * Get all entries in the registry
     */
    getAllEntries() {
        return this.registry;
    }
    /**
     * Get registry statistics
     */
    getRegistryStats() {
        return {
            totalConditions: this.registry.length,
            totalVerifiedDrugs: this.registry.reduce((sum, entry) => sum + entry.verifiedDrugs.length, 0),
            lastUpdated: new Date().toISOString(),
        };
    }
};
RareDiseaseRegistryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], RareDiseaseRegistryService);
export { RareDiseaseRegistryService };
//# sourceMappingURL=rare-disease-registry.service.js.map