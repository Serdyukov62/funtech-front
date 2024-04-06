import { zodResolver } from '@hookform/resolvers/zod';
import {
  InputAnketaKeys,
  InputAnketaLabels,
  ZAnketaForm,
  anketaFormSchema,
  anketaSlideFields,
  isAnketaSlideKey,
} from 'contracts/anketa/anketa';
import { checkOptions, radioOptions } from 'contracts/anketa/options';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function AnketaForm() {
  const slidesCount = Object.keys(anketaSlideFields).length;

  const {
    trigger,
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ZAnketaForm>({
    resolver: zodResolver(anketaFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ZAnketaForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const [count, setCount] = useState(0);

  const increment = async () => {
    const slide = `Slide${count}`;
    if (isAnketaSlideKey(slide)) {
      const fields = anketaSlideFields[slide];
      const isCurrentSlideValid = await trigger(fields);
      if (isCurrentSlideValid) {
        setCount((prev) => prev + 1);
      }
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => setCount((prev) => --prev);

  const FormInput = ({ name }: { name: InputAnketaKeys }) => (
    <label>
      {InputAnketaLabels[name]}
      <input type="text" {...register(name)} />
      {errors[name] && <p>{`${errors[name]?.message}`}</p>}
    </label>
  );

  const FormRadio = <T extends keyof typeof radioOptions>({
    name,
  }: {
    name: T;
  }) => {
    const options = radioOptions[name];

    return (
      <fieldset>
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" value={option.value} {...register(name)} />
            {option.label}
          </label>
        ))}
        {errors[name] && <p>{`${errors[name]?.message}`}</p>}
      </fieldset>
    );
  };

  const FormCheckbox = <T extends keyof typeof checkOptions>({
    name,
  }: {
    name: T;
  }) => {
    const options = checkOptions[name];

    return (
      <fieldset>
        {options.map((option, index) => (
          <label key={index}>
            <input type="checkbox" value={option.value} {...register(name)} />
            {option.label}
          </label>
        ))}
        {errors[name] && <p>{`${errors[name]?.message}`}</p>}
      </fieldset>
    );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      >
        {count === 0 && (
          <>
            <h3>Остался ещё один шаг — заполнить анкету</h3>
            <p>
              Эти данные помогут нам идентифицировать вас на мероприятии и вам
              не нужно будет заполнять эту анкету ещё раз
            </p>
          </>
        )}
        {count === 1 && (
          <>
            <h3>Как вас зовут?</h3>
            <FormInput name="firstName" />
            <FormInput name="lastName" />
          </>
        )}
        {count === 2 && (
          <>
            <h3>Как можно с вами связаться?</h3>
            <FormInput name="phone" />
          </>
        )}
        {count === 3 && (
          <>
            <h3>Кем вы работаете?</h3>
            <FormInput name="position" />
            <FormInput name="workplace" />
          </>
        )}
        {count === 4 && (
          <>
            <h3>Выберите ваш опыт работы</h3>
            <FormRadio name="workExperience" />
          </>
        )}
        {count === 5 && (
          <>
            <h3>Выберите ваше направление</h3>
            <FormCheckbox name="direction" />
          </>
        )}
        {count === 6 && (
          <>
            <h3>В каком формате вы хотели бы участвовать в мероприятиях</h3>
            <FormRadio name="participationFormat" />
          </>
        )}
        {count === 7 && (
          <>
            <h3>Ваше согласие на обработку данных</h3>
            <label>
              <input type="checkbox" {...register('consentToDataProcessing')} />
              Я даю своё согласие на передачу в ООО «ЯНДЕКС» анкеты, содержащей
              мои персональные данные, и согласен с тем, что они будут храниться
              в ООО «ЯНДЕКС» в течение 10 лет и будут использованы исключительно
              для целей приглашения меня к участию в мероприятиях группы
              компаний «ЯНДЕКС», в соответствии с Федеральным законом «О
              персональных данных».
            </label>

            <label>
              <input type="checkbox" {...register('consentToSendResume')} />Я
              даю своё согласие на передачу в ООО «ЯНДЕКС» резюме и/или анкеты,
              содержащих мои персональные данные, и согласен с тем, что они
              будут храниться в ООО «ЯНДЕКС» в течение 10 лет и будут
              обрабатываться исключительно для целей предложения мне вакансий
              группы компаний «ЯНДЕКС», в соответствии с Федеральным законом «О
              персональных данных».
            </label>
          </>
        )}
        {count > 1 && (
          <button type="button" onClick={decrement}>
            Назад
          </button>
        )}
        {count < slidesCount && (
          <button type="button" onClick={increment}>
            {count === 0 ? "Заполнить анкету" : "Далее"}
          </button>
        )}
        {count === slidesCount && (
          <button disabled={isSubmitting} type="submit">
            Отправить
          </button>
        )}
      </form>
    </div>
  );
}
