import type { z } from 'zod';
import { type ZSlide1, slide1Schema } from './slides/slide1';
import { type ZSlide2, slide2Schema } from './slides/slide2';
import { type ZSlide3, slide3Schema } from './slides/slide3';
import { type ZSlide4, slide4Schema } from './slides/slide4';
import { type ZSlide5, slide5Schema } from './slides/slide5';
import { type ZSlide6, slide6Schema } from './slides/slide6';
import { type ZSlide7, slide7Schema } from './slides/slide7';

export const anketaFormSchema = slide1Schema
  .merge(slide2Schema)
  .merge(slide3Schema)
  .merge(slide4Schema)
  .merge(slide5Schema)
  .merge(slide6Schema)
  .merge(slide7Schema);

export type ZAnketaForm = z.infer<typeof anketaFormSchema>;

export function isAnketaSlideKey(
  slide: string
): slide is keyof typeof anketaSlideFields {
  return slide in anketaSlideFields;
}

export const anketaSlideFields = {
  Slide1: Object.keys(slide1Schema.shape) as (keyof ZSlide1)[],
  Slide2: Object.keys(slide2Schema.shape) as (keyof ZSlide2)[],
  Slide3: Object.keys(slide3Schema.shape) as (keyof ZSlide3)[],
  Slide4: Object.keys(slide4Schema.shape) as (keyof ZSlide4)[],
  Slide5: Object.keys(slide5Schema.shape) as (keyof ZSlide5)[],
  Slide6: Object.keys(slide6Schema.shape) as (keyof ZSlide7)[],
  Slide7: Object.keys(slide7Schema.shape) as (keyof ZSlide6)[],
} as const;

export enum InputAnketaLabels {
  first_name = 'Имя*',
  last_name = 'Фамилия*',
  phone = 'Телефон*',
  employer = 'Место работы*',
  occupation = 'Должность*',
}

export type InputAnketaKeys = keyof typeof InputAnketaLabels
