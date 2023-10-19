import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { Helmet } from 'react-helmet';

const Brand = () => {
    

    const Products = useLoaderData()
    console.log(Products);


    if(Products.length === 0) {
       console.log("empty");
       return <div className='flex h-screen justify-center items-center '>
        <p className='bg-red-300 w-full text-center text-black py-4 px-3'>Product is not available in this category</p>
       </div>
    }

    // const filter = brands.filter(bra => bra.brand !== brand)
    // console.log(filter);

    return (
        <div className='max-w-7xl m-auto'>
            <Helmet>
            <title>Tech Globe Hub | All Brands</title>
          </Helmet>

            <div>
            <div className="carousel  w-full py-10">
                <div id="item1" className="carousel-item w-full">
                    {
                        Products.map(product => 
                            <img src={product.image} className="w-full" />
                            )
                    }
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                </div> 
                <div id="item4" className="carousel-item w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
                            
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                {
                   Products.map(product => <SingleProduct key={product._id} product={product} ></SingleProduct>) 
                }

            </div>
        </div>
    );
};

export default Brand;