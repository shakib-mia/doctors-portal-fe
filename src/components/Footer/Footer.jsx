import React from 'react';
import bg from './../../assets/images/footer-bg.webp'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const items = [
        {
            heading: 'SERVICES',
            items: [
                {
                    link: '/',
                    title: 'Emergency Checkup'
                }, {
                    link: '/',
                    title: 'Monthly Checkup'
                }, {
                    link: '/',
                    title: 'Weekly Checkup'
                }, {
                    link: '/',
                    title: 'Deep Checkup'
                }
            ]
        },
        {
            heading: 'ORAL HEALTH',
            items: [
                {
                    link: '/',
                    title: 'Fluoride Treatment'
                }, {
                    link: '/',
                    title: 'Cavity Filling'
                }, {
                    link: '/',
                    title: 'Teath Whitening'
                }
            ]
        },
        {
            heading: 'OUR ADDRESS',
            items: [
                {
                    link: '',
                    title: 'New York - 101010 Hudson'
                }
            ]
        }
    ]
    return (
        <footer className='px-[36px] lg:px-[98px] pt-[54px] lg:pt-[76px] pb-[69px] lg:pb-[43px] bg-no-repeat bg-[size:0] lg:bg-cover flex flex-col lg:flex-row justify-between gap-[103px] lg:gap-0' style={{ backgroundImage: `url(${bg})` }}>
            {/* <div>Lorem ipsum dolor sit.</div>
            <div>Neque dolorem earum accusantium.</div>
            <div>Debitis iste expedita eius.</div> */}
            {items.map((item, id) => <div key={id}>
                <h5 className='text-heading-5 font-bold text-[#939393] mb-[19px]'>{item.heading}</h5>
                <ul>
                    {item.items.map(({ link, title }, id) => <li key={id} className='mb-[14px]'>
                        {link.length ? <NavLink className='text-normal' to={link}>{title}</NavLink> : <>{title}</>}
                    </li>)}
                </ul>
            </div>)}
            <p className="text-center text-sm">Copyright 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;