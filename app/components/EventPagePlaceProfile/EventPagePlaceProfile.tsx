import { IEvent } from "contracts/types/event";
import { useEffect, useState } from "react";
import { formatDate } from "~/utils/formatDate";
import Button from "../EventPageHeader/Button";
import { useStores } from "~/stores/rootStoreContext";
import { observer } from "mobx-react-lite";

interface EventPagePlaceProfileProps {
  event: IEvent;
}

export default observer(function EventPagePlaceProfile({
  event,
}: EventPagePlaceProfileProps) {
  const {userStore: {user, loggedIn}} = useStores()
  const [registerEvent, setRegisterEvent] = useState(false);

  useEffect(() => {
    const currentEvent = user?.my_events.find(
      (myEvent) => myEvent.event_id === event.id
    );
    if (currentEvent) {
      setRegisterEvent(true);
    }
  }, []);

  return (
    <div className="eventPage-place-profile">
      <h3 className="title">{event.title}</h3>
      {event.format === "Офлайн" ? (
        <h4 className="subtitle">{event.location_address}</h4>
      ) : (
        <p className="online">Онлайн</p>
      )}
      <p className="text">{formatDate(event.datetime)}</p>
      <Button user={user} event={event} loggedIn={loggedIn} />
    </div>
  );
});
