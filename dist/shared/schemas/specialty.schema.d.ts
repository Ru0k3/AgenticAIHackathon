import { z } from 'zod';
export declare const SpecialtySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    id: string;
    imageUrl: string;
}, {
    name: string;
    description: string;
    id: string;
    imageUrl: string;
}>;
export type Specialty = z.infer<typeof SpecialtySchema>;
//# sourceMappingURL=specialty.schema.d.ts.map