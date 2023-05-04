import React from 'react';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Appointment from '../../components/Appointment/Appointment';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Appointment />
            <Testimonial />
        </>
    );
};

export default Home;