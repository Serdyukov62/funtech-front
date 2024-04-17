import styles from "./styles/css/main.css?url";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import { RootStoreProvider, useStores } from "./stores/rootStoreContext";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { YMaps } from "@pbe/react-yandex-maps";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export function ErrorBoundary() {
  const errors: Error = useRouteError() as Error;
  return (
    <>
      {!isRouteErrorResponse(errors) && (
        <div className="error-container">
          <p className="error-text">{errors?.message}</p>
          <button
            onClick={() => window.history.back()}
            type="button"
            className="error-back-btn"
          >
            Назад
          </button>
        </div>
      )}
    </>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {

  const location = useLocation();
  const notMainLocation =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/activation" ||
    location.pathname === "/reset" ||
    location.pathname === "/anketa" ||
    location.pathname === "/succes";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body
        className={` ${notMainLocation ? "not-main" : "main"}`}
        suppressHydrationWarning={true}
      >
        {" "}
          <RootStoreProvider> {children}</RootStoreProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default observer(function App() {
  const {
    userStore: { getUserInfo },
    eventStore: { getFutureEventsAction, getPastEventsAction },
  } = useStores();

  useEffect(() => {
    getFutureEventsAction();
    getPastEventsAction();
  }, []);

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserInfo(token);
    }
  }, []);

  return (
    <YMaps>
      <Header />
      <Outlet />
    </YMaps>
  );
});
