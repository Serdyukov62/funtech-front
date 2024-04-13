import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import EventPageHeader from "~/components/EventPageHeader/EventPageHeader";
import EventPageMain from "~/components/EventPageMain/EventPageMain";
import Loader from "~/components/Loader/Loader";
import { getEvent } from "~/utils/api";

export default function Index() {
  const [event, setEvent] = useState(undefined);

  const { id } = useParams();


  useEffect(() => {
    getEvent(id)
    .then(data => setEvent(data))
  }, []);

  return (
    <section className="event-in">
      {event === undefined ? <Loader /> : <EventPageHeader event={event} />}
      <EventPageMain />
    </section>
  );
}
