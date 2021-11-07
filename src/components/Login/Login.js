import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';


const Login = () => {
    const{googleSignIn, handleSignInWithEmailAndPassword, setIsLoading, isLoading} = useAuth();
    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home'

    const handleGoogleSignIn = (e)=>{
        googleSignIn()
        .then(result =>{
            history.push(redirect_uri)
        })
        .finally(
            setIsLoading(false)
        )
        e.preventDefault()
    }

    const handleEmail = e =>{
        setUser(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }

    const signInWithEmail=(e)=>{
        handleSignInWithEmailAndPassword(user, password)
        .then(result =>{
            history.push(redirect_uri)
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error =>{
                console.log(error.message)
            })
        })
        .finally(
            setIsLoading(false)
        )


        e.preventDefault()
        
    }
    return (
        <div className="container">
            <form onSubmit={signInWithEmail}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Need an account? <Link to='/register'>Register now!!</Link></p>
            <div className="d-flex">
            <button type="submit" className="btn btn-primary me-2">Sign In</button>
            <span>or</span>
            <button onClick={handleGoogleSignIn} className="btn btn-primary ms-2">Sign In with Google</button>
            </div>
            
            </form>
        </div>
    );
};

export default Login;