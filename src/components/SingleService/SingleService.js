import React from 'react';
import './SingleService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const service = props.service;
    const{name, img, id} = service
    return (
        <div className="col-md-4 col-sm-6 col-12 p-3">
            <div class="card h-100 service" style={{'width': '100%'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title animate__heartBeat">{name}</h5>
                <Link to= {`/service/${id}`}>
                <button class="btn btn-info service-btn"><FontAwesomeIcon icon={faInfoCircle}/> See details</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default SingleService;