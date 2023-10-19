import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Mainlayout/Footer";

const MyCart = () => {
  const lodedmyCarts = useLoaderData();
  const [myCarts, setMyCards] = useState(lodedmyCarts);

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-g9l9v12z0-shamim-rezas-projects.vercel.app/productsCart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaning = myCarts.filter((myCart) => myCart._id !== _id);
              setMyCards(remaning);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="max-w-7xl m-auto min-h-screen">
      <Helmet>
        <title>Tech Globe Hub | My Cart</title>
      </Helmet>
      <div className="md:w-[80%] m-auto grid md:grid-cols-2 gap-3 mt-8 ">
        {myCarts.map((myCart) => (
          <div
            key={myCart._id}
            className="p-4 shadow-lg  rounded-md flex gap-4 border"
          >
            <div className="md:w-[40%]">
              <img className="md:h-52 ml-4 " src={myCart.image} alt="" />
            </div>
            <div className="text-base ml-6 border-l pl-2">
              <p className="mt-6">
                <strong>Model: </strong>
                {myCart.name}
              </p>
              <p className="mt-2 text-sm"><strong>Price:</strong> {myCart.price}/- BDT</p>
              <div className="md:flex">
              <div className="rating mt-3">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                </div>
              
              <button
                onClick={() => handleDelete(myCart._id)}
                className="font-Roboto font-bold text-base border p-1 ml-12 px-3
                border-[#F08E31] text-[#F08E31] md:mt-20 mt-3 hover:scale-105 hover:duration-300 duration-300"
              >
                delete
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer> </Footer>
    </div>
  );
};

export default MyCart;
