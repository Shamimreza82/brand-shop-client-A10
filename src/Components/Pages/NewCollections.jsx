import React, { useEffect, useState } from "react";

const NewCollections = () => {
  const [prodect, setProduct] = useState([]);
  console.log(prodect);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center md:mt-24 mt-4 font-bold underline">
        Our Popular Product
      </h1>
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className=" grid md:grid-cols-4">
            {prodect.slice(0, 8).map((products) => (
              <div key={products._id} className="  w-full border p-3 m-2">
                <a className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center h-44 "
                    src={products.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
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
