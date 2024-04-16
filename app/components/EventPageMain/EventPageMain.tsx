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
          Митап HR Tech — мероприятие, где лидеры IT-индустрии смогут обсудить
          тенденции в настоящем, а также инновации и вызовы, с которыми
          столкнётся отрасль технологических сервисов для больших компаний в
          ближайшем будущем. Это несколько продуктивных часов для обмена опытом
          и нетворка. Мероприятие будет интересно и безусловно полезно всем
          специалистам направления HR Tech. Это первая встреча в череде
          регулярных событий. На ней мы рассмотрим опыт сразу нескольких крупных
          компаний в области HR Tech — коллеги представят доклады о создании и
          совершенствовании экосистем внутренних сервисов и применении
          искусственного интеллекта в продуктах HR. Также мы обсудим
          использование больших данных для предиктивных продуктов и повышения
          эффективности команд. Участие бесплатное, но необходима регистрация.
        </p>
      </div>
      <div className="eventPage-img-container">
        <div className="eventPage-img">
          <img className="eventPage-img-photo" src={img} alt="Фотографии с ивента" />
        </div>
        {event.photos.map((photo) => (
          <div key={event.id} className="eventPage-img">
            <img className="eventPage-img-photo" src={photo.image} alt="Фотографии с ивента" />
          </div>
        ))}
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

      <EventPagePlace />
      <EventPagePlaceProfile />
    </section>
  );
}
