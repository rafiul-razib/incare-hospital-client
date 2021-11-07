import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const {handleRegistrationWithEmailAndPassword} = useAuth();
    const[user, setUser] = useState('');
    const[password, setPassword]= useState('');

    const handleEmail = e =>{
        setUser(e.target.value)
    }

    const handlePassword = e=>{
        setPassword(e.target.value)
    }

    const handleRegistration = (e)=>{
        handleRegistrationWithEmailAndPassword(user, password)
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
            <form onSubmit={handleRegistration}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Already signed up? <Link to='/login'>Login here!!</Link></p>
            <div className="d-flex">
            <button type="submit" className="btn btn-primary me-2">Sign up</button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default Register;