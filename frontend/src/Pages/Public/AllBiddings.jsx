import { useEffect, useState } from "react";
import BiddingCard from "./Cards/BiddingCard";
import { IoMdLeaf } from "react-icons/io";

const AllBiddings = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((error) => console.error("Error fetching data:", error));
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
        {card.map((card) => (
          <BiddingCard key={card.id} card={card}></BiddingCard>
        ))}
      </div>
    </div>
  );
};

export default AllBiddings;
