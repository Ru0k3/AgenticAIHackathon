import { z } from 'zod';
export const DoctorSchema = z.object({
    id: z.string(),
    name: z.string(),
    specialty: z.string(),
    hospital: z.string(),
    imageUrl: z.string(),
});
//# sourceMappingURL=doctor.schema.js.map