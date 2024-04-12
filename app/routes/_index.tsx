import type { MetaFunction } from "@remix-run/node";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import Loader from "~/components/Loader/Loader";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";
import { useStores } from "~/stores/rootStoreContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default observer(function Index() {
  const {
    events: {
      getFutureEventsAction,
      getPastEventsAction,
      pastEvents,
      futureEvents,
    },
  } = useStores();

  useEffect(() => {
    getFutureEventsAction();
    getPastEventsAction();
  }, []);


  return (
    <>
      <Afisha />
      {futureEvents?.case({
        pending: () => <Loader />,
        fulfilled: (value) => <Events Events={value} text="Скоро" />,
      })}
      <RandomCoffee />
      {pastEvents?.case({
        pending: () => <Loader />,
        fulfilled: (value) => (
          <Events Events={value} text="Прошедшие события" />
        ),
      })}
    </>
  );
});
