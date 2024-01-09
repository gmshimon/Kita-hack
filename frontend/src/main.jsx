import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PUBLIC IMPORTS
import PublicRoot from "./Pages/Public/PublicRoot";
import Home from "./Pages/Public/Home";
import AllBiddings from "./Pages/Public/AllBiddings";
import Solutions from "./Pages/Public/Solutions";

// PRIVATE IMPORTS
import DashboardHome from "./Pages/Private/DashboardHome";
import DashboardMain from "./Pages/Private/DashboardMain";
import CreatePosting from "./Pages/Private/CreatePosting";
import Login from "./Pages/Public/Login";
import Register from "./Pages/Public/Register";
import ProductDetail from "./Pages/Private/ProductDetail";
import Analytics from "./Pages/Private/Analytics";
import MyBidding from "./Pages/Private/MyBidding";
import CreateBidding from "./Pages/Private/CreateBidding";
import AuthProvider from "../src/providers/AuthProvider";
import PrivateRoute from "../src/routes/PrivateRoute";

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
      {
        path: "/all-biddings",
        element: <AllBiddings></AllBiddings>,
      },
      {
        path: "/solution",
        element: <Solutions></Solutions>,
      },
      {
        path: "/product/:productId",
        element: (
          <PrivateRoute>
            <ProductDetail></ProductDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/product/${params.productId}`),
      },
    ],
  },
  // PRIVATE
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardHome></DashboardHome>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardMain></DashboardMain>,
      },
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
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
