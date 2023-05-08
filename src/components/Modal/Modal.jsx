import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import InputField from '../InputField/InputField';
import axios from 'axios';
import { url } from '../../constants';

const Modal = ({ details, setDetails, date, userData }) => {
    const containerRef = useRef(null);
    const containerRefSm = useRef(null);
    const bodyRef = useRef(null)

    useEffect(() => {
        gsap.to(containerRef.current, {
            opacity: 1,
            top: 0,
            duration: 0.4
        })

        gsap.to(containerRefSm.current, {
            opacity: 1,
            top: 0,
            duration: 0.4
        })
        gsap.to(bodyRef.current, {
            opacity: 1,
            duration: 0.5
        })
    }, [])

    // console.log(details);

    const closeModal = () => {

        gsap.to(containerRef.current, {
            opacity: 0,
            top: '-10vh',
            duration: 0.4
        })

        gsap.to(containerRefSm.current, {
            opacity: 0,
            top: '50vh',
            duration: 0.4
        })

        gsap.to(bodyRef.current, {
            opacity: 0,
            duration: 0.5
        })
        document.body.classList.remove('overflow-y-hidden')


        setTimeout(() => setDetails(-1), 500)
    }
    // console.log(date);

    const handleSubmit = e => {
        e.preventDefault();

        details.slots = details.slots.filter(item => item.time !== e.target.slot.value);
        // console.log(details);

        const bookingDetails = {
            name: details.name,
            slot: { date, time: e.target.slot.value },
            fullName: e.target.fullname.value,
            phone: e.target.email.value,
            email: e.target.email.value,
        }

        console.log(bookingDetails);

        const data = {
            service: details,
            booking: bookingDetails
        }

        // if (e.target.fullname.value.length) {
        //     e.target.fullname.setCustomValidity('this field is required')
        // }

        // if (e.target.phone.value.length) {
        //     e.target.phone.setCustomValidity('this field is required')
        // }

        if (e.target.slot.value &&
            e.target.fullname.value &&
            e.target.email.value &&
            e.target.phone.value) {
            axios.put(`${url}services/${details._id}`, data, {
                headers: {
                    token: localStorage.getItem('token')
                },
            }).then(res => console.log(res))
        }
    }

    console.log(date);

    return (
        <>
            <div className='fixed h-screen w-screen hidden lg:flex items-end lg:items-center justify-center bg-[rgba(0,0,0,0.5)] top-0 left-0 z-50 overflow-hidden' ref={bodyRef}>
                <form onSubmit={handleSubmit} className="bg-white w-full lg:w-1/3 rounded-b-none lg:rounded-b-[18px] rounded-[18px] p-[19px] relative top-[-10vh] opacity-0" ref={containerRef}>
                    <span onClick={closeModal} className='bg-dark cursor-pointer absolute top-[8px] right-[7px] w-[36px] h-[36px] rounded-full text-[#8391ad] text-[30px] flex items-center justify-center'>&times;</span>
                    <h4 className='text-heading-4 font-semibold'>{details.name}</h4>
                    <InputField name='date' disabled={true} className='w-full p-[12px] mt-[47px] bg-[#e6e6e6] rounded-[8px]' value={date} onChange={e => console.log(e)} />
                    <div className='w-full px-[12px] rounded-[8px] mt-[23px] bg-[#e6e6e6]'>
                        <select name="slot" id="" className='w-full py-[12px] bg-[#e6e6e6] focus:outline-none border-0'>
                            {details.slots.map((item, id) => <option key={id} value={item.name}>{item.time}</option>)}
                        </select>
                    </div>
                    <InputField name='fullname' className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px]' placeholder="Full Name" />
                    <InputField name='phone' className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px]' placeholder="Phone Number" />
                    <InputField name='email' disabled className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px] disabled:bg-[#e6e6e6]' value={userData.email} />
                    <InputField type='submit' value='submit' className="bg-dark w-full mt-[23px] rounded-[8px] py-[12px] text-center uppercase text-normal text-[#D4D9E3]" />
                </form>
            </div>
            <div className='fixed h-screen w-screen flex lg:hidden items-end lg:items-center justify-center bg-[rgba(0,0,0,0.5)] top-0 left-0 z-50 overflow-hidden opacity-0' ref={bodyRef}>
                <form onSubmit={handleSubmit} className="bg-white w-full lg:w-1/3 rounded-b-none lg:rounded-b-[18px] rounded-[18px] p-[19px] relative top-[50vh] opacity-0" ref={containerRefSm}>
                    <span onClick={closeModal} className='bg-dark cursor-pointer absolute top-[8px] right-[7px] w-[36px] h-[36px] rounded-full text-[#8391ad] text-[30px] flex items-center justify-center'>&times;</span>
                    <h4 className='text-heading-4 font-semibold'>{details.name}</h4>
                    <InputField name='date' disabled={true} className='w-full p-[12px] mt-[47px] bg-[#e6e6e6] rounded-[8px]' value={date} onChange={e => console.log(e)} />
                    <select name="slot" id="" className='w-full p-[12px] rounded-[8px] mt-[23px] focus:outline-none border-0'>
                        {details.slots.map(item => <option key={item._id} value={item.name}>{item.time}</option>)}
                    </select>
                    <InputField name='fullname' className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px]' placeholder="Full Name" />
                    <InputField name='phone' className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px]' placeholder="Phone Number" />
                    <InputField name='email' className='w-full p-[12px] mt-[23px] border-[1px] focus:outline-none border-[#e6e6e6] rounded-[8px]' placeholder="Email" value={userData.email} />
                    <InputField type='submit' value='submit' className="bg-dark w-full mt-[23px] rounded-[8px] py-[12px] text-center uppercase text-normal text-[#D4D9E3] cursor-pointer disabled:cursor-default" />
                </form>
            </div>
        </>
    );
};

export default Modal;