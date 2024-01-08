import useRole from "../../hooks/useRole";

const MyBidding = () => {
  const { userRole } = useRole();

  if (userRole === "seller") {
    return (
      <>
        <h1>SELLER BIDDINGS</h1>
      </>
    );
  }

  if (userRole === "buyer") {
    return (
      <>
        <h1>BUYER BIDDINGS</h1>
      </>
    );
  }
};

export default MyBidding;
