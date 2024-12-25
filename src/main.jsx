import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from "./router"

import GlobalStyle from "./styles/globalStyles.js";

import { register } from "swiper/element/bundle";
register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Whatsaap } from "./components/Whatsapp/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
      <GlobalStyle />
      <Whatsaap />
  </StrictMode>
);
