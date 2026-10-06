import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import Inspector from "../app/inspector/page";
import "../app/globals.css";

const Page = window.location.pathname.startsWith("/inspector") ? Inspector : Home;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
