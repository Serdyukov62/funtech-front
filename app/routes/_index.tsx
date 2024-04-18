import type { MetaFunction } from "@remix-run/node";

import { observer } from "mobx-react-lite";
import ContentLoader from "react-content-loader";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import Footer from "~/components/Footer/Footer";
import MyLoader from "~/components/Loader/Loader";
import Loader from "~/components/Loader/Loader";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";
import { useStores } from "~/stores/rootStoreContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Трекер мероприятий Funtech " },
  ];
};

export default observer(function Index() {
  const {
    eventStore: {
      pastEvents,
      futureEvents,
      isloading,
      isMainLoading
    },
  } = useStores();

  

  return (
    <>
      <Afisha />
      <section className="gallery-main">
      <p className="title">Скоро</p>
      {isMainLoading ? (<MyLoader/>) : (<Events Events={futureEvents} />)}     
      </section>
      
      <RandomCoffee />
      <section className="gallery-main">
      <p className="title">Прошедшие события</p>
      {isMainLoading ? (<MyLoader/>) : (<Events Events={pastEvents} />)}
      </section>
      <Footer/>
    </>
  );
});
