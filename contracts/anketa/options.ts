
const experienceOptions = [
  { value: 'no_experience', label: 'Нет опыта' },
  { value: 'more_1_year', label: 'От 1 года' },
  { value: 'more_3_years', label: 'От 3 лет' },
  { value: 'more_5_years', label: 'От 5 лет' },
  { value: 'other_experience', label: 'Другое' },
] as const;

const participationFormatOptions = [
  { value: 'online', label: 'Онлайн' },
  { value: 'offline', label: 'Офлайн' },
] as const;

const directionOptions = [
  { value: 'Backend', label: 'Backend' },
  { value: 'Frontend', label: 'Frontend' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'QA', label: 'QA' },
  { value: 'ML', label: 'ML' },
  { value: 'Other', label: 'Другое' },
] as const;

export const radioOptions = {
  experience: experienceOptions,
  preferred_format : participationFormatOptions
}

export const checkOptions = {
  specialization: directionOptions
}
