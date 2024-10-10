import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MouseContextProvider } from "./components/cursor/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </StrictMode>
);
