import { useParams } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import EventPageHeader from "~/components/EventPageHeader/EventPageHeader";
import EventPageMain from "~/components/EventPageMain/EventPageMain";
import Loader from "~/components/Loader/Loader";
import { useStores } from "~/stores/rootStoreContext";

export default observer(function Index() {
  const {
    eventStore: { event, setEvent },
  } = useStores();

  const { id } = useParams();

  useEffect(() => {
    setEvent(id);
  }, []);

  return (
    <>
      <section className="event-in">
        {event?.case({
          pending: () => <Loader />,
          fulfilled: (value) => <EventPageHeader event={value} />,
        })}
        {event?.case({
          pending: () => <Loader />,
          fulfilled: (value) => <EventPageMain event={value} />,
        })}
      </section>
    </>
  );
});
