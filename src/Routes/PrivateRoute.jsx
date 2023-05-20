/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {

const {user,loading}=useContext(AuthContext);
const location = useLocation();

if(loading){
    return <LoadingSpinner></LoadingSpinner>
}


if(user){
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default PrivateRoute;