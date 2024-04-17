import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "@remix-run/react";
import {
  ZSignIn,
  inputSignInFormLabels,
  signInSchema,
} from "contracts/sign/sign";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import icon from "../../assets/Icons-eye.svg";
import { activate, signin } from "~/utils/api";

import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useStores } from "~/stores/rootStoreContext";

const resolver = zodResolver(signInSchema);

const FormInput = ({
  name,
  type,
  register,
  errors,
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

export default observer(function SignIn() {
  const navigation = useNavigate();
  const {
    userStore: { getUserInfo, user },
  } = useStores();

  const [err, setErr] = useState(null);

  function activation() {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid");
    const token = urlParams.get("token");
    const dataActivation = { uid, token };

    if (dataActivation.uid && dataActivation.token) {
      activate(dataActivation);
    }
  }

  useEffect(() => {
    activation();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ZSignIn>({
    resolver,
    mode: 'onBlur',
  });

  

  const onSubmit = (data: ZSignIn) => {
    if (!data) {
      return;
    }
    signin(data)
      .then((userToken: string) => {
        if (userToken) {
          localStorage.setItem("token", userToken);
          getUserInfo(userToken)
          .then(() => {
            user?.profile_full ? navigation("/") : navigation("/anketa");
          })
        }
      })
      .catch((e) => {
        setErr(e.message);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signin-form"
        method="POST"
      >
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
          <FormInput register={register} errors={errors} name="email" type="email" />
          <FormInput register={register} errors={errors} name="password" type="password" />
          {err ? <p className="error">{err}</p> : null}
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
      </form>
    </>
  );
});
