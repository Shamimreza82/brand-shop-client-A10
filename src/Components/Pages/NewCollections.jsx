import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewCollections = () => {
  const [prodect, setProduct] = useState([]);
  console.log(prodect);

  useEffect(() => {
    fetch("https://brand-shop-server-g9l9v12z0-shamim-rezas-projects.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="max-w-7xl m-auto mt-20">
      <h1 className="md:text-4xl text-xl text-center mt-4 font-bold mb-6 ">
        Our Popular Product
      </h1>
      <section className=" body-font">
        <div className="container px-5 mx-auto ">
          <div className=" grid md:grid-cols-4 gap-4">
            {prodect.slice(0, 8).map((products) => (
              <div key={products._id} className="  w-full border p-3 m-2 hover:scale-105 
              hover:duration-300 duration-300 hover:border-[#F08E31]" data-aos="zoom-in">
                <a className="relative rounded overflow-hidden flex py-3 justify-center hover:scale-105 hover:duration-300 duration-300 ">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center h-44 "
                    src={products.image}
                  />
                </a>
                <div className="flex justify-between items-center">
                    <div className="mt-4">
                    <h3 className="text-gray-500 text-base tracking-widest title-font mb-1">
                        {products.brand}
                    </h3>
                    <h2 className="title-font text-lg font-bold">
                        {products.name}
                    </h2>
                    <p className="mt-1">{products.price}/- BDT</p>
                    </div>
                    <div className="flex-grow-0">
                        <Link className="p-2 px-3 border border-[#F08E31] rounded-md font-bold"> Add to cart</Link>
                    </div>
                </div>
              </div>
            ))}
            {/* ----------------------------------------------------------------- */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewCollections;
