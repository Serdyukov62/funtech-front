import { IEvent } from "contracts/types/event";
import { formatDate } from "~/utils/formatDate";

interface EventPagePlaceProfileProps {
  event: IEvent;
}

export default function EventPagePlaceProfile({
  event,
}: EventPagePlaceProfileProps) {

  return (
    <div className="eventPage-place-profile">
      <h3 className="title">{event.title}</h3>
      {event.format === "Офлайн" ? (
        <h4 className="subtitle">{event.location_address}</h4>
      ) : (
        <p className="online">Онлайн</p>
      )}
      <p className="text">{formatDate(event.datetime)}</p>
      <button type="button" className="btn">
        <p className="btn-text">Хочу участвовать</p>
      </button>
    </div>
  );
}
