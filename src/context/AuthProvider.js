import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail   } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {   
    const [user, setUser] = useState(null);
    const [loading, setIsLoading] = useState(true);

   // create new user register function
    const createUser = (email, password) => {
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // New user sign in function
    const singInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUser = (userInfo) => {
        setIsLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // Forgot password
    const resetPassword = (email) => {
        return sendPasswordResetEmail (auth, email)
    }

    // Log Out function
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
       }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //  console.log(currentUser);
             setUser(currentUser);
             setIsLoading(false);
         });
 
         return () => unsubscribe();
     }, [])

    const authInfo = {
        createUser,
        singInUser,
        googleSignIn,
        updateUser,
        resetPassword,
        logOut,
        user,
        loading
    }
  return <AuthContext.Provider value={authInfo}>
        {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
