import React from 'react';
import doctor from './../../assets/images/doctor-smile.webp';
import bg from './../../assets/images/appointment-bg.webp'
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className='flex items-center bg-[size:100%_100%] lg:bg-[size:100%] bg-no-repeat bg-center lg:bg-bottom lg:px-[136px] lg:gap-[70px]' style={{ backgroundImage: `url(${bg})` }}>
            <img className='hidden lg:block' src={doctor} alt="" />

            <aside className='py-[71px] px-[27px] lg:py-0 lg:px-0 lg:pt-[77px]'>
                <h4 className='text-secondary text-heading-4 font-bold mb-[22px]'>Appointment</h4>
                <h2 className='text-heading-2 text-white font-semibold mb-[22px]'>Make an appointment Today</h2>
                <p className='text-white text-normal mb-[24px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Link to='/login' className='btn gradient'>GET STARTED</Link>
            </aside>
        </div>
    );
};

export default Appointment;