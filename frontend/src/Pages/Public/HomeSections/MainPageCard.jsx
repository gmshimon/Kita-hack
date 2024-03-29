import { useEffect, useState } from "react";
import BiddingCard from "../Cards/BiddingCard";
import { IoMdLeaf } from "react-icons/io";
import { Link } from "react-router-dom";
import { get } from "../../../utilis/queries";

const MainPageCard = () => {

  // const [card, setCard] = useState([]);

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCard(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const [bids, setBids] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { returnData } = await get("products");
      setBids(returnData);
    };

    fetchData();
  }, []);


  return (
    <>
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
        {bids.slice(0, 4).map((bids) => (
          <BiddingCard key={bids._id} bids={bids}></BiddingCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"/all-biddings"}
          className="btn mt-8 max-w-xl bg-primary border-none text-white w-full hover:bg-primary hover:shadow-xl"
        >
          View All Listings
        </Link>
      </div>
    </>
  );
};

export default MainPageCard;
