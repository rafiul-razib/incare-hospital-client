import React from 'react';

const SingleDocs = (props) => {
    const doctor = props.doctor;
    const{img,name} = doctor
    return (
        <div className='col-md-3 col-12'>
            <div className="card p-2 h-100" style={{"width": "100%"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4 className="card-text">{name}</h4>
            </div>
            </div>
        </div>
    );
};

export default SingleDocs;