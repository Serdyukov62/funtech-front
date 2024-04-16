import { z } from 'zod';

// Создаем Zod схему используя значения из participationFormatOptions
const participationFormatEnumSchema = z.enum(["online", "offline"]);

export const slide6Schema = z.object({
  preferred_format: participationFormatEnumSchema, // Формат участия
});

export type ZSlide6 = z.infer<typeof slide6Schema>;
