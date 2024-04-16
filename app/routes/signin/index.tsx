import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs } from "@remix-run/node";
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
import { activate, signin } from "~/utils/api";
import { createUserSession } from "~/utils/session.server";
import { observer } from "mobx-react-lite";

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

  console.log(data);

  const user = await signin(data);

  if (!user) {
    return badRequest({
      formError: "Логин или пароль введены неверно, попробуйте ещё раз.",
      defaultValues,
    });
  }

  return createUserSession(user.auth_token,'/anketa');
};

export default observer(function SignIn() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigate();

  function activation() {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid");
    const token = urlParams.get("token");

    const data = { uid, token };

    if (data.uid && data.token) {
      activate(data);
    }
  }

  useEffect(() => {
    activation();
  }, []);

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
    <>
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
    </>
  );
});
