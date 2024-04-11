import { IEvent } from "contracts/types/event";
import img from "../../assets/Size=Small.png";

interface EventProps {
  event: IEvent;
}


export default function Event({event}: EventProps) {


  function formatDate(date: string) {
    const d = new Date(date);
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  }

  return (
    <div className="event">
      <img className="event-img" src={event.image} alt="Превью мероприятия" />
      <div className="text-container">
        <h2 className="title">{event.title}</h2>
        <p className="subtitle">Онлайн</p>
        <p className="subtitle">20 марта 18:00 среда</p>
        <p className="link">Идет регистрация</p>
      </div>
    </div>
  );
}
