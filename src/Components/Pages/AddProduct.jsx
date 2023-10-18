import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {


    const handleProduct = e => {
        e.preventDefault(); 
        const form = e.target; 
        const name = form.name.value; 
        const brand = form.brand.value; 
        const category = form.category.value; 
        const brandImage = form.brandimage.value; 
        const price = form.price.value; 
        const image = form.image.value; 
        const rating = form.rating.value; 
        const description = form.description.value; 
        console.log(name, brand, category, price, image, rating, description, brandImage);

        const product = {name, brand, category, price, image, rating, description, brandImage}

        fetch ('http://localhost:5000/products', {
            method: "POST", 
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                Swal.fire(
                    'Nice',
                    'Product Add Successfully',
                    'success'
                  )
            }
            
        })


    }



    return (
        <div className='max-w-7xl m-auto'>
        <div className="font-Raleway">
          <div
            className="min-h-[100vh] md:py-10 py-3 md:my-10"
            
          >
            <div className="md:w-[60%] m-auto mb-4">
 
            </div>
            <div className="bg-[#F4F3F0] md:w-[60%] m-auto md:p-10 p-3 rounded-md">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-black">
                  Add Product
                </h3>
                <p>
                  It is a long established fact that a reader will be distraceted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here.
                </p>
              </div>
  
              <form onSubmit={handleProduct}>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                  <div className="flex-grow">
                    <div>
                      <label className="block my-2 font-bold text-black">
                       Product Name
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block my-2 font-bold text-black">
                        Brand name
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="brand"
                        placeholder="Brand name"
                      />
                    </div>
                    <div>
                      <label className="block my-2 font-bold text-black">
                        Category / Type
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="category"
                        placeholder="Enter coffee Category"
                      />
                    </div>
                    <div>
                      <label className="block my-2 font-bold text-black">
                      Brand Image
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="brandimage"
                        placeholder="Image"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div>
                      <label className="block my-2 font-bold text-black">
                        Price
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="price"
                        placeholder="Price"
                      />
                    </div>
                    <div>
                      <label className="block my-2 font-bold text-black">
                      Image
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="image"
                        placeholder="Image"
                      />
                    </div>
                    
                    <div>
                      <label className="block my-2 font-bold text-black">
                         Rating
                      </label>
                      <input
                        className="py-2 pl-3 rounded-md w-full"
                        type="text"
                        name="rating"
                        placeholder="Rating"
                      />
                    </div>
                    <div>
                  <label className="block my-2 font-bold text-black">
                    Short description
                  </label>
                  <input
                    className="py-2 pl-3 rounded-md w-full"
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                </div>
                  </div>
                </div>
                
                <input
                  className="btn w-full mt-4 bg-[#FFB000]"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;