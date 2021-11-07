import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
        <div class="card mb-3 w-50 mx-auto mt-5">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{details}</p>
        </div>
        </div>
    );
};

export default ServiceDetails;