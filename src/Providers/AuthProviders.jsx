/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


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

const googleLogin =(email,password)=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
}

const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        return unsubscribe();
    }
}, [])


const authInfo ={
    user,
    createUser,
    setLoading,
    signIn,
    logOut,
    googleLogin
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