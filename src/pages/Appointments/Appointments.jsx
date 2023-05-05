import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constants';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
// import Card from '../../components/Card/Card';

const Appointments = () => {

    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }

        axios.get(url + 'appointments', config).then(res => {
            setAppointments(res.data)
            console.log(res.data);
        })
    }, [])
    return (
        <div className='p-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* appointments : {appointments.length} */}
            {appointments.map((props) => <AppointmentCard {...props} />)}
        </div>
    );
};

export default Appointments;