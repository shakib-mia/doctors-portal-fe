import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constants';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [modal, setModal] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('')

    // console.log(appointments);

    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        axios.get(url + 'bookings', config)
            .then(res => setAppointments(res.data.bookings))
    }, []);

    if (modal) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'auto'
    }


    const deleteAppointment = (id) => {

        // console.log(appointments);


        // appointments.filter

        const config = {
            headers: {
                token: localStorage.getItem('token'),
                name,
                appointmentId: id
            }
        }

        axios.delete(url + 'services/' + id, config)
            .then(res => {
                const bookedItem = res.data[0]

                bookedItem.slots = [...bookedItem.slots,]
            })
    }

    return (
        <>
            <div className='px-[36px] lg:px-[90px] py-40'>
                <h1 className='font-semibold text-heading-2 text-center'>My Appointments</h1>

                <ul className='bg-dark-300 w-1/2 mx-auto rounded-xl mt-5'>
                    <li className='flex w-10/12 py-3 text-white font-semibold'>
                        <div className='w-1/4 text-center'>Patient Name</div>
                        <div className='w-1/4 text-center'>Service</div>
                        <div className='w-1/4 text-center'>Date</div>
                        <div className='w-1/4 text-center'>Time</div>
                    </li>
                    {appointments ? appointments.map(({ _id, name, slot, fullName }, key) => <li key={key} className={`flex py-3 font-medium ${key === appointments.length - 1 && 'rounded-b-xl'} ${key % 2 === 0 ? 'bg-dark-100' : 'bg-dark-200'}`}>
                        <div className='flex w-full'>
                            <div className='w-10/12 flex'>
                                <div className='w-1/4 text-center'>{fullName}</div>
                                <div className='w-1/4 text-center'>{name}</div>
                                <div className='w-1/4 text-center'>{slot.date}</div>
                                <div className='w-1/4 text-center'>{slot.time}</div>
                            </div>
                            <div className='w-2/12 text-center'>
                                <button onClick={() => {
                                    setModal(true);
                                    // deleteAppointment(_id);
                                    setId(_id);
                                    setName(name)
                                }} className='bg-[#9e0c0ccb] text-white inline-block w-8 h-8 rounded-xl' title='Cancel Appointment'>
                                    &times;
                                </button>
                            </div>
                        </div>
                    </li>) : 'loading ...'}
                </ul>
            </div>

            {modal && <ConfirmationModal setModal={() => setModal(false)} onClick={() => deleteAppointment(id)} />}
        </>
    );
};

export default MyAppointments;