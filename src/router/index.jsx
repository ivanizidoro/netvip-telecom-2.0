import { createBrowserRouter } from "react-router-dom";
import { Planos } from "../container/Planos";
import App from "../App";
import { Contato } from "../container/Contato";
import { Somos } from "../container/Somos";
import { Politica } from "../components/Politica";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "/planos",
    element: (
      <>
        <Planos />
      </>
    ),
  },
  {
    path: "/contato",
    element: (
      <>
        <Contato />
      </>
    ),
  },
  {
    path: "/quemsomos",
    element: (
      <>
        <Somos />
      </>
    ),
  },
  {
    path: "/politica",
    element: (
      <>
        <Politica />
      </>
    ),
  },
]);
