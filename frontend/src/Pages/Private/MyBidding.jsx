import { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import { get } from "../../utilis/queries";

const MyBidding = () => {
  const { userRole } = useRole();
  const [bids,setBids] = useState([])


  useEffect(()=>{
    const callData = async()=>{
      const result=  await get("products/user-bidding")
    setBids(result.returnData)
    }
    callData()
  },[])
  console.log(bids)
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
