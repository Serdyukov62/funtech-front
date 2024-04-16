import { z } from 'zod';

export const slide7Schema = z.object({
  consent_personal_data_processing: z.literal(true), // Согласие на обработку данных
  consent_vacancy_data_processing: z.boolean(), // Согласие на передачу резюме
});

export type ZSlide7 = z.infer<typeof slide7Schema>;
