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


    const { id, name, ShortDescription, image } = product;

    return (
        <div className='flex justify-center items-center p-10' >
            {/* <h1>{product.name}</h1> */}

            <div className=" flex flex-col text-gray-700 bg-blue-gray-100 shadow-md w-96 rounded-xl bg-clip-border " data-aos="zoom-in">
                <div className=" overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 object-cover">
                    <img className="aspect-video h-full w-full object-cover rounded-tr-lg rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none " src={product.image} alt="" />
                </div>
                <div className="p-4">
                    <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {/* {product.LongDescription} */}
                    </h5>

                </div>

            </div>

        </div>
    );
};

export default ProductDetail;