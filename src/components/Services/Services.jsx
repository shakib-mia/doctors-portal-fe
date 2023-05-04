import React from 'react';
import fluoride from './../../assets/icons/fluoride.webp'
import cavity from './../../assets/icons/cavity.webp'
import whitening from './../../assets/icons/whitening.webp'
import treatment from './../../assets/images/treatment.webp'

const Services = () => {
    const services = [
        {
            image: fluoride,
            heading: 'Fluoride Treatment',
            paragraph: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: cavity,
            heading: 'Cavity Filling',
            paragraph: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            image: whitening,
            heading: 'Teeth Whitening',
            paragraph: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]

    return (
        <>
            <div className='mt-[82px] lg:mt-[131px] px-[26px] mb-[56px] lg:mb-[154px]'>
                <h4 className='heading-4 text-secondary font-bold text-center mb-[7px]'>OUR SERVICES</h4>
                <h2 className='text-heading-2 text-center'>Services We Provide</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-[70px] gap-[56px] lg:gap-[34px] flex-col lg:flex-row">
                    {
                        services.map(({ image, heading, paragraph }, key) => <div key={key} className='p-[56px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[18px]'>
                            <img src={image} className='w-auto h-[115px] mx-auto' alt="" />
                            <h4 className='text-heading-4 font-semibold text-center mt-[38px] lg:mt-[34px]'>{heading}</h4>
                            <p className='text-normal text-center'>{paragraph}</p>
                        </div>)
                    }

                </div>
            </div>
            <div className="flex justify-center mb-[70px] lg:mb-[169px] px-[27px] lg:px-[175px]">
                <div className='mb-[56px] lg:mb-[154px] flex flex-col lg:flex-row items-center justify-center gap-[37px] lg:gap-[102px]'>
                    <div className="w-10/12 lg:w-1/2">
                        <img src={treatment} className='w-full' alt="treatment" />
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className='text-heading-1 font-bold lg:mb-[26px]'>Exceptional Dental Care, on Your Terms</h1>
                        <p className='text-normal mb-[28px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <a href="javascript.void(0)" className=' btn gradient'>GET STARTED</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;