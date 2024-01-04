import { Outlet } from "react-router";

const PrivateRoot = () => {
  return (
    <>
      {/* DASHBOARD CODE GOES HERE */}
      <h1>Private Root</h1>
      <Outlet></Outlet>
    </>
  );
};

export default PrivateRoot;
