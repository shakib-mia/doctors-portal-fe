import React from 'react';

const AppointmentCard = ({ _id, patientName, slots, date, name, onClick }) => {
    return (
        <div className='rounded-[18px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] py-[42px] text-center'>
            <h5 className='text-heading-4 font-semibold text-secondary mb-[9px]'>{name}</h5>
            {/* <p className="text-sm mb-[12px]">{slot}</p> */}
            <p className='text-[12px] mb-[15px]'>{slots?.length} available space</p>
            <button onClick={onClick} className='bg-gradient-to-r from-secondary to-primary px-[18px] py-[15px] rounded-[8px] text-white font-bold'>Book Appointment</button>
        </div>
    );
};

export default AppointmentCard;