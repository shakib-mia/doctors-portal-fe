import React from 'react';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Appointment from '../../components/Appointment/Appointment';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Appointment />
        </>
    );
};

export default Home;