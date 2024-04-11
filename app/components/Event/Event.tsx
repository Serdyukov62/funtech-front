import { IEvent } from "contracts/types/event";
import img from "../../assets/Size=Small.png";


interface EventProps {
  event: IEvent;
  past: boolean;

}

export default function Event({ event, past }: EventProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const weekday = new Intl.DateTimeFormat("ru-RU", {
      weekday: "long",
    }).format(date);

    const time = date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const monthNames = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const monthIndex = date.getMonth();
    const month = monthNames[monthIndex];

    return `${date.getDate()} ${month} ${time} ${weekday.toLowerCase()}`;
  }

  return (
    
        <div className="event">
          <img
            className="event-img"
            src={event.host_photo ? event.host_photo : img}
            alt="Превью мероприятия"
          />
          <div className="text-container">
            <h2 className="title">{event.title}</h2>
            <p className="subtitle">
              {event.format === "online" ? "Онлайн" : "Оффлайн"}
            </p>
            <p className="subtitle">{formatDate(event.datetime)}</p>
            {!past && (
              <p className="link">
                {event.event_status === "on_time"
                  ? "Идет регистрация"
                  : "Регистрация завершена"}
              </p>
            )}
          </div>
        </div>
  );
}
