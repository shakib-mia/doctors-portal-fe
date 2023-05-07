import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constants';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import Calendar from 'react-calendar';
import chair from './../../assets/images/chair.webp'
import Modal from '../../components/Modal/Modal';
import bg from './../../assets/images/appointment-page-bg.webp'

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);
    // const [date, setDate] = useState(new Date())
    const [userData, setUserData] = useState({})
    const [date, setDate] = useState(new Date())
    const [details, setDetails] = useState(-1)

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const fullDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token'),
                fullDate
            }
        }

        axios.get(url + 'services', config).then(res => {
            setAppointments(res.data);
            // console.log(res.data);
        })
    }, [fullDate])


    // useEffect(() => {
    //     // details === -1 ? document.body.classList.remove("overflow-hidden") : document.body.classList.add("overflow-hidden")
    //     if (details > -1) {
    //         window.scrollTo(0, 0);
    //         document.body.classList.add('overflow-hidden')
    //     } else {
    //         document.body.classList.remove('overflow-hidden')

    //     }
    // }, [details])


    useEffect(() => {
        const config = {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        axios.get(url + 'user', config)
            .then(res => setUserData(res.data))
    }, [])

    if (details >= 0) {
        // window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'
        console.log(details);
    } else {
        document.body.style.overflowY = 'auto'

    }

    return (
        <>
            <div className='flex flex-col lg:flex-row gap-[21px] px-[50px] lg:px-[160px] justify-between items-center h-screen bg-contain' style={{ backgroundImage: `url(${bg})` }}>
                <div className='w-full lg:w-1/2'>
                    <Calendar minDate={new Date()} onChange={e => setDate(e)} className='w-full lg:w-1/2 mx-auto bg-white p-[20px] shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)] rounded-[18px]' />
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src={chair} className='' alt="" />
                </div>
            </div>
            <h3 className='text-center text-secondary text-heading-3'>Available Appointments on {months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear()}</h3>
            <div className={`p-[1rem] lg:p-[5rem] ${appointments.length > 0 && 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-5`}>
                {/* appointments : {appointments.length} */}
                {Array.isArray(appointments) ?
                    appointments.length > 0 ? appointments.map((props, id) => <AppointmentCard onClick={() => setDetails(id)} key={id} {...props} />)
                        : <div className='text-center'>Loading...</div>
                    : <AppointmentCard onClick={() => setDetails(appointments.id)} _id={appointments?.id} name={appointments?.name} slots={appointments?.slots} />}
            </div>

            {details >= 0 && <Modal details={appointments[details]} userData={userData} setDetails={setDetails} date={fullDate} />}
        </>
    );
};

export default Appointments;