import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import hamburger from './../../assets/icons/hamburger.webp'

const Navbar = () => {
    const listItem = [
        {
            text: 'Home',
            link: '/'
        },
        {
            text: 'About',
            link: '/about'
        }, {
            text: 'Appointments',
            link: '/appointments'
        }, {
            text: 'Reviews',
            link: '/reviews'
        }, {
            text: 'Contact Us',
            link: '/contact-us'
        }, {
            text: 'Login',
            link: '/login'
        },
    ]
    const { pathname } = useLocation();
    const [nav, setNav] = useState(false);
    const navbarRef = useRef(null)

    useEffect(() => {
        nav
            ?
            gsap.to(navbarRef.current, {
                height: 'auto',
                duration: 0.2
            })
            :
            gsap.to(navbarRef.current, {
                height: 0,
                duration: 0.2
            })
    }, [nav]);

    return (
        <nav className='px-[11px] lg:px-[90px] py-[16px] flex lg:items-center text-right justify-between sticky top-0 bg-white'>
            <h6 className='text-heading-5'>Doctors Portal</h6>

            <ul className='hidden lg:flex'>
                {listItem.map(({ text, link }, key) => <li key={key}>
                    <NavLink className={`px-[13px] py-[11px] ${pathname && pathname === link && 'bg-dark-800 text-white rounded-[8px]'} `} to={link}>{text}</NavLink>
                </li>)}
            </ul>
            <div className='lg:hidden'>
                <label htmlFor="check">
                    <img src={hamburger} alt="hamburger" className='ml-auto mt-1' />
                </label>
                <input type="checkbox" className='hidden' name="" onChange={e => setNav(e.target.checked)} id="check" />
                <ul className="flex-col overflow-hidden h-0" ref={navbarRef} id='navbar'>
                    {listItem.map(({ text, link }, key) => <li className='my-3' key={key}>
                        <NavLink className={`text-right px-[13px] py-[11px] ${pathname && pathname === link && 'bg-dark-800 text-white rounded-[8px] block'}`} to={link}>{text}</NavLink>
                    </li>)}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;