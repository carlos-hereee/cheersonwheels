import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import RoutesRouter from "./utils/router/RoutesRouter.tsx";
import "nexious-library/@index.css";
import "./stylesheets/index.css";
import ScrollToTop from "@utils/router/ScrollToTop.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <App>
        <RoutesRouter />
      </App>
    </BrowserRouter>
    ,
  </StrictMode>,
);
