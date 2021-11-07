import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Band = () => {
    return (
        <div className='container-fluid bg-info p-5 mb-5'>
        <div className="d-flex justify-content-center align-items-center">
            <h2 className='px-3'>Make an appointment</h2>
            <Link to='/contact'>
            <button className="btn btn-success rounded-pill btn-appointment px-3">Make an appointment <FontAwesomeIcon icon={faCalendarAlt}/></button>
            </Link>

        </div>
    </div>
    );
};

export default Band;