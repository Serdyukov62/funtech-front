import { useState } from "react";
import tgIcon from "../../assets/tgIcon.svg";
import eventImg from '../../assets/Illustration_Checkbox.png'

export default function EventPageHeader() {
  const [shareButton, setShareButton] = useState(false);

  return (
    <section className="eventPage">
      <div className="eventPage-title-container">
        <div className="eventPage-text-container">
          <h2 className="title">Митап HR Tech</h2>
          <p className="subtitle">Организатор: Яндекс</p>
        </div>
        <div className="eventPage-text-container">
          <p className="text">Москва, улица Льва Толстого, 16</p>
          <p className="text-gray">29 марта 16:00 (мск) пятница</p>
          <p className="text">Идёт регистрация</p>
        </div>
        <div className="btn-container">
          <button type="button" className="btn-primary">
            <p className="btn-text">Хочу участвовать</p>
          </button>
          <button
            onClick={() => {
              setShareButton(!shareButton);
            }}
            type="button"
            className="btn-share"
          >
            <div className="btn-icon"></div>
          </button>
          <button
            type="button"
            className={`btn-telegramm ${
              shareButton && "btn-telegramm-pressed"
            }`}
          >
            <img src={tgIcon} alt="Икона отправки сообщения" />
            <p className="subtitle">Поделиться в Telegram</p>
          </button>
        </div>
      </div>

      <div className="eventPage-img-container">
        <img className="eventPage-img" src={eventImg} alt="Картинка события" />
      </div>
    </section>
  );
}
