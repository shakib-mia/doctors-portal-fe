import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constants';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import Calendar from 'react-calendar';
import chair from './../../assets/images/chair.webp'

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);
    // const [date, setDate] = useState(new Date())

    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        axios.get(url + 'services', config).then(res => {
            setAppointments(res.data.services)
            console.log(res.data.services);
        })
    }, [])
    return (
        <>
            <div className='flex gap-[21px] px-[160px] justify-between items-center'>
                <div className='w-1/2'>
                    <Calendar onChange={e => console.log(e)} className='w-1/2 mx-auto bg-white p-[20px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[18px]' />
                </div>
                <div className='w-1/2'>
                    <img src={chair} className='' alt="" />
                </div>
            </div>
            <div className='p-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* appointments : {appointments.length} */}
                {Array.isArray(appointments) ? appointments.map((props, id) => <AppointmentCard key={id} {...props} />) : <AppointmentCard _id={appointments.id} name={appointments.name} slots={appointments.slots} />}
            </div>
        </>
    );
};

export default Appointments;