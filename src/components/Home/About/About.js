import React from 'react';
import imgDoc from '../../../images/About/bruno-rodrigues-279xIHymPYY-unsplash.jpg';


const About = () => {
    return (
        <div className="container" id="about">
            <div className="row">
                <div className="col-md-5">
                    <img src={imgDoc} className="img-fluid p-5" alt="" />
                </div>
                <div className="col-md-7 p-5 text-end">
                    <h2>About Incare</h2>
                    <p>Incare Hospital is a 425-bed multidisciplinary super specialty tertiary care hospital which is the first and only hospital in Bangladesh to have got JCI Accredited. The Joint Commission International (JCI) is a U.S. based accreditation body dedicated to improving healthcare quality and safety around the world.</p>
                    <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why Choose us?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>Incare Hospital and Specialist Centre not only places quality healthcare within reach, but provides patients and visitors with an enhanced hospital experience with its tastefully styled interiors. Upholding Singapore's reputation for delivering quality medical services, it has also been accredited by the Joint Commission International (JCI).</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What we do?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>The latest addition to the Mount Elizabeth legacy is our Mount Elizabeth Novena Hospital. Marking a new era in specialist healthcare, this modern hospital which features more than 250 specialist physician suites provides tertiary medical treatments in the comfort of all single bedded rooms.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Offer services
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p>Our MHC packages are listed below. Please click on the links to view cost and details of each package.</p>
                    <ul>
                        <li>Whole Body Check-Male (Below 45 Years)</li>
                        <li>Whole Body Check-Female (Below 45 Years)</li>
                        <li>Heart Checkup (Male/Female)</li>
                        <li>Executive Health Checkup (Male / Female)</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default About;