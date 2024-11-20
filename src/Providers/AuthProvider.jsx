import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password)=>{
       setLoading(true)
       return signInWithEmailAndPassword(email,password) 
    }
    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }



    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>{
           return unSubscribe() 
        }
    },[])




    const authInfo = {

        user,
        loading,
        createUser,
        userLogin,
        logOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;