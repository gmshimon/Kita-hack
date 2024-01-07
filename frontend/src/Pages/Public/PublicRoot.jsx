import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PublicRoot = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="mt-24">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PublicRoot;
