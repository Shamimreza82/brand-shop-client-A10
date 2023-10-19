import React from "react";
import bg from '../../assets/brand-image/maxim-hopman-Hin-rzhOdWs-unsplash.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
         `url(${bg})` ,
      }}
    >
      <div className="brightness-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 md:text-5xl text-2xl text-black font-bold">Pioneering Global Technological Advancements</h1>
          <p className="mb-5 text-black">
          Tech Globe Hub serves as a pioneering nexus for global innovation, fostering collaboration and driving technological breakthroughs that transcend borders. It is the epicenter of cutting-edge advancements, 
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
