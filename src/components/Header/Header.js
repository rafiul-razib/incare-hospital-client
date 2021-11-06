import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className=" sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><h1><FontAwesomeIcon icon={faClinicMedical}/> Medi<span className="text-success">care</span></h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-4">
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="/">Doctors</a>
                    <a className="nav-link" href="/">Services</a>
                    <a className="nav-link" href="/">Departments</a>
                    <a className="nav-link" href="/">Blogs</a>
                    <a className="nav-link" href="/">Contact</a>  
                </div>
                <div className="navbar-nav ms-auto px-5">
                <button className="btn btn-success rounded-pill btn-appointment">Make an appointment <FontAwesomeIcon icon={faCalendarAlt}/></button>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;