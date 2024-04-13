import { useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const paths = location.pathname === "/" ||  location.pathname === "/event";

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
        paths &&  (
          <button onClick={() => navigate("/signin")} type="button" className="button">
            Войти
        </button>
        )
      }
      
    </header>
  );
};
