import { IEvent } from "contracts/types/event";
import { formatDate } from "~/utils/formatDate";
import { observer } from "mobx-react-lite";


interface EventProps {
  event: IEvent;
  past: boolean;
  onClick: () => void ;
}

export default observer(function Event({
  event,
  onClick,
}: EventProps) {

  const formatedDate = formatDate(event.datetime);

  return (
    <div onClick={onClick} className="event">
          <img
            className="event-img"
            src={event?.image}
            alt="Превью мероприятия"
          />
          <div className="text-container">
            <h2 className="title">{event?.title}</h2>
            <p className="subtitle">{event?.format}</p>
            <p className="subtitle">{formatedDate}</p>
            <p className="link">{event?.registration_status}</p>
          </div>
    </div>
  );
});
