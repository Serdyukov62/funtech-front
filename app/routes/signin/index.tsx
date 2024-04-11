import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import {
  Form,
  json,
  useActionData,
  useNavigate,
} from "@remix-run/react";
import {
  ZSignIn,
  inputSignInFormLabels,
  signInSchema,
} from "contracts/sign/sign";
import { HTMLInputTypeAttribute, useEffect } from "react";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import { badRequest } from "~/utils/request.server";
import icon from "../../assets/Icons-eye.svg";
import { signin } from "~/utils/api";

const resolver = zodResolver(signInSchema);




export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<ZSignIn>(request, resolver);
  if (errors) {
    return json({ errors, defaultValues, formError: null });
  }

  const user = await signin(data);

  if (!user) {
    return badRequest({
      formError: "Логин или пароль введены неверно, попробуйте ещё раз.",
      defaultValues,
    });
  }

  if (user) {
    const requestUrl = new URL(request.url);
    const redirectTo = `/${requestUrl.searchParams.get("redirectTo") ?? ""}`;
    return redirect(redirectTo);
  }

  return badRequest({
    formError: "Логин или пароль введены неверно, попробуйте ещё раз.",
    defaultValues,
  });
};

export default function SignIn() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigate();

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    const token = urlParams.get('token');
  
    const data = { uid, token };

    const activate  = async () => {
      await fetch('http://funtech.b2k.me:8000/api/v1/users/activation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('token', res.token)
        return res;
      })
      .then(() => navigation('/'))
      .catch()
    }
    if (data.uid && data.token) {
      activate()
    }
    return () => {};
  },[]);

  const {
    register,
    formState: { isSubmitting, errors },
  } = useRemixForm<ZSignIn>({
    resolver,
    mode: "onBlur",
  });

  const FormInput = ({
    name,
    type,
  }: {
    name: keyof ZSignIn;
    type: HTMLInputTypeAttribute;
  }) => (
    <label className="label">
      <p className="text">{inputSignInFormLabels[name]}</p>
      <div className="input-container">
        <input
          className={errors[name] ? "input error" : "input"}
          type={type}
          {...register(name)}
        />
        {name === "password" ? (
          <img src={icon} alt="passwordicon" className="icon"></img>
        ) : null}
      </div>
      {errors[name] && <p className="error">{`${errors[name]?.message}`}</p>}
    </label>
  );

  return (
    <Form className="signin-form" method="POST">
      <h2 className="title">Вход</h2>
      <div className="switch-container">
        <button type="button" className="mail-btn">
          Почта
        </button>
        <button type="button" className="id-btn">
          Яндекс ID
        </button>
      </div>
      <div className="form-container">
        <FormInput name="email" type="email" />
        <FormInput name="password" type="password" />
        {actionData?.formError && (
          <p className="error">{actionData.formError}</p>
        )}
      </div>

      <button
        className="reset-btn"
        type="button"
        onClick={() => navigation("/reset")}
      >
        <p className="text-btn">Не помню пароль</p>
      </button>

      <button className="submit-btn" type="submit" disabled={isSubmitting}>
        Войти
      </button>
      <button
        className="register-btn"
        type="button"
        onClick={() => navigation("/signup")}
      >
        Зарегистрироваться
      </button>
    </Form>
  );
}
