import { useRouteError } from "@remix-run/react";

export function ErrorBoundary() {
    const error: Error = useRouteError() as Error;
    return (
      <div className="error-container">
        <p className="error-text">{error?.message}</p>
        <button 
          onClick={() => window.history.back()}
          type="button"
          className="error-back-btn"
        >
          Назад
        </button>
      </div>
    );
  }
