import React from 'react';

const Card = ({ text, img, name, location }) => {
    return (
        <div className='px-[29px] py-[38px] rounded-[10px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]'>
            <p className=' text-normal mb-[38px]'>{text}</p>

            <div className="flex gap-[14px] items-center">
                <aside className='p-[4px] ring-secondary ring-[3px] rounded-full'>
                    <img src={img} alt="" />
                </aside>

                <aside>
                    <h4 className='font-semibold text-heading-4'>{name}</h4>
                    <p className='text-normal'>{location}</p>
                </aside>
            </div>
        </div>
    );
};

export default Card;