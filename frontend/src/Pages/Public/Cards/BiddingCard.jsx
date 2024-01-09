import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BiddingCard = ({ card }) => {
  // NEEDS PROP TYPE
  const { id, name, image, status } = card;

  return (
    <div className="relative flex w-full flex-col shadow-xl rounded-xl">
      <div className="relative overflow-hidden rounded-t-xl">
        <img className="object-cover w-full h-48 " src={image} />
      </div>
      <div className="p-2 rounded-b-xl">
        <p className="block text-lg font-semibold font-heading flex-1">
          {name}
        </p>
        <div className="flex justify-between">
          {/* IMPLEMENT CONDITIONAL COLORING OF BADGE */}
          <span
            className={`badge uppercase border-none ${
              status === "ongoing"
                ? "bg-red-600"
                : status === "published"
                ? "bg-accent"
                : ""
            } font-medium text-white`}
          >
            {status}
          </span>
          <span className="badge border-none bg-primary font-medium text-white">
            RM 35.00
          </span>
        </div>
        <hr className="my-2" />
        <p className="font-text text-xs text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          laudantium illo tempora doloremque hic? Sed earum veniam temporibus
        </p>
        <div className="flex-1 flex justify-end items-end mt-4">
          <Link
            to={`/product/${id}`}
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
