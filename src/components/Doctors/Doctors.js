import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import SingleDocs from '../SingleDocs/SingleDocs';

const Doctors = () => {
    const[doctors, setDoctors]= useState([]);
    useEffect(()=>{
        fetch('./fakeDoctors.json')
        .then(res => res.json())
        .then(data=> setDoctors(data))
    },[])
    return (
        <div className="container text-center">
            <h1 className="text-primary py-3">Our Specialist Doctors</h1>
            <div className="row g-4">
                {
                    doctors.map(doctor => <SingleDocs key={doctor.id} doctor={doctor}></SingleDocs>)
                }
            </div>
        </div>
    );
};

export default Doctors;