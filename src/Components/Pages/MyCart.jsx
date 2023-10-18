import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {

    const myCart = useLoaderData()
    console.log(myCart);
    return (
        <div>
            My Cart
        </div>
    );
};

export default MyCart;