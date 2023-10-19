import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import ErrorPage from "../Components/Pages/ErrorPage";

import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import AddProduct from "../Components/Pages/AddProduct";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import Brand from "../Components/Pages/Brand";
import ProductDetails from "../Components/Pages/ProductDetails";
import MyCart from "../Components/Pages/MyCart";
import UpdateProduct from "../Components/Pages/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Mainlayout></Mainlayout>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/addProduct', 
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
                
            },
            {
                path: '/about', 
                element: <About></About>
            },
            {
                path: '/contact', 
                element: <Contact></Contact>
            },
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            },
            {
                path: '/products/:id',
                element: <Brand></Brand>, 
                loader: ({params}) => fetch(`https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/products/${params.id}`) 
                
            }, 
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>, 
                loader: ({params}) => fetch(`https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/productDetails/${params.id}`)
            }, 
            {
                path: '/myCart', 
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>, 
                loader: () => fetch('https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/productsCart')
            }, 
            {
                path: '/updateProduct/:id', 
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://brand-shop-server-pv8bd4lx4-shamim-rezas-projects.vercel.app/updateProduct/${params.id}`)

            }

        ] 
    }
])

export default router; 