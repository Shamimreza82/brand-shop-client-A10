import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { Helmet } from 'react-helmet';
import Footer from '../Mainlayout/Footer';

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
        <div>
            <div className='max-w-7xl m-auto min-h-screen'>
            <Helmet>
            <title>Tech Globe Hub | All Brands</title>
          </Helmet>

                    <div className="carousel w-full md:py-20 py-4 ">
                    <div id="slide1" className="carousel-item relative w-full flex justify-center">
                        {Products.slice(0, 1) .map(product => <div key={product._id} className='flex gap-8 flex-col md:flex-row items-center'>
                            <img src={product.image} className="md:h-60 " />
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

            <div className='grid md:grid-cols-2 gap-5 max-w-5xl m-auto px-3'>
                {
                   Products.map(product => <SingleProduct key={product._id} product={product} ></SingleProduct>) 
                }

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Brand;