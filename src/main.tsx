import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import RoutesRouter from "./utils/router/RoutesRouter.tsx";
import "nexious-library/@index.css";
import "./stylesheets/index.css";
import ScrollToTop from "@utils/router/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App>
      <RoutesRouter />
    </App>
  </BrowserRouter>,
);
