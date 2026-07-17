import { z } from 'zod';
export declare const PatientSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    dateOfBirth: z.ZodString;
    medicalHistory: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    medicalHistory?: string[] | undefined;
}, {
    name: string;
    id: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    medicalHistory?: string[] | undefined;
}>;
export type Patient = z.infer<typeof PatientSchema>;
//# sourceMappingURL=patient.schema.d.ts.map