import { useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()

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
          <button onClick={() => navigate("/signin")} type="button" className="button">
            Войти
        </button>
        )
      }
      
    </header>
  );
};
