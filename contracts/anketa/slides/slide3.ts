import { z } from 'zod';

export const slide3Schema = z.object({
  workplace: z.string(), // Место работы
  position: z.string(), // Должность
});

export type ZSlide3 = z.infer<typeof slide3Schema>;
