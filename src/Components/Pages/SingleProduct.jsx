import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div >
      <div className="relative flex flex-col mt-16 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relativemx-4 -mt-6 overflow-hidden text-white  rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img className="h-64 m-auto" src={product.image} alt="" />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{product.name}</h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {product.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/productDetails/${product._id}`}
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
