import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Need an account? <Link to='/register'>Register now!!</Link></p>
            <div className="d-flex">
            <button type="submit" class="btn btn-primary me-2">Sign In</button>
            <button type="submit" class="btn btn-primary ms-2">Sign In with Google</button>
            </div>
            </form>
        </div>
    );
};

export default Login;