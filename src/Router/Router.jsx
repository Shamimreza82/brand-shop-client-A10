import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import ErrorPage from "../Components/Pages/ErrorPage";
import Navber from "../Components/Mainlayout/Navber";
import Home from "../Components/Pages/Home";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Mainlayout></Mainlayout>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }
        ] 
    }
])

export default router; 