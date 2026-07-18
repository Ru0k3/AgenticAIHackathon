import { z } from 'zod';
export declare const VerifiedDrugEntrySchema: z.ZodObject<{
    drugName: z.ZodString;
    indication: z.ZodString;
    dosageRange: z.ZodString;
    evidenceLevel: z.ZodEnum<["phase-1", "phase-2", "phase-3", "approved", "off-label"]>;
    citationSource: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    drugName: string;
    indication: string;
    dosageRange: string;
    evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
    citationSource: string;
    notes?: string | undefined;
}, {
    drugName: string;
    indication: string;
    dosageRange: string;
    evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
    citationSource: string;
    notes?: string | undefined;
}>;
export declare const RareDiseaseEntrySchema: z.ZodObject<{
    conditionId: z.ZodString;
    conditionName: z.ZodString;
    alternateNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    description: z.ZodString;
    verifiedDrugs: z.ZodArray<z.ZodObject<{
        drugName: z.ZodString;
        indication: z.ZodString;
        dosageRange: z.ZodString;
        evidenceLevel: z.ZodEnum<["phase-1", "phase-2", "phase-3", "approved", "off-label"]>;
        citationSource: z.ZodString;
        notes: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        drugName: string;
        indication: string;
        dosageRange: string;
        evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
        citationSource: string;
        notes?: string | undefined;
    }, {
        drugName: string;
        indication: string;
        dosageRange: string;
        evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
        citationSource: string;
        notes?: string | undefined;
    }>, "many">;
    lastUpdated: z.ZodString;
    registrySource: z.ZodString;
}, "strip", z.ZodTypeAny, {
    conditionId: string;
    conditionName: string;
    description: string;
    verifiedDrugs: {
        drugName: string;
        indication: string;
        dosageRange: string;
        evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
        citationSource: string;
        notes?: string | undefined;
    }[];
    lastUpdated: string;
    registrySource: string;
    alternateNames?: string[] | undefined;
}, {
    conditionId: string;
    conditionName: string;
    description: string;
    verifiedDrugs: {
        drugName: string;
        indication: string;
        dosageRange: string;
        evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
        citationSource: string;
        notes?: string | undefined;
    }[];
    lastUpdated: string;
    registrySource: string;
    alternateNames?: string[] | undefined;
}>;
export declare const RareDiseaseRegistrySchema: z.ZodObject<{
    entries: z.ZodArray<z.ZodObject<{
        conditionId: z.ZodString;
        conditionName: z.ZodString;
        alternateNames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        description: z.ZodString;
        verifiedDrugs: z.ZodArray<z.ZodObject<{
            drugName: z.ZodString;
            indication: z.ZodString;
            dosageRange: z.ZodString;
            evidenceLevel: z.ZodEnum<["phase-1", "phase-2", "phase-3", "approved", "off-label"]>;
            citationSource: z.ZodString;
            notes: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }, {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }>, "many">;
        lastUpdated: z.ZodString;
        registrySource: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        conditionId: string;
        conditionName: string;
        description: string;
        verifiedDrugs: {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }[];
        lastUpdated: string;
        registrySource: string;
        alternateNames?: string[] | undefined;
    }, {
        conditionId: string;
        conditionName: string;
        description: string;
        verifiedDrugs: {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }[];
        lastUpdated: string;
        registrySource: string;
        alternateNames?: string[] | undefined;
    }>, "many">;
    totalCount: z.ZodNumber;
    lastUpdated: z.ZodString;
}, "strip", z.ZodTypeAny, {
    entries: {
        conditionId: string;
        conditionName: string;
        description: string;
        verifiedDrugs: {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }[];
        lastUpdated: string;
        registrySource: string;
        alternateNames?: string[] | undefined;
    }[];
    lastUpdated: string;
    totalCount: number;
}, {
    entries: {
        conditionId: string;
        conditionName: string;
        description: string;
        verifiedDrugs: {
            drugName: string;
            indication: string;
            dosageRange: string;
            evidenceLevel: "phase-1" | "phase-2" | "phase-3" | "approved" | "off-label";
            citationSource: string;
            notes?: string | undefined;
        }[];
        lastUpdated: string;
        registrySource: string;
        alternateNames?: string[] | undefined;
    }[];
    lastUpdated: string;
    totalCount: number;
}>;
export type VerifiedDrugEntry = z.infer<typeof VerifiedDrugEntrySchema>;
export type RareDiseaseEntry = z.infer<typeof RareDiseaseEntrySchema>;
export type RareDiseaseRegistry = z.infer<typeof RareDiseaseRegistrySchema>;
//# sourceMappingURL=rare-disease-registry.schema.d.ts.map