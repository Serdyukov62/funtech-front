import { z } from 'zod';

const experienceEnumSchema = z.enum([
  'no_experience',
  '1_year',
  '3_years',
  '5_years',
  'other',
]);

export const slide4Schema = z.object({
  workExperience: experienceEnumSchema, // Опыт работы
});

export type ZSlide4 = z.infer<typeof slide4Schema>;
