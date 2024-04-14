import { Subevent } from "contracts/types/event";
import photo from "../../assets/photo-host.png";

interface EventPageProgramProps {
  event: Subevent;
}

export default function EventPageProgram({event}: EventPageProgramProps) {

  function formateTime(time: string) {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`
  }

  return (
    <div className="eventPage-time-row">
      <h4 className="title-time">{formateTime(event.time)}</h4>
      <p className="subtitle">{event.title}</p>
      <div className="eventPage-time-profile">
        <div className="eventPage-time-profile-img">
          <img
            className="eventPage-time-photo"
            src={photo}
            alt="Фото спикера"
          />
        </div>
        <div className="eventPage-time-text-container">
          <h5 className="title-profile">Алексей Сидорин</h5>
          <p className="subtitle-company">Яндекс</p>
          <p className="subtitle-profile">
            Руководитель блока «Интранет» HR Tech
          </p>
        </div>
      </div>
    </div>
  );
}
