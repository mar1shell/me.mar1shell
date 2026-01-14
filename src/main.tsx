import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Manually manage dark mode before render so the user preference is applied immediately
const isLightMode = localStorage.getItem("dark-theme") === "false";

if (!isLightMode) {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
