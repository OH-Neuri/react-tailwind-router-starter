import DefaultLayout from "../layouts/DefaultLayout";
import HomeView from "../pages/HomeView";
import AboutView from "../pages/AboutView";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/about",
        element: <AboutView />,
      },
    ],
  },
]);
