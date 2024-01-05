import { Outlet } from "react-router";
import DashboardHome from "./DashboardHome";

const PrivateRoot = () => {
  return (
    <>
      <DashboardHome></DashboardHome>
      <Outlet></Outlet>
    </>
  );
};

export default PrivateRoot;
