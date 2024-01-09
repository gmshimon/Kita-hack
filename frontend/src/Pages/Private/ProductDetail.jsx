import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoAlertCircle } from "react-icons/io5";


const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [bidAmount, setBidAmount] = useState('');

    useEffect(() => {

        fetch(`http://localhost:8000/api/v1/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }
    console.log(product)

    const { data: { _id, name, location, postStatus, starting_price, starting_time, type_of_waste, weight, imageURL } } = product;


    const handleBid = () => {
        console.log('Bid submitted:', bidAmount);
        document.getElementById('my_modal_2').close();
    };

    return (
        <div className=''>
            <div className='p-12 shadow-xl rounded-xl container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                <div className='lg:w-2/4 lg:p-12 md:p-12 flex justify-center '>
                    <img src={imageURL} alt="" className=' md:w-96 lg:w-[491px] w-full h-full aspect-square object-cover rounded-xl' />

                </div>

                <div className='flex flex-col gap-4 lg:w-2/4'>
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

                    <div>
                        {/* title */}
                        <h1 className='text-3xl font-bold font-text'>{name} </h1>
                    </div>

                    <p className='text-lg font-text'>
                        {type_of_waste}

                    </p>

                    <div className='flex justify-between'>
                        <h6 className='text-2xl font-semibold'>RM {starting_price}</h6>
                        <h5 className='text-xl font-medium'>Weight:{weight}</h5>
                        <h4 className='text-xl font-medium'>Location-{location}</h4>
                    </div>

                    <div className='flex flex-row items-center'>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className='bg-primary text-white font-semibold py-3 px-16 rounded-xl h-full'>Start Bidding</button>
                        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Place Your Bid</h3>
                                <p className="py-2">Enter the bid amount:</p>
                                <input type="number" id="bidAmount" className="border border-gray-300 p-2 rounded-md mb-4" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
                                <p className="py-4 flex items-center"><IoAlertCircle />Press ESC key or click outside to close</p>
                                <button onClick={() => handleBid()} className="bg-primary text-white font-semibold py-2 px-4 rounded-md">Submit Bid</button>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button onClick={() => document.getElementById('my_modal_2').close()}>Close</button>
                            </form>
                        </dialog>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductDetail;