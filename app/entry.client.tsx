import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./vendor/normalize.css";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
        <RemixBrowser />
    </StrictMode>
  );
});
