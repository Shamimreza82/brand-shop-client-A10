import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();
  console.log(updateProduct);

  const handleProductUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(name, brand, category, price, image, rating, description);

    const product = {
      name,
      brand,
      category,
      price,
      image,
      rating,
      description,
    };

    fetch(`https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/updateProduct/${updateProduct.name}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire(
            "Product Update Successfully",
            "Please Visit Add Product page",
            "success"
          );
        } else if (data.modifiedCount === 0) {
          Swal.fire("Update Please", "Need Make Some Changes", "success");
        }
      });
  };

  return (
    <div className="max-w-7xl m-auto">
      <Helmet>
        <title>Tech Globe Hub | Update Product</title>
      </Helmet>
      <div className="font-Raleway">
        <div className="min-h-[100vh] md:py-10 py-3 md:my-10 ">
          <div className="md:w-[60%] m-auto mb-4"></div>
          <div className=" md:w-[60%] m-auto md:p-10 p-3 rounded-md shadow-lg">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold ">Update Product</h3>
            </div>

            <form onSubmit={handleProductUpdate}>
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="flex-grow">
                  <div>
                    <label className="block my-2 font-bold ">
                      Product Name
                    </label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="name"
                      defaultValue={updateProduct.name}
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block my-2 font-bold ">Brand name</label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="brand"
                      defaultValue={updateProduct.brand}
                      placeholder="Brand name"
                    />
                  </div>
                  <div>
                    <label className="block my-2 font-bold ">
                      Category / Type
                    </label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="category"
                      defaultValue={updateProduct.category}
                      placeholder="Enter coffee Category"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div>
                    <label className="block my-2 font-bold ">Price</label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="price"
                      defaultValue={updateProduct.price}
                      placeholder="Price"
                    />
                  </div>
                  <div>
                    <label className="block my-2 font-bold ">Image</label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="image"
                      defaultValue={updateProduct.image}
                      placeholder="Image"
                    />
                  </div>

                  <div>
                    <label className="block my-2 font-bold ">Rating</label>
                    <input
                      className="py-2 pl-3 rounded-md w-full border"
                      type="text"
                      name="rating"
                      defaultValue={updateProduct.rating}
                      placeholder="Rating"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block my-2 font-bold ">
                  Short description
                </label>
                <textarea
                  className="py-2 pl-3 rounded-md w-full border"
                  type="text"
                  name="description"
                  defaultValue={updateProduct.description}
                  placeholder="description"
                />
              </div>
              <input
                className="btn w-full mt-4 "
                type="submit"
                value="Update Product"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
