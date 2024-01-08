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


    const { id, name, description, price, image } = product;

    return (
        <div className='container mx-auto flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='lg:w-2/4'>
                <img src='https://t4.ftcdn.net/jpg/02/24/11/57/240_F_224115780_2ssvcCoTfQrx68Qsl5NxtVIDFWKtAgq2.jpg' alt="" className='w-full h-full aspect-square object-cover rounded-xl' />

            </div>

            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>

                    <h1 className='text-3xl font-bold font-text'>{name}OLA </h1>
                </div>
                <p className='text-lg font-text'>
                    {description}party party party
                </p>
                <h6 className='text-2xl font-semibold'>RM {price}</h6>
                <div className='flex flex-row items-center '>

                    <button className='bg-primary text-white font-semibold py-3 px-16 rounded-xl h-full'>Start Bidding</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;