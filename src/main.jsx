import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Rout from "./components/Route/Rout.jsx";
import OurWork from "./components/OurWork/OurWork.jsx";
import Insights from "./components/Insights/Insights.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Rout />,
      },
      {
        path: "ourwork",
        element: <OurWork />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "insights",
        element: <Insights />,
      },

      {
        path: "contactus",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
