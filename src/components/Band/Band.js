import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClinicMedical} from '@fortawesome/free-solid-svg-icons'

const Band = () => {
    return (
        <div className='container-fluid bg-info p-5 mb-5'>
        <div className="d-flex justify-content-center align-items-center">
            <h2 className='px-3'>Make an appointment</h2>
            <button className="btn btn-success rounded-pill btn-appointment px-3">Make an appointment <FontAwesomeIcon icon={faCalendarAlt}/></button>

        </div>
    </div>
    );
};

export default Band;