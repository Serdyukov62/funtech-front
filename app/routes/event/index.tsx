import EventPageHeader from "~/components/EventPageHeader/EventPageHeader";
import EventPageMain from "~/components/EventPageMain/EventPageMain";

export default function index() {
  return (
    <section className="event-in">
    <EventPageHeader/>
    <EventPageMain/>
    </section>
  );
}
