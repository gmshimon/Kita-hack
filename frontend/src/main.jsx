import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";

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
import Analytics from "./Pages/Private/Analytics";
import MyBidding from "./Pages/Private/MyBidding";
import CreateBidding from "./Pages/Private/CreateBidding";

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
    element: <DashboardHome></DashboardHome>,
    children: [
      {
        path: "/dashboard/create-posting",
        element: <CreatePosting></CreatePosting>,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/dashboard/myBidding",
        element: <MyBidding></MyBidding>,
      },
      {
        path: "/dashboard/createBidding",
        element: <CreateBidding></CreateBidding>,
      },
    ],
  },
  {
    path: "/product/:productId",
    element: <ProductDetail></ProductDetail>,
    loader: ({ params }) =>
      fetch(`http://localhost:5173/product/${params.productId}`),
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
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
