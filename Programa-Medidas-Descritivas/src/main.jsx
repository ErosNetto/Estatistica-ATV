import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.jsx";
import MediaAritmetica from "./pages/MediaAritmetica/MediaAritmetica.jsx";
import Mediana from "./pages/Mediana/Mediana.jsx";
import VarianciaAmostral from "./pages/VarianciaAmostral/VarianciaAmostral.jsx";
import DesvioPadrao from "./pages/DesvioPadrao/DesvioPadrao.jsx";
import Variacao from "./pages/Variacao/Variacao.jsx";
import HomogeneoHeterogeneo from "./pages/HomogeneoHeterogeneo/HomogeneoHeterogeneo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/media-aritmetica",
        element: <MediaAritmetica />,
      },
      {
        path: "/mediana",
        element: <Mediana />,
      },
      {
        path: "/variancia-amostral",
        element: <VarianciaAmostral />,
      },
      {
        path: "/desvio-padrao",
        element: <DesvioPadrao />,
      },
      {
        path: "/coeficiente-de-variacao",
        element: <Variacao />,
      },
      {
        path: "/homogeneo-ou-heterogeneo",
        element: <HomogeneoHeterogeneo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
