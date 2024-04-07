import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const slide2Schema = z.object({
  phone: z.string().min(11, { message: 'Не хватает цифр.' }).max(12,{message: 'Слишком много цифр.'}).regex(phoneRegex, { message: 'Введите числа.' }), // Телефон
});

export type ZSlide2 = z.infer<typeof slide2Schema>;
