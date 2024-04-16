import "./checkbox.css";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputAnketaKeys,
  InputAnketaLabels,
  ZAnketaForm,
  anketaFormSchema,
  anketaSlideFields,
  isAnketaSlideKey,
} from "contracts/anketa/anketa";
import { checkOptions, radioOptions } from "contracts/anketa/options";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@remix-run/react";
import { postAnketa } from "~/utils/api";

interface Props {
  id: number | undefined;
  token: string | null;
}

export function AnketaForm({ id, token }: Props) {
  const [count, setCount] = useState(0);
  const slide = `Slide${count}`;

  const slidesCount = Object.keys(anketaSlideFields).length;
  const navigation = useNavigate();

  const {
    trigger,
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<ZAnketaForm>({
    resolver: zodResolver(anketaFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ZAnketaForm) => {
    console.log(data);
    if (id !== null && token !== null) {
      postAnketa(data, id!, token);
    }
  };

  const increment = async () => {
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
    <label className="input-container">
      <p className="input-text">{InputAnketaLabels[name]}</p>
      <input
        className={errors[name] ? "input input-error" : "input"}
        type="text"
        {...register(name)}
      />
      {errors[name] && <p className="error">{`${errors[name]?.message}`}</p>}
    </label>
  );

  const FormRadio = <T extends keyof typeof radioOptions>({
    name,
  }: {
    name: T;
  }) => {
    const options = radioOptions[name];

    return (
      <fieldset className="radio-container">
        <div className="radio">
          <p
            className="required"
            style={{ alignSelf: "flex-start", margin: 0, padding: 0 }}
          >
            *
          </p>
          {options.map((option, index) => (
            <label key={index} className="option-container">
              <input
                className="option-input"
                type="radio"
                value={option.value}
                {...register(name)}
              />
              <p
                className={`${count == 6 ? "option-text-dif" : "option-text"}`}
              >
                {option.label}
              </p>
            </label>
          ))}
        </div>
        {errors[name] && (
          <p
            style={{ marginTop: "16px" }}
            className="error"
          >{`${errors[name]?.message}`}</p>
        )}
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
      <fieldset className="checkbox-container">
        <div className="checkbox">
          <p
            className="required"
            style={{ alignSelf: "flex-start", margin: 0, padding: 0 }}
          >
            *
          </p>
          {options.map((option, index) => (
            <label key={index} className="checkbox-option-container">
              <input
                type="checkbox"
                className="checkbox-input"
                value={option.value}
                {...register(name)}
              />
              <p className="checkbox-option-text">{option.label}</p>
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
        {errors[name] && (
          <p
            style={{ marginTop: "16px" }}
            className="error"
          >{`${errors[name]?.message}`}</p>
        )}
      </fieldset>
    );
  };

  return (
    <div>
      <form className="anketa-container" onSubmit={handleSubmit(onSubmit)}>
        {count >= 1 && (
          <div className="progress-container">
            {Array.from({ length: slidesCount }, (_, i) => (
              <div
                key={i}
                className={`progress ${count - 1 >= i && "active"} ${
                  i < count - 1 && "past"
                }`}
              ></div>
            ))}
          </div>
        )}
        {count == 0 && (
          <>
            <h3 className="title">Остался ещё один шаг — заполнить анкету</h3>
            <p className="text">
              Эти данные помогут нам идентифицировать вас на мероприятии и вам
              не нужно будет заполнять эту анкету ещё раз
            </p>
          </>
        )}
        {count == 1 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              Как вас зовут?
            </h3>
            <div className="input-wrapper">
              <FormInput name="first_name" />
              <FormInput name="last_name" />
            </div>
          </>
        )}
        {count == 2 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              Как можно с вами связаться?
            </h3>
            <FormInput name="phone" />
          </>
        )}
        {count == 3 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              Кем вы работаете?
            </h3>
            <div className="input-wrapper">
              <FormInput name="occupation" />
              <FormInput name="employer" />
            </div>
          </>
        )}
        {count == 4 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              Выберите ваш опыт работы
            </h3>
            <FormRadio name="experience" />
          </>
        )}
        {count == 5 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              Выберите ваше направление
            </h3>
            <FormCheckbox name="specialization" />
          </>
        )}
        {count == 6 && (
          <>
            <h3
              style={{ marginBottom: "40px", marginTop: 0 }}
              className="title"
            >
              В каком формате вы хотели бы участвовать в мероприятиях
            </h3>
            <FormRadio name="preferred_format" />
          </>
        )}
        {count == 7 && (
          <>
            <h3
              style={{ marginBottom: "28px", marginTop: 0 }}
              className="title"
            >
              Ваше согласие на обработку данных
            </h3>
            <div className="register-container">
              <p
                className="required"
                style={{
                  position: "absolute",
                  left: "-14px",
                  top: 0,
                  margin: 0,
                  padding: 0,
                }}
              >
                *
              </p>
              <label className="register-checkbox-container">
                <input
                  className="register-checkbox"
                  type="checkbox"
                  {...register("consent_personal_data_processing")}
                />
                <p className="register-checkbox-text">
                  Я даю своё согласие на передачу в ООО «ЯНДЕКС» анкеты,
                  содержащей мои персональные данные, и согласен с тем, что они
                  будут храниться в ООО «ЯНДЕКС» в течение 10 лет и будут
                  использованы исключительно для целей приглашения меня к
                  участию в мероприятиях группы компаний «ЯНДЕКС», в
                  соответствии с Федеральным законом «О персональных данных».
                </p>
              </label>
              <label className="register-checkbox-container">
                <input
                  className="register-checkbox"
                  type="checkbox"
                  {...register("consent_vacancy_data_processing")}
                />
                <p className="register-checkbox-text">
                  Я даю своё согласие на передачу в ООО «ЯНДЕКС» резюме и/или
                  анкеты, содержащих мои персональные данные, и согласен с тем,
                  что они будут храниться в ООО «ЯНДЕКС» в течение 10 лет и
                  будут обрабатываться исключительно для целей предложения мне
                  вакансий группы компаний «ЯНДЕКС», в соответствии с
                  Федеральным законом «О персональных данных».
                </p>
              </label>
            </div>
          </>
        )}

        {count < slidesCount && (
          <button className="continue-btn" type="button" onClick={increment}>
            {count == 0 ? "Заполнить анкету" : "Далее"}
          </button>
        )}

        {count == slidesCount && (
          <button
            className="continue-btn"
            disabled={isSubmitting}
            type="submit"
          >
            Отправить
          </button>
        )}
        {count == 0 && (
          <button
            className={`back-btn ${count == 0 && "back-btn-first"}`}
            type="button"
            onClick={() => navigation("/")}
          >
            Назад
          </button>
        )}
        {count >= 1 && (
          <button className="back-btn" type="button" onClick={decrement}>
            Назад
          </button>
        )}
      </form>
    </div>
  );
}
