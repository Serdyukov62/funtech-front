import logo from "../../assets/Logo.svg";
import "./index.scss";

export const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
    </header>
  );
};
