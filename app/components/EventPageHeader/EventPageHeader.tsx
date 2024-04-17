import { useState } from "react";
import tgIcon from "../../assets/tgIcon.svg";
import { IEvent } from "contracts/types/event";
import { formatDate } from "~/utils/formatDate";
import { observer } from "mobx-react-lite";
import { useStores } from "~/stores/rootStoreContext";

import Button from "./Button";
import { deleteEventRegistration } from "~/utils/api";

interface EventPageHeaderProps {
  event: IEvent;
}

export default observer(function EventPageHeader({
  event,
}: EventPageHeaderProps) {
  const [shareButton, setShareButton] = useState(false);

  const [buttonText, setButtonText] = useState({
    cancel: "Отменить участие",
    register: "Хочу участвовать",
    record: "Смотреть запись",
  });


  const {
    userStore: { loggedIn, user },
  } = useStores();

  const formatedDate = formatDate(event.datetime);


  const handleShareClick = () => {
    if (shareButton) {
      const shareUrl = "https://t.me/share/url?url=";
      const shareText = event.title;
      const shareWindow = window.open(
        shareUrl +
          encodeURIComponent(window.location.href) +
          "&text=" +
          encodeURIComponent(shareText),
        "_blank"
      );
      shareWindow?.focus();
    } else {
      setShareButton(!shareButton);
    }
  };

  return (
    <section className="eventPage">
      <div className="eventPage-title-container">
        <div className="eventPage-text-container">
          <h2 className="title">{event.title}</h2>
          <p className="subtitle">Организатор: {event.host_company}</p>
        </div>
        <div className="eventPage-text-container">
          <p className="text">
            {event.format === "Онлайн" ? event.format : event.location_address}
          </p>
          <p className="text-gray">{formatedDate}</p>
          <p className="text">{event.registration_status}</p>
        </div>
        <div className="btn-container">
          <Button deleteEventRegistration={deleteEventRegistration} buttonText={buttonText} user={user} event={event} loggedIn={loggedIn} />
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
            onClick={handleShareClick}
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
        <img
          className="eventPage-img"
          src={event.banner ? event.banner : event.image}
          alt="Картинка события"
        />
      </div>
    </section>
  );
});
