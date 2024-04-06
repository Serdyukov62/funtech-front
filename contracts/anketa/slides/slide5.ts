import { z } from 'zod';

const directionEnum = z.array(z.enum([
  'backend',
  'frontend',
  'mobile',
  'qa',
  'ml',
  'other',
]));

export const slide5Schema = z.object({
  direction: directionEnum, // Направление
});

export type ZSlide5 = z.infer<typeof slide5Schema>;
