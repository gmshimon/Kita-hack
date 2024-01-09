import { useEffect, useState } from "react";
import useRole from "../../hooks/useRole";
import { get } from "../../utilis/queries";

const MyBidding = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const callData = async () => {
      const result = await get("users/my-bid");
      setProduct(result.returnData);
    };
    callData();
  }, []);

  console.log(product);

  const { _id, name, bids, location, postStatus, starting_price, starting_time, type_of_waste, weight, imageURL } = product;

  return (
    <> <h2 className='bg-primary text-white font-heading text-3xl p-3 text-center shadow-xl rounded-xl font-medium'>
      My Bidding
    </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
        {product.bids &&
          product.bids.map((bid) => (
            <div key={bid._id} className="relative flex w-full flex-col shadow-xl rounded-xl mt-4">
              <div className="relative overflow-hidden rounded-t-xl">
                <img className="object-cover w-full h-48" src={bid.product.imageURL} alt={bid.product.name} />
              </div>
              <div className="p-2 rounded-b-xl">
                <p className="block text-lg font-semibold font-heading flex-1">{bid.product.name}</p>
                <div className="flex justify-between">

                  {/* <span
                  className={`badge uppercase border-none ${bid.product.postStatus === "ongoing"
                    ? "bg-red-600"
                    : bid.product.postStatus === "published"
                      ? "bg-accent"
                      : ""
                    } font-medium text-white`}
                >
                  {bid.product.postStatus}
                </span> */}
                  <span className="badge border-none bg-red-400 font-medium text-white">
                    RM {bid.product.starting_price}
                  </span>
                  <span className="badge border-none bg-primary font-medium text-white">
                    RM {bid.price}
                  </span>
                </div>
                <hr className="my-2" />
                <p className="font-text text-xs text-gray-600">
                  {bid.product.type_of_waste}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};



export default MyBidding;
