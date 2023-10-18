import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Brand = () => {
    const [empty, setEmpty] = useState()

    const Products = useLoaderData()

    if(Products.length === 0) {
        console.log("alll");
    }

    // const filter = brands.filter(bra => bra.brand !== brand)
    // console.log(filter);

    return (
        <div className='max-w-7xl m-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                   Products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>) 
                }
            </div>
        </div>
    );
};

export default Brand;