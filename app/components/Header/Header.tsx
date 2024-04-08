import { useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";
import "./index.scss";
import { useEffect } from "react";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        tabIndex={0}
        className="logo"
        src={logo}
        alt="Logo"
      />
      {
        location.pathname === '/' &&  (
          <button type="button" className="button">
            Войти
        </button>
        )
      }
      
    </header>
  );
};
