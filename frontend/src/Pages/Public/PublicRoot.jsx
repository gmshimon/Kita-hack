import { Outlet } from "react-router";

const PublicRoot = () => {
  return (
    <>
      <h1>MAIN HOME</h1>
      <hr />
      <Outlet></Outlet>
    </>
  );
};

export default PublicRoot;
