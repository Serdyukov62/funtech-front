import { useNavigate } from "@remix-run/react";
import { IEvent } from "contracts/types/event";
import { IUserInfo } from "contracts/types/user";
import { useEffect, useState } from "react";
import {
  deleteEventRegistration,
  getEvent,
  postRegisterEvent,
} from "~/utils/api";

type Props = {
  event: IEvent;
  user: IUserInfo;
  loggedIn: boolean;
  buttonText: string;
};

export default function Button({ buttonText, user, event, loggedIn }: Props) {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const [registerEvent, setRegisterEvent] = useState(false);
  const [myEvent, setMyEvent] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const currentEvent = user?.my_events.find(
      (myEvent) => myEvent.event_id === event.id
    );
    if (currentEvent) {
      setRegisterEvent(true);
      setMyEvent(true);
    }

    if (event.my_participation.data) {
      setId(event.my_participation.data.id);
    }
  }, [postRegisterEvent, deleteEventRegistration]);

  const handleClick = () => {
    switch (true) {
      case !loggedIn:
        navigation("/signup");
        break;
      case !user?.profile_full:
        navigation("/anketa");
        break;
      case !token:
        navigation("/signin");
        break;
      case myEvent:
        deleteEventRegistration(token, `${event.id}`, `${id}`);
        getEvent(`${event.id}`, token);
        setRegisterEvent(false);
        setMyEvent(false);
        break;
      case !myEvent:
        postRegisterEvent(`${event.id}`, token).then((res) => {
          setId(res.id);
          getEvent(`${event.id}`, token).then(() => {});
        });
        setRegisterEvent(true);
        setMyEvent(true);
        break;
    }
  };

  function isCurrentDateNewer(date1: string) {
    const currentDate = new Date();
    const providedDate = new Date(date1);

    return currentDate > providedDate;
  }

  return (
    <button onClick={handleClick} type="button" className="btn-primary">
      <p className="btn-text">
        {isCurrentDateNewer(event.datetime)
          ? buttonText.record
          : registerEvent
          ? buttonText.cancel
          : buttonText.register}
      </p>
    </button>
  );
}
