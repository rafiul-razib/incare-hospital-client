import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className= "container-fluid bg-dark mt-5">
            <div className='row mx-auto'>

                <div className="col-md-2"></div>    
                    
                <div class="col-md-2 col-12">
                    <div class="card h-100 text-start border-0 bg-dark text-white">
                    <div class="card-body">
                    <h5 class="card-title">MEDICARE</h5>
                        <ul>
                            <li>Neurology</li>
                            <li>Ophthalmology</li>
                            <li>Nuclear Medicine</li>
                            <li>Surgical</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div class="col-md-2 col-12">
                    <div class="card h-100 text-start border-0 bg-dark text-white">
                    <div class="card-body">
                    
                        <ul>
                            <li>X-ray</li>
                            <li>Dental</li>
                            <li>Traumatology</li>
                            <li>Cardiology</li>
                        
                        </ul>
                    </div>

                    </div>
                </div>

                <div class="col-md-2 col-12">
                    <div class="card h-100 text-start border-0 bg-dark text-white">
                    <div class="card-body">
                    <h5 class="card-title">LINKS</h5>
                        <ul>
                            <li>Blogs</li>
                            <li>Recent Innovations</li>
                            <li>Success story</li>
                            <li>Surgical</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div class="col-md-4 col-12">
                    <div class="card h-100 text-start border-0 bg-dark text-white">
                    <div class="card-body">
                    <h5 class="card-title">CONTACTS</h5>
                        <ul>
                            <li>Talk to the chairman</li>
                            <li>Emergency support</li>
                            <li>Campaign</li>
                            <li>Surgical</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>

                    </div>
                </div>
                    
                </div>

                <p className='text-light text-center mb-0 pb-3'>All rights reserved by rafiul-razib @ 2021</p>
        </div>
    );
};

export default Footer;