

import type { MetaFunction } from "@remix-run/node";
import meeting from '../assets/Illustration_Community.png'

export const meta: MetaFunction = () => {
  return [
    { title: "Funtech" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="main-container">
          <h1 className="title">
          События для IT-специалистов всех уровней и направлений
          </h1>
          <img src={meeting} alt="Встреча людей" className="image"/>
    </div>
  );
}
