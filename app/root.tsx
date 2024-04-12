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
import { Header } from "./components/Header/Header";
import { LinksFunction } from "@remix-run/node";
import RootStore from "./stores/rootStore";
import { RootStoreContext } from "./stores/rootStoreContext";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "/app/styles/css/main.css" }];
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
    location.pathname === "/anketa";
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        suppressHydrationWarning={true}
        className={` ${notMainLocation ? "not-main" : "main"}`}
      >
        <Header />

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <Outlet />
    </RootStoreContext.Provider>
  );
}
