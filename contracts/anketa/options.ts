
const experienceOptions = [
  { value: 'no_experience', label: 'Нет опыта' },
  { value: '1_year', label: 'От 1 года' },
  { value: '3_years', label: 'От 3 лет' },
  { value: '5_years', label: 'От 5 лет' },
  { value: 'other', label: 'Другое' },
] as const;

const participationFormatOptions = [
  { value: 'online', label: 'Онлайн' },
  { value: 'offline', label: 'Офлайн' },
] as const;

const directionOptions = [
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'qa', label: 'QA' },
  { value: 'ml', label: 'ML' },
  { value: 'other', label: 'Другое' },
] as const;

export const radioOptions = {
  workExperience: experienceOptions,
  participationFormat : participationFormatOptions
}

export const checkOptions = {
  direction: directionOptions
}
