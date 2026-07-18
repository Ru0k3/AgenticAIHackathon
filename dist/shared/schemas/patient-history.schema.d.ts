import { z } from 'zod';
export declare const MedicationSchema: z.ZodObject<{
    name: z.ZodString;
    dosage: z.ZodString;
    startDate: z.ZodString;
    indication: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    dosage: string;
    startDate: string;
    indication: string;
}, {
    name: string;
    dosage: string;
    startDate: string;
    indication: string;
}>;
export declare const AllergySchema: z.ZodObject<{
    allergen: z.ZodString;
    reactionType: z.ZodString;
    severity: z.ZodEnum<["mild", "moderate", "severe"]>;
    dateReported: z.ZodString;
}, "strip", z.ZodTypeAny, {
    allergen: string;
    reactionType: string;
    severity: "mild" | "moderate" | "severe";
    dateReported: string;
}, {
    allergen: string;
    reactionType: string;
    severity: "mild" | "moderate" | "severe";
    dateReported: string;
}>;
export declare const ConditionSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodEnum<["active", "resolved", "chronic"]>;
    diagnosisDate: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "active" | "resolved" | "chronic";
    name: string;
    diagnosisDate: string;
    notes?: string | undefined;
}, {
    status: "active" | "resolved" | "chronic";
    name: string;
    diagnosisDate: string;
    notes?: string | undefined;
}>;
export declare const PastReactionSchema: z.ZodObject<{
    drug: z.ZodString;
    reactionType: z.ZodString;
    date: z.ZodString;
    severity: z.ZodEnum<["mild", "moderate", "severe"]>;
}, "strip", z.ZodTypeAny, {
    date: string;
    reactionType: string;
    severity: "mild" | "moderate" | "severe";
    drug: string;
}, {
    date: string;
    reactionType: string;
    severity: "mild" | "moderate" | "severe";
    drug: string;
}>;
export declare const PatientHistorySchema: z.ZodObject<{
    patientId: z.ZodString;
    medications: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        dosage: z.ZodString;
        startDate: z.ZodString;
        indication: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        dosage: string;
        startDate: string;
        indication: string;
    }, {
        name: string;
        dosage: string;
        startDate: string;
        indication: string;
    }>, "many">;
    allergies: z.ZodArray<z.ZodObject<{
        allergen: z.ZodString;
        reactionType: z.ZodString;
        severity: z.ZodEnum<["mild", "moderate", "severe"]>;
        dateReported: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        allergen: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        dateReported: string;
    }, {
        allergen: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        dateReported: string;
    }>, "many">;
    conditions: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        status: z.ZodEnum<["active", "resolved", "chronic"]>;
        diagnosisDate: z.ZodString;
        notes: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "active" | "resolved" | "chronic";
        name: string;
        diagnosisDate: string;
        notes?: string | undefined;
    }, {
        status: "active" | "resolved" | "chronic";
        name: string;
        diagnosisDate: string;
        notes?: string | undefined;
    }>, "many">;
    pastReactions: z.ZodArray<z.ZodObject<{
        drug: z.ZodString;
        reactionType: z.ZodString;
        date: z.ZodString;
        severity: z.ZodEnum<["mild", "moderate", "severe"]>;
    }, "strip", z.ZodTypeAny, {
        date: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        drug: string;
    }, {
        date: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        drug: string;
    }>, "many">;
    lastUpdated: z.ZodString;
}, "strip", z.ZodTypeAny, {
    patientId: string;
    medications: {
        name: string;
        dosage: string;
        startDate: string;
        indication: string;
    }[];
    allergies: {
        allergen: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        dateReported: string;
    }[];
    conditions: {
        status: "active" | "resolved" | "chronic";
        name: string;
        diagnosisDate: string;
        notes?: string | undefined;
    }[];
    pastReactions: {
        date: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        drug: string;
    }[];
    lastUpdated: string;
}, {
    patientId: string;
    medications: {
        name: string;
        dosage: string;
        startDate: string;
        indication: string;
    }[];
    allergies: {
        allergen: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        dateReported: string;
    }[];
    conditions: {
        status: "active" | "resolved" | "chronic";
        name: string;
        diagnosisDate: string;
        notes?: string | undefined;
    }[];
    pastReactions: {
        date: string;
        reactionType: string;
        severity: "mild" | "moderate" | "severe";
        drug: string;
    }[];
    lastUpdated: string;
}>;
export type Medication = z.infer<typeof MedicationSchema>;
export type Allergy = z.infer<typeof AllergySchema>;
export type Condition = z.infer<typeof ConditionSchema>;
export type PastReaction = z.infer<typeof PastReactionSchema>;
export type PatientHistory = z.infer<typeof PatientHistorySchema>;
//# sourceMappingURL=patient-history.schema.d.ts.map