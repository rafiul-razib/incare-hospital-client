import React from 'react';

const SingleService = (props) => {
    const service = props.service;
    const{name, img} = service
    return (
        <div className="col-md-4 col-sm-6 col-12 p-3">
            <div class="card h-100" style={{'width': '100%'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <button class="btn btn-info">See details</button>
            </div>
            </div>
        </div>
    );
};

export default SingleService;