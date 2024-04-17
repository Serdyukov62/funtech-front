import icon from "../../assets/Icons-eye.svg";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@remix-run/react";
import {
  ZSignUp,
  inputSignUpFormLabels,
  signUpSchema,
} from "contracts/sign/sign";
import { observer } from "mobx-react-lite";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStores } from "~/stores/rootStoreContext";
import { signUp } from "~/utils/api";
const resolver = zodResolver(signUpSchema);

const FormInput = ({
  name,
  type,
  register,
  errors,
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


export default observer(function SignUp() {
  const navigation = useNavigate();
  const [errorApi, setErrorApi] = useState(null)

  const {userStore: {setEmail, loggedIn}} = useStores()

  useEffect(() => {
    if(loggedIn) navigation("/")
  },[loggedIn])

  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ZSignUp>({
    resolver,
    mode: "onBlur",
  });

  
  const onSubmit = async (data: ZSignUp) => {
  signUp(data)
    .then((res) => {
      setEmail(res)
      navigation("/activation");
    })
    .catch((e) => {
      setErrorApi(e.message)
    })
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="signup-form"
        method="POST"
      >
        <h2 className="title">Регистрация</h2>
        <p className="title-text">Введите email и придумайте пароль</p>
        <div className="form-container">
          <FormInput register={register} errors={errors} name="email" type="email" />
          <FormInput register={register} errors={errors} name="password" type="password" />
          <FormInput register={register} errors={errors} name="confirmPassword" type="password" />
            {errorApi ? <p className="error">{errorApi}</p> : null}
        </div>
        <button className="submit-btn" type="submit" disabled={isSubmitting}>
          Готово
        </button>
        <button
          className="back-btn"
          type="button"
          onClick={() => navigation(-1)}
        >
          Назад
        </button>
      </form>
    </>
  );
});
