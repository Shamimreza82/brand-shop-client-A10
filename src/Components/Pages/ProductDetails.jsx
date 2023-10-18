import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
  const singleProduct = useLoaderData();
  
    const [name] = singleProduct

    delete name._id
    console.log(name);

    



 const handlemycart = () => {
    fetch('http://localhost:5000/productsCart', {
        method: "POST", 
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(name)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        Swal.fire(
            'Cart Successfull',
            'Check the Product My Car Section',
            'success'
          )
    })
 }




  return (
    <div>
          <Helmet>
            <title>Tech Globe Hub | Product Detail</title>
          </Helmet>
      {singleProduct?.map((singlep) => (
        <div
          key={singlep._id}
          className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border w-[50%] m-auto my-14"
        >
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
            <img src={singlep.image} className="h-60 m-auto" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {singlep.name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {singlep.price}
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-between">
            <Link onClick={handlemycart}
              className="btn"
              type="button"
            >
              Add to Cart
            </Link>
            <Link to={`/updateProduct/${singlep.name}`} >
            <button
              className="btn"
              type="button"
            >
              Update Product
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
