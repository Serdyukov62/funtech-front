import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import Loader from "~/components/Loader/Loader";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";
import { useStores } from "~/stores/rootStoreContext";
import { getUserSession } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Трекер мероприятий Funtech " },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return getUserSession(request);
};

export default observer(function Index() {
  const {
    user: {getUserInfo, loggedIn},
  } = useStores();
  const user = useLoaderData<typeof loader>();

  useEffect(() => {
    getUserInfo(user.data.token);
    loggedIn();
  }, []);

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
