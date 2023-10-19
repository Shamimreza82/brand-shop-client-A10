import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

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
      <Helmet>
        <title>Tech Globe Hub | My Cart</title>
      </Helmet>
      <div className="md:w-[80%] m-auto grid md:grid-cols-2 gap-3 ">
        {myCarts.map((myCart) => (
          <div
            key={myCart._id}
            className=" mt-8 p-4 shadow-lg  rounded-md flex gap-4 border"
          >
            <div className="md:w-[40%]">
              <img className="md:h-52 ml-4 " src={myCart.image} alt="" />
            </div>
            <div className="text-base ml-6 border-l pl-2">
              <p className="mt-6">
                <strong>Model: </strong>
                {myCart.name}
              </p>
              <p className="mt-2"><strong>Price:</strong> {myCart.price}/-</p>
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



      {/* <div>
        {myCarts.map((myCart) => (
          <section key={myCart._id} className=" body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="sm:mr-8 w-48 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full ">
                    <img src={myCart.image} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-lg title-font font-medium mb-3">
                      {myCart.brand}
                    </h2>
                    <h2 className=" text-lg title-font font-medium mb-3">
                      {myCart.name}
                    </h2>
                    <p className="leading-relaxed text-base">{myCart.price}</p>
                    <div className="rating">
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
                  </div>
                  <button
                    onClick={() => handleDelete(myCart._id)}
                    className="mt-40 text-red-600 inline-flex items-center border p-2 font-bold"
                  >
                    Delete
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div> */}
    </div>
  );
};

export default MyCart;
