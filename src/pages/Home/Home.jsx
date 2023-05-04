import React from 'react';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Appointment from '../../components/Appointment/Appointment';
import Testimonial from '../../components/Testimonial/Testimonial';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Appointment />
            <Testimonial />
            <ContactUs />
        </>
    );
};

export default Home;