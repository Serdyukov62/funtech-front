import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";
import { BASE_URL } from "~/constants/api";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(`${BASE_URL}/events/`);
      const data = await response.json();
      setEvents(data.results);
    }
    getEvents();
  },[])
  if(events.length > 0) {
    console.log(events)
  }
  console.log(events)

  

  return (
    <>
    <Afisha/>
    <Events Events={events} text="Скоро"/>
    <RandomCoffee/>
    <Events Events={events} text="Прошедшие события"/>
    </>
  );
}
