import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/css/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
