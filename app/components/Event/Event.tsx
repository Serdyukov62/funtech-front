import img from "../../assets/Size=Small.png";
import "./Event.scss";



type Props = {};

export default function Event({}: Props) {
  return (
    <div className="event">
      <img className="event-img" src={img} alt="Превью мероприятия" />
      <div className="text-container">
        <h2 className="title">Union All</h2>
        <p className="subtitle">Онлайн</p>
        <p className="subtitle">20 марта 18:00 среда</p>
        <p className="link">Идет регистрация</p>
      </div>
    </div>
  );
}
