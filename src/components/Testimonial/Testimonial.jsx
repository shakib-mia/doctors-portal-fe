import React from 'react';
import quote from './../../assets/icons/quote.webp';
import person from './../../assets/images/testimonial.webp'
import Card from '../Card/Card';

const Testimonial = () => {
    const testimonials = [
        {
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person,
            name: 'Winson Harry',
            location: 'California'
        },
        {
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person,
            name: 'Winson Harry',
            location: 'California'
        },
        {
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person,
            name: 'Winson Harry',
            location: 'California'
        }
    ]

    return (
        <div className='mt-[84px]'>
            <div className="flex justify-between items-center px-[23px] lg:px-[55px]">
                <aside>
                    <h4 className='text-heading-4 text-secondary font-bold mb-[10px]'>Testimonial</h4>
                    <h2 className='text-heading-2'>What Our Patients Says</h2>
                </aside>
                <img src={quote} className='w-1/4 lg:w-1/6' alt="" />
            </div>

            <div className='my-[75px] lg:mt-[88px] lg:mb-[149px] grid grid-cols-1 lg:grid-cols-3 items-center gap-[57px] px-[23px] lg:px-[85px]'>
                {testimonials.map((props, id) => <Card key={id} {...props} />)}
            </div>
        </div>
    );
};

export default Testimonial;