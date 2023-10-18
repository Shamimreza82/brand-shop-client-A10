import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../fitebaseConfig/firebaseConfig';

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loeading, setLoding] = useState(true)

    // Account Register
    const createAccount = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user
    const Login = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login With googel
    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, provider)
    }

    // sine Out
    const logeOut = () => {
        setLoding(true)
        return  signOut(auth)
    }

    const userPhotoAndNameUpdate = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }


    useEffect(()=> {
            onAuthStateChanged(auth, currentuser => {
                setUser(currentuser) 
                console.log("User login ");
                setLoding(false)
            })
    }, [])




    const authInfo = {
        user, 
        createAccount, 
        Login,
        googleLogin, 
        logeOut, 
        loeading, 
        userPhotoAndNameUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;