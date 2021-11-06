import React from 'react';
import './SingleService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'

const SingleService = (props) => {
    const service = props.service;
    const{name, img} = service
    return (
        <div className="col-md-4 col-sm-6 col-12 p-3">
            <div class="card h-100 service" style={{'width': '100%'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <button class="btn btn-info service-btn"><FontAwesomeIcon icon={faInfoCircle}/> See details</button>
            </div>
            </div>
        </div>
    );
};

export default SingleService;