import React from 'react';
import './SingleService.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const service = props.service;
    const{name, img, id, details} = service
    return (
        <div className="col-md-4 col-sm-6 col-12 p-3">
            <div className="card h-100 service" style={{'width': '100%'}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 className="card-title animate__heartBeat">{name}</h5>
                <p>{details.slice(0,90)}...</p>
                
                </div>
                <div>
                <Link to= {`/service/${id}`}>
                <button className="btn btn-info mt-auto"><FontAwesomeIcon icon={faInfoCircle}/> See details</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleService;