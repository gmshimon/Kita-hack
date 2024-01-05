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
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import ProductDetail from "./Pages/Private/ProductDetail";

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
        path: "/dashboard/create-posting",
        element: <CreatePosting></CreatePosting>,
      },
    ],
  },
  {
    path: '/product/:productId',
    element: <ProductDetail></ProductDetail>,
    loader: ({ params }) => fetch(`http://localhost:5173/product/${params.productId}`)
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
