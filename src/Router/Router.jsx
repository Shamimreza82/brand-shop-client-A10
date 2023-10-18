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
                element: <AddProduct></AddProduct>
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
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
                
            } 

        ] 
    }
])

export default router; 