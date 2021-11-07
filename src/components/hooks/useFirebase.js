import initializeAuthentication from '../Login/firebase_init';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';



initializeAuthentication();
const useFirebase =()=>{
    const [user, setUser] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    

    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return  signInWithPopup(auth, googleProvider)
        // .then(result =>{
        //     console.log(result.user)
        // })
        
    }

    const handleRegistrationWithEmailAndPassword = (email, password)=>{
         createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
        })
    }

    const handleSignInWithEmailAndPassword = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     console.log(result.user)
        // })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
        .finally(
            setIsLoading(false)
        )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe
    },[])


    return{
        user,
        googleSignIn,
        handleRegistrationWithEmailAndPassword,
        handleSignInWithEmailAndPassword,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;