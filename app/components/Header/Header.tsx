import { useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";
import { observer } from "mobx-react-lite";
import { useStores } from "~/stores/rootStoreContext";
import Profile from "../Profile/Profile";
import Loader from "../Loader/Loader";

export default observer(function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    userStore: { isLoading, user },
  } = useStores();

  const paths =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/activation" ||
    location.pathname === "/reset";

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={logo}
        alt="Logo"
      />
      {!paths && (
        <>
          {isLoading ? (
            <div className="loader" />
          ) : (
            <>
              {!user ? (
                <button
                  onClick={() => navigate("/signin")}
                  type="button"
                  className="button"
                >
                  Войти
                </button>
              ) : (
                <Profile user={user} />
              )}
            </>
          )}
        </>
      )}
    </header>
  );
});
