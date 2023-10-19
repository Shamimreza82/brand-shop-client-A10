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

            {/* <div className='md:py-10 '>
            <div className="carousel  w-full py-10 bg-slate-200">
                <div id="item1" className="carousel-item w-full">
                    {
                        Products.slice(0, 1) .map(product => 
                            <img src={product.image} className="h-60" />
                            )
                    }
                </div> 
                <div id="item2" className="carousel-item w-full ">
                    {
                        Products.slice(1, 2) .map(product => 
                            <img src={product.image} className="h-60" />
                            )
                    }
                </div> 
                <div id="item3" className="carousel-item w-full ">
                    {
                        Products.slice(2, 3) .map(product => 
                            <img src={product.image} className="h-60" />
                            )
                    }
                </div> 
                <div id="item4" className="carousel-item w-full">
                    {
                        Products.slice(3, 4) .map(product => 
                            <img src={product.image} className="h-60" />
                            )
                    }
                </div>
                </div> 
                <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
                            
            </div> */}

                    <div className="carousel w-full py-12 ">
                    <div id="slide1" className="carousel-item relative w-full flex justify-center">
                        {Products.slice(0, 1) .map(product => <div key={product._id} className='flex gap-8 flex-col md:flex-row items-center'>
                            <img src={product.image} className="h-60 " />
                            <div className='space-y-2'>
                                <p className='md:text-4xl font-bold text-xl'>{product.name}</p>
                                <p className='font-bold  text-orange-600'>Price: {product.price} BDT</p>
                            </div>
                        </div>)}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full  flex justify-center">
                        {Products.slice(1, 2) .map(product => <div key={product._id} className='flex gap-8 flex-col md:flex-row items-center'>
                            <img src={product.image} className="h-60 " />
                            <div className='space-y-2'>
                                <p className='md:text-4xl font-bold text-xl'>{product.name}</p>
                                <p className='font-bold  text-orange-600'>Price: {product.price} BDT</p>
                            </div>
                        </div>)}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full flex justify-center">
                         {Products.slice(2, 3) .map(product => <div key={product._id} className='flex gap-8 flex-col md:flex-row items-center'>
                            <img src={product.image} className="h-60 " />
                            <div className='space-y-2'>
                                <p className='md:text-4xl font-bold text-xl'>{product.name}</p>
                                <p className='font-bold  text-orange-600'>Price: {product.price} BDT</p>
                            </div>
                        </div>)}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full flex justify-center">
                        {Products.slice(3, 4) .map(product => <div key={product._id} className='flex gap-8 flex-col md:flex-row items-center'>
                            <img src={product.image} className="h-60 " />
                            <div className='space-y-2'>
                                <p className='md:text-4xl font-bold text-xl'>{product.name}</p>
                                <p className='font-bold  text-orange-600'>Price: {product.price} BDT</p>
                            </div>
                        </div>)}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    </div>









   {/* ---------------------------------------------------------------------------------------------------------- */}

            <div className='grid md:grid-cols-2 gap-5'>
                {
                   Products.map(product => <SingleProduct key={product._id} product={product} ></SingleProduct>) 
                }

            </div>
        </div>
    );
};

export default Brand;