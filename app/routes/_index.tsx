import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import Loader from "~/components/Loader/Loader";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";
import { BASE_URL } from "~/constants/api";
import { getFutureEvents, getPastEvents } from "~/utils/api";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [futureEvents, setFutureEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFutureEvents = async () => {
      setIsLoading(true);
      const events = await getFutureEvents();
      setFutureEvents(events);
      setIsLoading(false);
    };

    const fetchPastEvents = async () => {
      setIsLoading(true);
      const events = await getPastEvents();
      setPastEvents(events);
      setIsLoading(false);
    };

    fetchFutureEvents();
    fetchPastEvents();
  }, [setFutureEvents, setPastEvents]);

  return (
    <>
      <Afisha />
      {isLoading ? <Loader /> : <Events Events={futureEvents} text="Скоро" />}
      <RandomCoffee />
      {isLoading ? (
        <Loader />
      ) : (
        <Events Events={pastEvents} text="Прошедшие события" />
      )}
    </>
  );
}
