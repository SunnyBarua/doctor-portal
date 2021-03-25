import React, { useEffect, useState } from 'react'
import AppointmentByDate from './AppointmentByDate'
import SideBar from './SideBar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments,setAppointments]=useState([])
    
    const handleDateChange = (date) => {    
        setSelectedDate(date)
    }
    useEffect(()=>{
      fetch("http://localhost:4500/appointmentsByDate", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({date:selectedDate}),
      })
        .then((res) => res.json())
          .then((data) => {
            console.log(data)
          setAppointments(data);
        });

    },[selectedDate])
    console.log(selectedDate)
    
    return (
        <section>
            <div className="container-fluid row dashboard">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-5 p-5">
                   
                <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5 p-5">
                    <AppointmentByDate appointments={appointments}/>
                </div>
            </div>
        </section>
    )
}

export default Dashboard