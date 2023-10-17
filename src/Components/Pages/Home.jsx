import React from 'react';
import Banner from './Banner';
import Footer from '../Mainlayout/Footer';
import Contact from './Contact';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl'>
                 <About></About>
                <Contact></Contact>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;