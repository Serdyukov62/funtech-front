import { Subevent } from "contracts/types/event";
import EventPageProgramProfile from "../EventPageProgramProfile/EventPageProgramProfile";

interface EventPageProgramProps {
  event: Subevent;
}

export default function EventPageProgram({ event }: EventPageProgramProps) {
  function formateTime(time: string) {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  }

  return (
    <>
    {event ? <div className="eventPage-time-row">
      <h4 className="title-time">{formateTime(event.time)}</h4>
      <div className="subtitle-container">
        <p className="subtitle">{event.title}</p>
      </div>
      {event.speaker ? <EventPageProgramProfile speaker={event.speaker}/> : ""}
    </div> : ''}
    </>
    
  );
}
