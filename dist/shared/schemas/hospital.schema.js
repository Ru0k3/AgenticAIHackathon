import { z } from 'zod';
export const HospitalSchema = z.object({
    id: z.string(),
    name: z.string(),
    location: z.string(),
    imageUrl: z.string(),
    description: z.string(),
});
//# sourceMappingURL=hospital.schema.js.map