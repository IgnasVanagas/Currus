import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@styles/global.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Nepavyko rasti elemento su id 'root'");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
