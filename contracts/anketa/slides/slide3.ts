import { z } from 'zod';

export const slide3Schema = z.object({
  employer: z.string().min(1, { message: 'Поле обязательно для заполнения' }), // Место работы
  occupation: z.string().min(1, { message: 'Поле обязательно для заполнения' }), // Должность
});

export type ZSlide3 = z.infer<typeof slide3Schema>;
