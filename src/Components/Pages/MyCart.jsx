import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {

    const lodedmyCarts = useLoaderData()
    const [myCarts, setMyCards] = useState(lodedmyCarts)



    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/productsCart/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount === 1) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    const remaning = myCarts.filter(myCart => myCart._id !== _id); 
                    setMyCards(remaning);
                    }
                    
                    
                } )


              
            }
          })

        
    }

    return (
        <div>
            <Helmet>
            <title>Tech Globe Hub | My Cart</title>
          </Helmet>
            <div className='md:w-[80%] m-auto grid md:grid-cols-2' >
                {
                myCarts.map(myCart =>
                  <div key={myCart._id} className=' mt-2 p-4 shadow-lg bg-white rounded-md flex gap-4 '>
                    <div className='w-[40%]'>
                        <img className='h-52 ml-4 ' src={myCart.image} alt="" />
                    </div>
                    <div className='text-xl ml-6'>
                        <p className='mt-6'><strong>Model: </strong>{myCart.name}</p>
                        <p><strong>Price:</strong> {myCart.price}/-</p>
                        <button onClick={()=>handleDelete(myCart._id)} className='btn mt-16 bg-red-600 text-white'>delete</button>
                    </div>
                
                  </div>  
                )
                }
            </div>
            {/* <div>
                {
                    myCarts.map(myCart => 
                        <section key={myCart._id} className=" body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="p-4 lg:w-1/2 md:w-full">
                    <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div className="sm:mr-8 w-48 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full ">
                        <img src={myCart.image} alt="" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{myCart.name}</h2>
                        <p className="leading-relaxed text-base">{myCart.price}</p>
                        <button onClick={()=>handleDelete(myCart._id)} className="mt-3 text-red-600 inline-flex items-center">Delete
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </button>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
                        
                        )
                }
            </div> */}


        </div>
    );
};

export default MyCart;