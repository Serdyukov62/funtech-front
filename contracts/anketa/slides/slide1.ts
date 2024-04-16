import { z } from 'zod';

export const slide1Schema = z.object({
  first_name: z.string().min(2, { message: 'Поле обязательно для заполнения' }), // Имя
  last_name: z.string().min(2, { message: 'Поле обязательно для заполнения' }), // Фамилия
});

export type ZSlide1 = z.infer<typeof slide1Schema>;
