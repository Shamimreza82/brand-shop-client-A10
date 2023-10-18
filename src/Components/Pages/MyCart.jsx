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

                fetch(`http://localhost:5000/productsCart/${_id}`, {
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
        </div>
    );
};

export default MyCart;