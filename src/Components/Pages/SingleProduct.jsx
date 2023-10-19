import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  // console.log(product);

  return (
    <div>

        

      {/* <div className="relative flex flex-col mt-16 text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
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
      </div> */}
      
          
      <div>
        <div className="flex flex-col md:flex-row  rounded-lg shadow border mt-7">
          <div className=" flex-none  md:w-64 mt-6">
            <img
              src={product.image}
              alt="shopping image"
              className=" inset-0  w-full md:h-[200px] rounded-lg p-4"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold t-gray-50">
                {product.name}
              </h1>
              <div className="text-xl font-semibold text-gray-500 ">
                {product.price} /=
              </div>
              <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 ">
                In stock
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 text-gray-700 ">
              
            </div>
            <div className="flex mb-4 text-sm font-medium">
              <Link to={`/productDetails/${product._id}`}
                type="button"
                className="py-2 px-4   focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                More details 
              </Link>
            </div>
            <p className="text-sm text-gray-500 ">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
