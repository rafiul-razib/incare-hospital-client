import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical} from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth();
    const handleSignOut = () =>{
        logOut();
    }
    return (
        <div className=" sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><h1 className=" animate__heartBeat"><FontAwesomeIcon icon={faClinicMedical}/> In<span className="text-success">care </span>Health</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-2">
                    <HashLink className="nav-link active" aria-current="page" to="/home#top">Home</HashLink>
                    <HashLink className="nav-link" to="/home#about">About</HashLink>
                    <HashLink className="nav-link" to="/home#services">Services</HashLink>
                    <Link className="nav-link" to="/">Departments</Link>
                    <Link className="nav-link"to="/contact">Contact</Link>

                    {
                        user.email?
                        <button onClick={handleSignOut} className="btn btn-info">Logout</button>
                        :
                        <Link className="nav-link"to="/login">Login</Link>
                    }  


                    <span className="navbar-text ms-2 text-danger">
                    {
                        user.displayName && <span>Signed in as {user.displayName}</span>
                    }
                    </span>

                    
                      
                </div>
                <div className="navbar-nav ms-auto px-1">
                <Link to='/contact'>
                <button className="btn btn-success rounded-pill btn-appointment">Make an appointment <FontAwesomeIcon icon={faCalendarAlt}/></button>
                </Link>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;