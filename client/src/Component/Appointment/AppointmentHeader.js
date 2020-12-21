import React from 'react'
import chair from "../../images/chair.png"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
    
    return (
      <main
        style={{ height: "500px" ,marginBottom:"40px" }}
        className="row d-flex align-items-center appointment-container"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#fff" }}>Appointment</h1>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-6">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </main>
    );
}

export default AppointmentHeader
