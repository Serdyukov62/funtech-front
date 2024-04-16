import { useNavigate } from "@remix-run/react";

export default function Activation() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h2 className="title">Подтверждение почты</h2>
        <p className="text">
          Для подтверждения почты мы отправили письмо на ящик user@yandex.ru.
          Пожалуйста, проверьте ваш почтовый ящик и выполните указания из
          письма.
        </p>
        <button onClick={() => navigate("/signin")} className="back-btn">
          Хорошо
        </button>
      </div>
    </>
  );
}
