import { IEvent } from "contracts/types/event";
import question from "../../assets/question.svg";
import check from "../../assets/check_32.svg";
import { useEffect, useState } from "react";

type Props = {
  event: IEvent;
  path: string;
  text: string;
  onClick: () => void;
};

export default function Modal({ event, path, text, onClick }: Props) {
  const [active, setActive] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setActive(!active)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActive(false)
    }
  }

    useEffect(() => {
    if (active) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [active])

  return (
    <div onClick={handleClose} className={`modal${!active ? "_unactive" : ""}`}>
      <div className="modal__content">
        <h1 className="modal__title">{text}</h1>
        <img className="modal__icon" src={check} alt="Иконка" />
        <h2 className="modal__event-title">Митап HR Tech</h2>
        <p className="modal__event-address">Москва, улица Льва Толстого, 16</p>
        <p className="modal__event-time">29 марта 16:00 (МСК) пятница</p>
        <p className="description">На вашу почту отправлено приглашение и ссылка на трансляцию.</p>
        <div className="btn-container">
          <button className="btn-submit">Хорошо</button>
          <button className="btn-back">Отменить</button>
        </div>
      </div>
    </div>
  );
}
