import { useEffect, useState } from "react";
import BiddingCard from "./Cards/BiddingCard";
import { IoMdLeaf } from "react-icons/io";
import { get } from "../../utilis/queries";
const AllBiddings = () => {

  const [bids, setBids] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { returnData } = await get("products");
      setBids(returnData);
    };

    fetchData();
  }, []);


  return (
    <div className="min-h-screen container px-4 mx-auto py-10">
      <div className="flex flex-col items-center mb-10">
        <IoMdLeaf className="text-primary text-5xl"></IoMdLeaf>
        <h2 className="font-semibold text-4xl font-heading">
          Current Listings
        </h2>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-aos="fade-up"
      >
        {bids.map((bids) => (
          <BiddingCard key={bids._id} bids={bids}></BiddingCard>
        ))}
      </div>
    </div>
  );
};

export default AllBiddings;
