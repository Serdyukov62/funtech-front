import { useNavigate } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useStores } from "~/stores/rootStoreContext";


export default observer( function Activation() {
  const navigate = useNavigate();

  const {userStore: {userInfo}} = useStores()

  return (
    <>
      <section className="activation">
        <div className="container">
          <h2 className="title">Подтверждение почты</h2>
          <p className="text">
            Для подтверждения почты мы отправили письмо на ящик {userInfo?.email}.
            Пожалуйста, проверьте ваш почтовый ящик и выполните указания из
            письма.
          </p>
          <button onClick={() => navigate("/signin")} className="back-btn">
            Хорошо
          </button>
        </div>
      </section>
    </>
  );
})
