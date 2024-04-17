import { IEvent } from "contracts/types/event";
import { Map } from "@pbe/react-yandex-maps";

interface EventPagePlaceProps {
  event: IEvent;
}

export default function EventPagePlace({ event }: EventPagePlaceProps) {
  return (
    <div className="eventPage-place">
      <>
        <h3 className="title">Место</h3>
        <p className="address">{event.location_address}</p>
        <div className="map">
          {event.location_coordinates ? (
            <Map
              style={{ width: "100%", height: "100%" }}
              defaultState={{ center: event.location_coordinates, zoom: 12 }}
            />
          ) : (
            <Map
              style={{ width: "100%", height: "100%" }}
              defaultState={{ center: [55.75, 37.57], zoom: 12 }}
            />
          )}
        </div>
      </>
    </div>
  );
}
