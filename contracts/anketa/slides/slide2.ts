import { z } from 'zod';

export const slide2Schema = z.object({
  phone: z.string(), // Телефон
});

export type ZSlide2 = z.infer<typeof slide2Schema>;
