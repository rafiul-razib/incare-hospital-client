import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';

const ServiceDetails = () => {
    const{id} =useParams();
    const[allService, setAllService] = useState([])
    const[service, setService] = useState({});

    const{name, details, img} = service;

    useEffect(()=>{
        fetch('../fakeData.json')
        .then(res => res.json())
        .then(data => setAllService(data))
    },[])

    useEffect(()=>{
        if(allService.length>0){
            const selectedService = allService.find(services => services.id == id)
            setService(selectedService);
        }
    },[allService, id])

    console.log(service)


    return (
        <div className="card mb-3 w-50 mx-auto mt-3">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{details}</p>
            <HashLink to="/home#services">
                <button className="btn btn-primary">Back to Services</button>
            </HashLink>
        </div>
        </div>
    );
};

export default ServiceDetails;