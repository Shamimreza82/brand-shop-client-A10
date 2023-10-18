import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';
import Navber2 from './Navber2';

const Mainlayout = () => {
    return (
        <div className='font-Poppins'>
            <Navber2></Navber2>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;