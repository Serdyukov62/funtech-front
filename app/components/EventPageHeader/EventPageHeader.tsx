import { useState } from "react";
import tgIcon from "../../assets/tgIcon.svg";
import eventImg from "../../assets/Illustration_Checkbox.png";
import { IEvent } from "contracts/types/event";
import { formatDate } from "~/utils/formatDate";

interface EventPageHeaderProps {
  event: IEvent;
}

export default function EventPageHeader({ event }: EventPageHeaderProps) {
  const [shareButton, setShareButton] = useState(false);

  const formatedDate = formatDate(event.datetime);

  return (
    <section className="eventPage">
      <div className="eventPage-title-container">
        <div className="eventPage-text-container">
          <h2 className="title">{event.title}</h2>
          <p className="subtitle">Организатор: {event.host_company}</p>
        </div>
        <div className="eventPage-text-container">
          <p className="text">{event.location_address}</p>
          <p className="text-gray">{formatedDate}</p>
          <p className="text">{event.registration_status}</p>
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
