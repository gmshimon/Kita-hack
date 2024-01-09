import { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import { get } from "../../utilis/queries";

const MyBidding = () => {
  //  const { userRole } = useRole();
  const [bids, setBids] = useState([])

  //   const [product, setProduct] = useState(null); 
  //   useEffect(() => {

  //     fetch(`http://localhost:8000/api/v1/users/my-bid`)
  //         .then(res => res.json())
  //         .then(data => setProduct(data))
  //         .catch(error => console.error('Error fetching data:', error));
  // }, []);

  useEffect(() => {
    const callData = async () => {
      const result = await get("users/my-bid")
      setBids(result.returnData)
    }
    callData()
  }, [])
  console.log(bids)

  // if (userRole === "seller") {
  //   return (
  //     <>
  //       <h1>SELLER BIDDINGS</h1>
  //     </>
  //   );
  // }

  // if (userRole === "buyer") {
  //   return (
  //     <>
  //       <h1>BUYER BIDDINGS</h1>
  //     </>
  //   );
  // }
};

export default MyBidding;
