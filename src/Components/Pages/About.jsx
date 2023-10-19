import React from "react";
import { Helmet } from "react-helmet";
import bg1 from '../../assets/brand-image/23324.jpg'

const About = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Helmet>
            <title>Tech Globe Hub | About</title>
          </Helmet>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={bg1}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-bold ">
            Welcome to Tech Globe Hub
            </h1>
            <p className="mb-8 leading-relaxed">
            At Tech Globe Hub, we are passionate about providing our customers with top-of-the-line products that cater to their technological needs. As a trusted brand shop, we pride ourselves on offering an extensive range of high-quality tech products that enhance your digital experience.
            </p>
            <strong>Our Product Range:</strong>
            <p><strong>Tech Accessories: </strong> Find the perfect tech accessories to complement your devices and streamline your tech usage.</p>
            <p><strong>Audio and Visual Equipment: </strong> Elevate your entertainment experience with our premium audio and visual equipment, including speakers, headphones, and home theater systems.</p>
            <p><strong>Smart Home Solutions:</strong> Explore our range of smart home devices that simplify your daily tasks and enhance your living space.</p>
 
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
