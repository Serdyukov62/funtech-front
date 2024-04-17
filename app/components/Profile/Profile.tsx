/* eslint-disable react/jsx-no-comment-textnodes */
import { IUserInfo } from "contracts/types/user";
import { ReactElement, useState } from "react";
import avatar from "../../assets/Avatar.svg";
import exit from "../../assets/exit.svg";

interface ProfileProps {
  user: IUserInfo | null;
  onLogOut: () => void;
}

export default function Profile({ user,onLogOut }: ProfileProps): ReactElement {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className="profile"
      >
        <h2 className="email">{user?.email}</h2>
        <img className="avatar" src={avatar} alt="Фото пользователя" />
        <button
          className={`button-logout${!visible ? "_unactive" : ""}`}
          type="button"
          onClick={onLogOut}
        >
          <img src={exit} alt="Иконка выхода" />
          <p>Выйти</p>
        </button>
      </div>
    </>
  );
}
