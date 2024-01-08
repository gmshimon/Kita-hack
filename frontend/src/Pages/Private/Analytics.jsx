import useRole from "../../hooks/useRole";

const Analytics = () => {
  const { userRole } = useRole();

  if (userRole === "seller") {
    return (
      <>
        <h1>SELLER ANALYTICS</h1>
      </>
    );
  }

  if (userRole === "buyer") {
    return (
      <>
        <h1>BUYER ANALYTICS</h1>
      </>
    );
  }
};

export default Analytics;
