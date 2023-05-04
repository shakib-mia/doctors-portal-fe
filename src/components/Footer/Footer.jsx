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
        <footer className='px-[98px] pt-[76px] pb-[43px] bg-no-repeat bg-cover flex justify-between' style={{ backgroundImage: `url(${bg})` }}>
            {/* <div>Lorem ipsum dolor sit.</div>
            <div>Neque dolorem earum accusantium.</div>
            <div>Debitis iste expedita eius.</div> */}
            {items.map(item => <div>
                <h5 className='text-heading-5 font-bold text-[#939393] mb-[19px]'>{item.heading}</h5>
                <ul>
                    {item.items.map(({ link, title }) => <li className='mb-[14px]'>
                        {link.length ? <NavLink className='text-normal' to={link}>{title}</NavLink> : <>{title}</>}
                    </li>)}
                </ul>
            </div>)}
        </footer>
    );
};

export default Footer;