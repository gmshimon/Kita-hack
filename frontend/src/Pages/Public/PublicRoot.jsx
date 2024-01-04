import { Outlet } from "react-router";
import NavBar from "./NavBar";

const PublicRoot = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="mt-24">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default PublicRoot;
