import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomeRoute from "./routes/HomeRoute";
import CountryRoute from "./routes/CountryRoute";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import CoutryLayout from "./layouts/CountryLayout";
import CountryItemRoute from "./routes/CountryItemRoute";
import countryLoader from "./components/Country/country.loader";
import Loader from "./components/Loader/Loader";
import countryItemLoader from "./components/Country/countryItem.loader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          path: "/",
          Component: HomeRoute,
          errorElement: <ErrorPage />,
          loader: countryLoader,
          HydrateFallback: Loader,
        },
        {
          path: "/country",
          Component: CoutryLayout,
          children: [
            {
              path: "/country",
              Component: CountryRoute,
              errorElement: <ErrorPage />,
            },
            {
              path: "/country/:id",
              Component: CountryItemRoute,
              errorElement: <ErrorPage />,
              loader: countryItemLoader,
              HydrateFallback: Loader,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
