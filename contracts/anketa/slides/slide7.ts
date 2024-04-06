import { z } from 'zod';

export const slide7Schema = z.object({
  consentToDataProcessing: z.literal(true), // Согласие на обработку данных
  consentToSendResume: z.boolean().optional(), // Согласие на передачу резюме
});

export type ZSlide7 = z.infer<typeof slide7Schema>;
