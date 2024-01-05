import { Link } from "react-router-dom";

const BiddingCard = ({ card }) => {

    const { id, name, BrandName, Type, Price, ShortDescription, rating, image } = card;


    return (
        <Link to={`/product/${id}`}>
            <div>
                <div className="flex items-center justify-center object-center ">
                    <div className="relative flex w-[312px] flex-col rounded-xl  ">
                        <div className="relative  h-48 overflow-hidden rounded-xl ">
                            <img className="object-cover w-full h-full " src={image} alt="" />
                        </div>

                        <div>
                            <p className="block text-lg font-semibold text-center ">
                                {name}
                            </p>
                        </div>

                        <div className="mt-auto">

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BiddingCard;