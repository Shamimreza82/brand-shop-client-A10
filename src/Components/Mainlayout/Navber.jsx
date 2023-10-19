import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../assets/brand-image/Logo.jpg'


export const Navber = () => {

  const {logeOut, googleLogin, user} = useContext(AuthContext); 
  // console.log(user);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "Light" ) 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect (()=>{
        localStorage.setItem('theme', theme); 
        const localTheme = localStorage.getItem('theme'); 
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]) 


    const handleSineOut = () => {

      Swal.fire({
        title: 'Are you sure?',
        text: "You want to SineOut",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SineOut'
      }).then((result) => {
        if (result.isConfirmed) {
          logeOut()
          .then(() => {
            Swal.fire(
              'SineOut Successfully',
            )
          }).catch((error) => {
            console.log(error);
          });
        }
      })
      
    }

    const handleTogle = e => {
      if(e.target.checked){
        setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  
    return (
      <div>
        <div className="px-4 py-3 justify-between mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 shadow-md border-b">
          
          <div className="relative flex items-center justify-between"> 
          <div className="flex items-center">
          <span>
              <img className="h-12 rounded-full" src={logo} alt="" />
             </span>
              <span className="ml-2 text-xl font-bold tracking-wide ">
              Tech Globe Hub
              </span>
          </div>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li className="hover:scale-105 hover:duration-300 duration-700">
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className=" p-2 hover:border rounded-md border-[#F08E31]  hover:scale-105 hover:duration-300  font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </Link>
              </li >
              <li className="hover:scale-105 hover:duration-300 duration-700">
                <Link
                  to="/addProduct"
                  aria-label="Our product"
                  title="Our product"
                  className="p-2 hover:border rounded-md border-[#F08E31]  hover:scale-105 hover:duration-300  font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Add Product
                </Link>
              </li>
              <li className="hover:scale-105 hover:duration-300 duration-700">
                <Link
                  to="/myCart"
                  aria-label="Product pricing"
                  title="Product pricing"
                  className="p-2 hover:border rounded-md border-[#F08E31]  hover:scale-105 hover:duration-300  font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  My Cart
                </Link>
              </li>
              <li className="hover:scale-105 hover:duration-300 duration-700">
                <Link
                  to="/about"
                  aria-label="About us"
                  title="About us"
                  className="p-2 hover:border rounded-md border-[#F08E31]  hover:scale-105 hover:duration-300  font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About us
                </Link>
              </li>
              <li className="hover:scale-105 hover:duration-300 duration-700">
                <Link
                  to="/contact"
                  aria-label="About us"
                  title="About us"
                  className="p-2 hover:border rounded-md border-[#F08E31]  hover:scale-105 hover:duration-300  font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Contact
                </Link>
              </li>
               

              <label className="swap swap-rotate w-10">
                <input type="checkbox" onChange={handleTogle} checked={theme === "light" ? false : true}  />
                <svg className="swap-on fill-current w-10 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                <svg className="swap-off fill-current w-10 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
               

              {
                user ? 
              <li className="flex justify-center items-center gap-3 ">
                <Link 
                  onClick={handleSineOut}
                  className="font-Roboto font-bold text-base border p-1 px-3
                  border-[#F08E31] text-[#F08E31]   hover:scale-105 hover:duration-300 duration-300"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sine Out
                  <div>
                  
                  </div>
                </Link>
                <img className="rounded-full w-12" src={user.photoURL} alt="" />
                
              </li> :
              <li className=" hover:scale-105 hover:duration-300 duration-300">
              <Link
                to="/login"
                className="font-Roboto font-bold text-base border p-2 px-3
                 border-[#F08E31] text-[#F08E31] "
                aria-label="Sign up"
                title="Sign up"
              >
                Login
              </Link>
            </li>
              }
              
              
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>



{/* mobile */}


              {isMenuOpen && (
                <div className="absolute z-50 top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                          <img className="h-20" src={logo} alt="" />
                          <div className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Tech Globe Hub
                          </div>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                           Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/addProduct"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add Product
                          </a>
                        </li>
                        <li>
                          <a
                            href="/myCart"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Cart
                          </a>
                        </li>
                        <li>
                          <a
                            href="/about"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/contact"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Contact
                          </a>
                        </li>
                        <label className="swap swap-rotate w-10">
                <input type="checkbox" onChange={handleTogle} checked={theme === "light" ? false : true}  />
                <svg className="swap-on fill-current w-10 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                <svg className="swap-off fill-current w-10 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
                        {
                          user ? <li>
                          <a
                            href="/register"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </li> : <li>
                          <a
                            href="/login"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Login
                          </a>
                        </li>

                        }
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Navber;
