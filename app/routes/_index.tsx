import { useEffect } from "react";

import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import Afisha from "~/components/Afisha/Afisha";
import Events from "~/components/Events/Events";
import RandomCoffee from "~/components/RandomCoffee/RandomCoffee";

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};




export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    const token = urlParams.get('token');

    const data = { uid, token };
    const activate  = async () => {
      await fetch('http://funtech.b2k.me:8000/api/v1/users/activation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(() => navigate('/activate'))
      .then(res => localStorage.setItem('token', res.token))
      
    }
    if (data.uid && data.token) {
      activate()
    }
    return () => {};
  },[]);

  return (
    <>
    <Afisha/>
    <Events text="Скоро"/>
    <RandomCoffee/>
    <Events text="Прошедшие события"/>
    </>
  );
}
