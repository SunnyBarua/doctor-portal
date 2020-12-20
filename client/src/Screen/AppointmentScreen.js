import React, { useState } from 'react'
import AppointmentHeader from '../Component/Appointment/AppointmentHeader'
import BookAppointment from '../Component/Appointment/BookAppointment'
import Footer from '../Component/Shared/Footer'
import NavBar from '../Component/Shared/NavBar'

const AppointmentScreen = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    return (
        <div>
            <NavBar/>
            <AppointmentHeader handleDateChange={handleDateChange} />
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    )
}

export default AppointmentScreen
