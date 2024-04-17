import img from "../../assets/photo.png";
import EventPageProgram from "../EventPageProgram/EventPageProgram";
import EventPagePlace from "../EventPagePlace/EventPagePlace";
import EventPagePlaceProfile from "../EventPagePlaceProfile/EventPagePlaceProfile";
import { IEvent } from "contracts/types/event";

interface EventPageMainProps {
  event: IEvent;
}

export default function EventPageMain({ event }: EventPageMainProps) {

  return (
    <section className="eventPage-main-container">
      <div className="eventPage-event">
        <h2 className="title">О событии</h2>

        <p className="text">
         {event.description}
        </p>
      </div>
      <div className="eventPage-img-container">
        {event.photos ? event.photos.map((photo) => (
          <div key={event.id} className="eventPage-img">
            <img className="eventPage-img-photo" src={photo.image} alt="Фотографии с ивента" />
          </div>
        )) : ''}
      </div>

      <div className="eventPage-host">
        <h2 className="title">Ведущий</h2>
        <div className="eventPage-host-container">
          <div className="eventPage-host-img">
            <img
              className="eventPage-host-photo"
              src={event.host_photo}
              alt="Фото ведущего"
            />
          </div>
          <div className="eventPage-host-profile">
            <h3 className="host-title">{event.host_full_name}</h3>
            <p className="host-text-gray">{event.host_company}</p>
            <p className="host-text">
              {event.host_position}
            </p>
          </div>
        </div>
      </div>

      <div className="eventPage-time">
        <h3 className="title">Программа</h3>
        {event.subevents.map((subevent) => (
          <EventPageProgram key={subevent.id} event={subevent} />
        ))}
      </div>
        {event.format === 'Офлайн' && <EventPagePlace event={event} />}
      <EventPagePlaceProfile event={event} />
    </section>
  );
}
