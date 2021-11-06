import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';


const Services = () => {
    const[services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="container my-5">
            <h2>Our  Services</h2>
            <div className="row g-2">
                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;