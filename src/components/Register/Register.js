import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="container">
            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="name"/>
               
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
           
            <p>Already signed up? <Link to='/login'>Login here!!</Link></p>
            <div className="d-flex">
            <button type="submit" class="btn btn-primary me-2">Sign up</button>
            {/* <button type="submit" class="btn btn-primary ms-2">Sign In with Google</button> */}
            </div>
            </form>
        </div>
        </div>
    );
};

export default Register;