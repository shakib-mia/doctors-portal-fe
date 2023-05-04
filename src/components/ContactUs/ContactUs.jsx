import React from 'react';
import bg from './../../assets/images/appointment-bg.webp'
import InputField from '../InputField/InputField';

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div onSubmit={handleSubmit} className='bg-cover py-[65px] text-center flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bg})` }}>
            <h4 className="text-heading-4 text-secondary mb-[10px]">Contact Us</h4>
            <h2 className='text-heading-2 text-white mb-[41px]'>Stay connected with us</h2>

            <InputField className="rounded-[8px] px-[19px] py-[15px] w-1/3 mb-[19px] focus:outline-none" placeholder="Email Address" name="email" />
            <InputField className="rounded-[8px] px-[19px] py-[15px] w-1/3 mb-[19px] focus:outline-none" placeholder="Email Address" name="email" />
            <textarea rows={5} className="rounded-[8px] px-[19px] py-[15px] w-1/3 mb-[19px] focus:outline-none" placeholder="Email Address" name="email" />
            <InputField type="submit" value="Submit" className="gradient py-[15px] px-[35px] rounded-[8px] text-white text-sm font-bold" />
        </div>
    );
};

export default ContactUs;