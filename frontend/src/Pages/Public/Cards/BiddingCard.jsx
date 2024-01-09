import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BiddingCard = ({ bids }) => {
  // NEEDS PROP TYPE
  const { _id, name, imageURL, postStatus, starting_price, type_of_waste } = bids;

  return (
    <div className="relative flex w-full flex-col shadow-xl rounded-xl">
      <div className="relative overflow-hidden rounded-t-xl">
        <img className="object-cover w-full h-48 " src={imageURL} />
      </div>
      <div className="p-2 rounded-b-xl">
        <p className="block text-lg font-semibold font-heading flex-1">
          {name}
        </p>
        <div className="flex justify-between">
          {/* IMPLEMENT CONDITIONAL COLORING OF BADGE */}
          <span
            className={`badge uppercase border-none ${postStatus === "ongoing"
              ? "bg-red-600"
              : postStatus === "published"
                ? "bg-accent"
                : ""
              } font-medium text-white`}
          >
            {postStatus}
          </span>
          <span className="badge border-none bg-primary font-medium text-white">
            RM {starting_price}
          </span>
        </div>
        <hr className="my-2" />
        <p className="font-text text-xs text-gray-600">
          {type_of_waste}
        </p>
        <div className="flex-1 flex justify-end items-end mt-4">
          <Link
            to={`/product/${_id}`}
            className="btn border-none bg-transparent"
          >
            View
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BiddingCard;
