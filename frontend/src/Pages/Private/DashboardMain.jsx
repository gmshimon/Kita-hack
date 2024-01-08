import useRole from "../../hooks/useRole";

const DashboardMain = () => {
  const { userRole } = useRole();

  if (userRole === "seller") {
    return (
      <>
        <h1>SELLER HOME</h1>
      </>
    );
  }

  if (userRole === "buyer") {
    return (
      <>
        <h1>BUYER HOME</h1>
      </>
    );
  }
};

export default DashboardMain;
