import React from 'react';

const ConfirmationModal = ({ setModal, onClick }) => {
    return (
        <div className='fixed h-screen w-screen hidden lg:flex items-end lg:items-center justify-center bg-[rgba(0,0,0,0.5)] top-0 left-0 z-50 overflow-hidden'>
            <div className='bg-white w-2/5 h-auto rounded-lg py-5'>
                <h2 className='text-heading-2 text-center font-medium'>Are you sure you want to cancel the appointment?</h2>

                <div className="flex justify-center gap-6 mt-10">
                    <button className='rounded-lg bg-dark-300 px-6 py-3' onClick={() => setModal(false)}>Cancel</button>
                    <button className='rounded-lg bg-[#9e0c0ccb] px-6 py-3 text-white' onClick={onClick}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;