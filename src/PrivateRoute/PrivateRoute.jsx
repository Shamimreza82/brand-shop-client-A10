import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user,loeading} = useContext(AuthContext); 

    if(loeading){
        return <p className='flex justify-center items-center min-h-screen'><span className="loading loading-spinner loading-md"></span></p>
    }
    if(user){
        return children; 
    }

    return <Navigate  state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;