/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loading}=useContext(AuthContext);
const location = useLocation();

if(loading){
    return <progress className='ms-96 progress w-56'></progress>
}

if(user){
    return children;
}
return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.string.isRequired, // Define the prop validation for 'toy'
  };

export default PrivateRoute;