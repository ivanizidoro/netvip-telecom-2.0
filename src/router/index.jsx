import { createBrowserRouter } from "react-router-dom";
import { Planos } from "../container/Planos";
import App from "../App";
import { Contato } from "../container/Contato";
import { Somos } from "../container/Somos";

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
]);
