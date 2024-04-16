import { z } from 'zod';

const directionEnum = z.array(z.enum([
  'Backend',
  'Frontend',
  'Mobile',
  'QA',
  'ML',
  'Other',
]), { errorMap: () => ({ message: 'Выберите направление' }) });

export const slide5Schema = z.object({
  specialization: directionEnum, // Направление
});

export type ZSlide5 = z.infer<typeof slide5Schema>;
