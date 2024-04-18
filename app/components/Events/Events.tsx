import { IEvent } from "contracts/types/event";
import Event from "../Event/Event";
import { observer } from "mobx-react-lite";
import { useNavigate } from "@remix-run/react";

interface EventsProps {
  Events: IEvent[] | undefined;
}

export default observer(function Events({ Events }: EventsProps) {


  const navigation = useNavigate();

  return (
    <section className="gallery">
      <div className="gallery-container">
              {Events?.map((event) => (
                <Event
                  onClick={() => navigation(`/${event.id}`)}
                  key={event.id}
                  event={event}
                />
              ))}
      </div>
    </section>
  );
});
