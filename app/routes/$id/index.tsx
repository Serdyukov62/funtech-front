import { useParams } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Button from "~/components/EventPageHeader/Button";
import EventPageHeader from "~/components/EventPageHeader/EventPageHeader";
import EventPageMain from "~/components/EventPageMain/EventPageMain";
import Footer from "~/components/Footer/Footer";
import Loader from "~/components/Loader/Loader";
import Modal from "~/components/Modal/Modal";
import { useStores } from "~/stores/rootStoreContext";

export default observer(function Index() {
  const {
    eventStore: { event, setEvent },
  } = useStores();

  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setEvent(id, undefined);
    }
    setEvent(id, token);
  }, []);

  return (
    <>
      <Modal text="Вы зарегистрированы на событие!" />
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
      <Footer />
    </>
  );
});
