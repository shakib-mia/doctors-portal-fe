import React from 'react';
import bg from './../../assets/images/appointment-bg.webp'
import InputField from '../InputField/InputField';

const ContactUs = () => {
    const handleSubmit = e => {
        // e.preventDefault();
        console.log(e);
    }
    return (
        <div onSubmit={handleSubmit} className='bg-cover py-[65px] text-center flex flex-col justify-center items-center px-[34px]' style={{ backgroundImage: `url(${bg})` }}>
            <h4 className="text-heading-4 text-secondary mb-[10px] font-bold">Contact Us</h4>
            <h2 className='text-heading-2 text-white mb-[41px]'>Stay connected with us</h2>

            <InputField placeholder="Email Address" name="email" />
            <InputField placeholder="Subject" name="subject" />
            <textarea rows={5} className="rounded-[8px] px-[19px] py-[15px] w-full lg:w-1/3 mb-[19px] focus:outline-none" placeholder="Your Message" name="message" />
            <InputField type="submit" value="Submit" />
        </div>
    );
};

export default ContactUs;