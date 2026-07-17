import { z } from 'zod';
export declare const DoctorSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    specialty: z.ZodString;
    hospital: z.ZodString;
    imageUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    imageUrl: string;
    specialty: string;
    hospital: string;
}, {
    name: string;
    id: string;
    imageUrl: string;
    specialty: string;
    hospital: string;
}>;
export type Doctor = z.infer<typeof DoctorSchema>;
//# sourceMappingURL=doctor.schema.d.ts.map