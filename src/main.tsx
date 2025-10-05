import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Important for GitHub Pages
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Daeren-Website">
    <App />
  </BrowserRouter>
);
