import { z } from 'zod';
export declare const HospitalSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    location: z.ZodString;
    imageUrl: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    id: string;
    location: string;
    imageUrl: string;
}, {
    name: string;
    description: string;
    id: string;
    location: string;
    imageUrl: string;
}>;
export type Hospital = z.infer<typeof HospitalSchema>;
//# sourceMappingURL=hospital.schema.d.ts.map