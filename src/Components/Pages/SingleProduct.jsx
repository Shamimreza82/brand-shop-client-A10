import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  // console.log(product);

  


  return (
    <div>
      <div >
        <div className="flex flex-col md:flex-row  rounded-lg shadow border px-3" >
          <div className="mt-6 flex justify-center md:w-[50%]">
            <img
              src={product.image}
              alt="shopping image"
              className="rounded-lg p-4 h-44 "
            />
          </div>
          <form className=" py-3">
            <div>
              <h1 className="flex-auto text-xl font-semibold t-gray-50">
                {product.name}
              </h1>
              <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 ">
                In stock
              </div> 
              <div> 
              <p className="py-2">Price: {product.price} BDT</p>
              </div>
              <div className="rating rating-sm">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
              </div>
            </div>
            <div className="flex text-sm font-medium">
              <Link to={`/productDetails/${product._id}`}
                type="button"
                className="font-Roboto font-bold text-base border p-1 my-2 px-2
                border-[#F08E31] text-[#F08E31] hover:scale-105 hover:duration-300 duration-300"
              >
                More details 
              </Link>
            </div>
            <p className="text-sm text-gray-400 ">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
