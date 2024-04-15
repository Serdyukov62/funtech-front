import { useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";
import { observer } from "mobx-react-lite";
import { useStores } from "~/stores/rootStoreContext";

export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const paths =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/activation" ||
    location.pathname === "/reset" ||
    location.pathname === "/anketa";

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={logo}
        alt="Logo"
      />
      {!paths && (
        <button
          onClick={() => navigate("/signin")}
          type="button"
          className="button"
        >
          Войти
        </button>
      )}
    </header>
  );
}
