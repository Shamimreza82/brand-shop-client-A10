import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


const Brands = () => {

    const [brand, setBrand] = useState([])

    

    useEffect(()=>{

        fetch('brand.json')
        .then(res => res.json())
        .then(data => setBrand(data))
    }, [])



    return (
        <div className='max-w-7xl m-auto'>
            
            <h1 className='text-2xl py-6 text-center font-bold'>Our Brand</h1>
            <div className='grid grid-cols-3 gap-4'>
            
            {
                brand.map (bra => 
                <div key={bra.brand} >
                <Link to={`/products/${bra.brand}`} className='mt-6 '>
                <div className=' shadow-lg p-5'>
                    <img className='h-48 w-full rounded-lg' src={bra.image} alt="" />
                    <p className='text-center py-3 uppercase font-bold'>{bra.brand}</p>
                 </div>
                </Link>

                </div>)
            }
            </div>
        </div>
    );
};

export default Brands;