import { z } from 'zod';

export const slide3Schema = z.object({
  workplace: z.string().min(1, { message: 'Поле обязательно для заполнения' }), // Место работы
  position: z.string().min(1, { message: 'Поле обязательно для заполнения' }), // Должность
});

export type ZSlide3 = z.infer<typeof slide3Schema>;
