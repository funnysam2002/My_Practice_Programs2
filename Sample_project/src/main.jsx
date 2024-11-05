import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Select from "./Select.jsx";
import Image from "./Image.jsx";
import Showmoreless from "./Showmoreless.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Showmoreless />
  </StrictMode>
);
