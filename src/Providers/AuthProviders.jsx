/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null)

const auth = getAuth(app);


const AuthProviders = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading] = useState(true);

const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}


const authInfo ={
    user,
    createUser,
    setLoading,
    signIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProviders;