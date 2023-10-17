import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import ErrorPage from "../Components/Pages/ErrorPage";
import Navber from "../Components/Mainlayout/Navber";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import AddProduct from "../Components/Pages/AddProduct";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

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
            }

        ] 
    }
])

export default router; 