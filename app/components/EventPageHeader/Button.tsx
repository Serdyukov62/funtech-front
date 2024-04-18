import { useNavigate } from "@remix-run/react";
import { IUserInfo } from "contracts/types/UserInfo";
import { IEvent } from "contracts/types/event";
import { useEffect, useState } from "react";
import { useStores } from "~/stores/rootStoreContext";
import {
  getEvent,
  postRegisterEvent,
} from "~/utils/api";

type Props = {
  event: IEvent;
  user: IUserInfo;
  buttonText: string;
};

export default function Button({deleteEventRegistration, buttonText, user, event }: Props) {
  const token = localStorage.getItem("token");
  const navigation = useNavigate();

  const {userStore: {loggedIn}} = useStores()

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
      if (event.my_participation.data.id) {
        setId(event.my_participation.data.id);
        setRegisterEvent(true);
      }
    }
  }, [postRegisterEvent, deleteEventRegistration, user, event, buttonText]);


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
