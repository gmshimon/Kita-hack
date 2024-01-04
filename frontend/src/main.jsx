import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PUBLIC IMPORTS
import PublicRoot from "./Pages/Public/PublicRoot";
import Home from "./Pages/Public/Home";

// PRIVATE IMPORTS
import PrivateRoot from "./Pages/Private/PrivateRoot";
import DashboardHome from "./Pages/Private/DashboardHome";
import CreatePosting from "./Pages/Private/CreatePosting";

const router = createBrowserRouter([
  {
    // PUBLIC VIEW
    path: "/",
    element: <PublicRoot></PublicRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  // PRIVATE
  {
    path: "/dashboard",
    element: <PrivateRoot></PrivateRoot>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/create-posting",
        element: <CreatePosting></CreatePosting>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
