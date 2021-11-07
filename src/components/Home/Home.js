import React from 'react';
import About from '../About/About';
import Band from '../Band/Band';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Band></Band>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;