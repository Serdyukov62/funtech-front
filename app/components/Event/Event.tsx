import { IEvent } from "contracts/types/event";
import img from "../../assets/Size=Small.png";
import { formatDate } from "~/utils/formatDate";


interface EventProps {
  event: IEvent;
  past: boolean;
  onClick: () => void;
}

export default function Event({ event, past, onClick }: EventProps) {

  const formatedDate = formatDate(event.datetime);

  return (
        <div onClick={onClick} className="event">
          <img
            className="event-img"
            src={event.host_photo ? event.host_photo : img}
            alt="Превью мероприятия"
          />
          <div className="text-container">
            <h2 className="title">{event.title}</h2>
            <p className="subtitle">
              {event.format}
            </p>
            <p className="subtitle">{formatedDate}</p>
            {!past && (
              <p className="link">
                {event.event_status === "on_time"
                  ? "Идет регистрация"
                  : "Регистрация завершена" || 'Регистрация отменена'}
              </p>
            )}
          </div>
        </div>
  );
}
