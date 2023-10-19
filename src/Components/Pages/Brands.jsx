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
            
            <h1 className='md:text-4xl md:py-6 text-center font-bold my-8 '>Our Brand</h1>
            <div className='grid md:grid-cols-3 gap-4 '>
            
            {
                brand.map (bra => 
                <div key={bra.brand} className='hover:scale-105 hover:duration-300 duration-300 border hover:border-[#F08E31]' >
                <Link to={`/products/${bra.brand}`} className='mt-6 '>
                <div className=' shadow-lg p-5'>
                    <img className='h-48 w-full rounded-lg hover:scale-105 hover:duration-300 duration-300' src={bra.image} alt="" />
                    <p className='text-center py-3 uppercase font-bold hover:scale-105 hover:duration-300 duration-300 hover:text-[#F08E31] '>{bra.brand}</p>
                 </div>
                </Link>

                </div>)
            }
            </div>
        </div>
    );
};

export default Brands;