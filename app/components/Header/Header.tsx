import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import logo from "../../assets/Logo.svg";
import { observer } from "mobx-react-lite";
import { useStores } from "~/stores/rootStoreContext";
import Profile from "../Profile/Profile";



export default observer(function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    userStore: { isLoading, user,logOut },
  } = useStores();

  const handleLogOut = () => {
    if (user) {
        localStorage.removeItem("token");
        logOut();
        navigate('/')
    }
  };

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
                <Profile onLogOut={handleLogOut} user={user} />
              )}
            </>
          )}
        </>
      )}
    </header>
  );
});
