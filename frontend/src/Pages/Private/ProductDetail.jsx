import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        // fetch(`http://localhost:5173/product/${productId}`)
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }


    const { id, name, description, price, image, status = 'ongoing' } = product;

    return (
        <div className=''>
            <div className='p-12 shadow-xl rounded-xl container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                <div className='lg:w-2/4 lg:p-12 md:p-12 flex justify-center '>
                    <img src='https://kjcdn.gumlet.io/media/70950/manure.jpg' alt="" className=' md:w-96 lg:w-[491px] w-full h-full aspect-square object-cover rounded-xl' />

                </div>




                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <span
                        className={`badge uppercase border-none ${status === "ongoing"
                            ? "bg-red-600"
                            : status === "published"
                                ? "bg-accent"
                                : ""
                            } font-medium text-white`}
                    >
                        {status}
                    </span>

                    <div>
                        {/* title */}
                        <h1 className='text-3xl font-bold font-text'>{name}Organic Manure - Fresh Harvest </h1>
                    </div>

                    <p className='text-lg font-text'>
                        {description}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda laudantium illo tempora doloremque hic? Sed earum veniam temporibus

                    </p>

                    <div className='flex justify-between'>
                        <h6 className='text-2xl font-semibold'>RM {price}</h6>
                        <h5 className='text-xl font-medium'>Weight:</h5>
                        <h4 className='text-xl font-medium'>Location-</h4>
                    </div>
                    <div className='flex flex-row items-center '>

                        <button className='bg-primary text-white font-semibold py-3 px-16 rounded-xl h-full'>Start Bidding</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;