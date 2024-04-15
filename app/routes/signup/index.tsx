import icon from "../../assets/Icons-eye.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, json, useNavigate } from "@remix-run/react";
import {
  ZSignUp,
  inputSignUpFormLabels,
  signUpSchema,
} from "contracts/sign/sign";
import { HTMLInputTypeAttribute } from "react";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import { signUp } from "~/utils/api";

const resolver = zodResolver(signUpSchema);

export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<ZSignUp>(request, resolver);
  if (errors) {
    return json({ errors, defaultValues });
  }

  const user = await signUp(data);
  
  if (!user) {
    return json({
      errors: {
        formError: "Данные введены неверно, попробуйте ещё раз.",
      },
      defaultValues,
    });
  }


  // TODO : регистрация + создание куки с токеном
  return redirect("/activation");
};

export default function SignUp() {
  const navigation = useNavigate();
  const {
    register,
    formState: { isSubmitting, errors },
  } = useRemixForm<ZSignUp>({
    resolver,
    mode: "onBlur",
  });

  const FormInput = ({
    name,
    type,
  }: {
    name: keyof ZSignUp;
    type: HTMLInputTypeAttribute;
  }) => (
    <label className="label">
      <p className="text">{inputSignUpFormLabels[name]}</p>
      <div className="input-container">
        <input
          className={errors[name] ? "input error" : "input"}
          type={type}
          {...register(name)}
        />
        {type === "password" ? (
          <img src={icon} alt="passwordicon" className="icon"></img>
        ) : null}
      </div>
      {errors[name] && <p className="error">{`${errors[name]?.message}`}</p>}
    </label>
  );

  return (
    <Form className="signup-form" method="POST">
      <h2 className="title">Регистрация</h2>
      <p className="title-text">Введите email и придумайте пароль</p>
      <div className="form-container">
        <FormInput name="email" type="email" />
        <FormInput name="password" type="password" />
        <FormInput name="confirmPassword" type="password" />
      </div>
      <button className="submit-btn" type="submit" disabled={isSubmitting}>
        Готово
      </button>
      <button className="back-btn" type="button" onClick={() => navigation(-1)}>
        Назад
      </button>
    </Form>
  );
}
