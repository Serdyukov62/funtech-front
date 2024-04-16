import { IEvent } from "contracts/types/event";
import Event from "../Event/Event";
import { observer } from "mobx-react-lite";


interface EventsProps {
  Events: IEvent[];
  text: string;
}

export default observer(function Events({ Events, text }: EventsProps) {


  return (
    <section className="gallery">
      <h2 className="title">{text}</h2>
      <div className="gallery-container">
        {Events.map((event) => (
          <Event
            onClick={() => (window.location.href = `/${event.id}`)}
            past={text === "Прошедшие события" && true}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </section>
  );
});
