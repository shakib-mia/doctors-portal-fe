import axios from 'axios';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { url } from '../../constants';

const Navbar = () => {
    const [userData, setUserData] = useState({});

    const { pathname } = useLocation();
    const [nav, setNav] = useState(false);
    const navbarRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (nav) {
            gsap.to(navbarRef.current, {
                height: 'auto',
                duration: 0.2
            })
        } else {
            gsap.to(navbarRef.current, {
                height: 0,
                duration: 0.2
            })
        }
    }, [nav]);

    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        axios.get(url + 'user', config)
            .then(res => setUserData(res.data))
    }, [])

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
        }, userData ? {
            text: <>{userData.name ? <span>{userData.name}</span> : userData.email} <button className='bg-[#d32f2f] text-white px-5 py-2 rounded' onClick={() => {
                localStorage.removeItem('token');
                navigate('/')
                window.location.reload();
            }}>Sign out</button>
            </>,
            link: ''
        } : {
            text: 'Login',
            link: '/login'
        },
    ]

    const topRef = useRef(null)
    const middleRef = useRef(null)
    const bottomRef = useRef(null)

    useEffect(() => {
        if (nav) {
            gsap.to(middleRef.current, {
                height: 0,
                duration: 0.5
            })

            gsap.to(bottomRef.current, {
                // height: '3px',
                rotate: '45deg',
                duration: 0.5,
                top: -6
            })
            gsap.to(topRef.current, {
                // height: '3px',
                rotate: '-45deg',
                duration: 0.5,
                top: '0.5px'
            })
        } else {
            gsap.to(middleRef.current, {
                height: '3px',
                duration: 0.5
            })

            gsap.to(bottomRef.current, {
                // height: '3px',
                rotate: '0',
                duration: 0.5,
                top: 0
            })

            gsap.to(topRef.current, {
                // height: '3px',
                rotate: '0',
                duration: 0.5,
                top: 0
            })
        }
    }, [nav])

    return (
        <nav className='px-[11px] lg:px-[90px] py-[16px] flex lg:items-center text-right justify-between sticky top-0 bg-white z-[1]'>
            <Link to='/' className='text-heading-5'>Doctors Portal</Link>

            <ul className='hidden lg:flex items-center'>
                {listItem.map(({ text, link }, key) => <li key={key}>
                    <NavLink className={`px-[13px] py-[11px] ${pathname && pathname === link && 'bg-dark-800 text-white rounded-[8px]'} `} to={link}>{text}</NavLink>
                </li>)}
            </ul>
            <div className='lg:hidden'>
                <label htmlFor="check" className='ml-auto mt-1'>
                    {/* <img src={hamburger} alt="hamburger" className='ml-auto mt-1' /> */}
                    <div className='w-[20px] h-[3px] bg-[#000] ml-auto mb-[4px] mt-1 relative' ref={topRef}></div>
                    <div className='w-[20px] h-[3px] bg-[#000] ml-auto mb-[4px] mt-1' ref={middleRef}></div>
                    <div className='w-[20px] h-[3px] bg-[#000] ml-auto mb-[4px] mt-1 relative' ref={bottomRef}></div>
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