import React from 'react';
import Banner from './Banner';
import Footer from '../Mainlayout/Footer';
import Contact from './Contact';
import About from './About';
import Brands from './Brands';
import { Helmet } from 'react-helmet';
import NewCollections from './NewCollections';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <NewCollections></NewCollections>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;