import React from 'react';

const SingleDocs = (props) => {
    const doctor = props.doctor;
    const{img,name} = doctor
    return (
        <div className='col-md-3 col-12'>
            <div class="card p-2 h-100" style={{"width": "100%"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h4 class="card-text">{name}</h4>
            </div>
            </div>
        </div>
    );
};

export default SingleDocs;