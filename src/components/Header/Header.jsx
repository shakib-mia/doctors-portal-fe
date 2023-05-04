import React from 'react';
import headerBG from './../../assets/images/landing-bg.webp';
import chair from './../../assets/images/chair.webp'
import { Link } from 'react-router-dom';
import clock from './../../assets/icons/clocks.webp'
import location from './../../assets/icons/location.webp'
import phone from './../../assets/icons/phone.webp'

const Header = () => {
    return (
        <header className='bg-contain bg-no-repeat bg-top' style={{ backgroundImage: `url(${headerBG})` }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-[24px] lg:py-[207px] px-[11px] lg:px-[84px] ">
                <aside className='order-last lg:order-none'>
                    <h1 className='font-bold text-heading-1 mt-[60px] lg:mt-0'>Your New Smile Starts Here</h1>
                    <p className='text-normal mt-[14px] mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Link to='/login' className='btn gradient'>Get Started</Link>
                </aside>

                <aside className='order-none'>
                    <img src={chair} alt="chair" />
                </aside>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 px-[11px] lg;px-[25px] lg:px-[21px] gap-[30px] lg:gap-[24px] mt-[85px] lg:mt-0">
                <div className='px-[18px] lg:px-[25px] py-[19px] lg:py-[52px] grid grid-cols-1 justify-center lg:justify-normal lg:flex items-top gap-[22px] text-white bg-gradient-to-r from-secondary to-primary rounded-[14px]'>
                    <img src={clock} className='h-[86px] w-auto mx-auto lg:mx-0' alt="" />
                    <aside>
                        <h4 className='heading-4 font-bold mb-[6px] lg:mb-[15px]'>Opening Hours</h4>
                        <p className='text-normal font-normal'>Lorem Ipsum is simply dummy text of the pri</p>
                    </aside>

                </div>
                <div className='px-[18px] lg:px-[25px] py-[19px] lg:py-[52px] grid grid-cols-1 justify-center lg:justify-normal lg:flex items-top gap-[22px] text-white bg-dark rounded-[14px]'>
                    <img src={location} className='h-[86px] w-auto mx-auto lg:mx-0' alt="" />
                    <aside>
                        <h4 className='heading-4 font-bold mb-[6px] lg:mb-[15px]'>Visit our location</h4>
                        <p className='text-normal font-normal'>Brooklyn, NY 10036, United States</p>
                    </aside>

                </div>
                <div className='px-[18px] lg:px-[25px] py-[19px] lg:py-[52px] grid grid-cols-1 justify-center lg:justify-normal lg:flex items-top gap-[22px] text-white bg-gradient-to-r from-secondary to-primary rounded-[14px]'>
                    <img src={phone} className='h-[86px] w-auto mx-auto lg:mx-0' alt="" />
                    <aside>
                        <h4 className='heading-4 font-bold mb-[6px] lg:mb-[15px]'>Contact us now</h4>
                        <p className='text-normal font-normal'>+000 123 456789</p>
                    </aside>

                </div>
            </div>

        </header>
    );
};

export default Header;