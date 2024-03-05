import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";
import CatalogPage from "./components/pages/catalogPage/CatalogPage";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import { appRoute } from "./routes/appRoute";

const router = createBrowserRouter([
  {
    path: `${appRoute.MAIN}`,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${appRoute.CATALOG}`,
        element: <CatalogPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
