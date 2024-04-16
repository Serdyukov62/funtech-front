import { z } from 'zod';

const experienceEnumSchema = z.enum([
  'no_experience',
  'more_1_year',
  'more_3_years',
  'more_5_years',
  'other_experience',
], { errorMap: () => ({ message: 'Выберите ваш опыт работы' }) });

export const slide4Schema = z.object({
  experience: experienceEnumSchema, // Опыт работы
});

export type ZSlide4 = z.infer<typeof slide4Schema>;
