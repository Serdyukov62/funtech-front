import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./root.scss";
import { Header } from "./components/Header/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />

        <section className="main">
          {children}
          <ScrollRestoration />
          <Scripts />
        </section>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
