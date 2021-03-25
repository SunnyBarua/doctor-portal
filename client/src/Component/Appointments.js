import React, { useEffect, useState } from 'react'
import AppointmentShow from './AppointmentShow'
import Sidebar from './Dashboard/SideBar'

const Appointments = () => {
    const [appointment,setAppointment]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/appointments")
        .then((res)=>res.json())
        .then(data=>setAppointment(data.appointments))

    },[])
    console.log("I am from client ",appointment)
    return (
        <section>
            <div className="container-fluid row dashboard">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-5">
                <h1 className="text-center textAlign:center">All Appointment Info</h1>
                <table className="table table-borderless">
                  
                  <thead>
                      <tr>
                      
                      <th className="text-secondary" scope="col">Service</th>
                      <th className="text-secondary" scope="col">Time</th>
                      <th className="text-secondary" scope="col">Name</th>
                      <th className="text-secondary" scope="col">Gender</th>
                      
                      <th className="text-secondary" scope="col">Phone</th>
                      <th className="text-secondary" scope="col">Email</th>
                      </tr>
                  </thead>
                  {appointment?.map((singleAppnt,index)=>(
                <AppointmentShow key={singleAppnt._id} sr={index} appointmentInfo={singleAppnt}/>
               
            ))}

                  
              </table>
                
                </div>
                
            </div>
        </section>
    )
}

export default Appointments
