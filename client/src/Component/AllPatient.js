import React, { useEffect, useState } from 'react'
import Sidebar from './Dashboard/SideBar'
import Patient from './Patient'

const AllPatient = () => {
    const [allPatients,setAllPatients]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/allpatients")
        .then((res)=>res.json())
        .then(data=>setAllPatients(data.appointments))

    },[])
    console.log("I am from client ",allPatients)
    return (
        <div className="container-fluid row dashboard">
            <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-5">
                <h1 className="text-center textAlign:center">Patient Information</h1>
                <table className="table table-borderless">
                  
                  <thead>
                      <tr>
                      <th className="text-secondary text-left" scope="col">Sr No</th>
                      <th className="text-secondary" scope="col">Name</th>
                      <th className="text-secondary" scope="col">Gender</th>
                      <th className="text-secondary" scope="col">Age</th>
                      <th className="text-secondary" scope="col">Weight</th>
                      <th className="text-secondary" scope="col">Phone</th>
                      <th className="text-secondary" scope="col">Email</th>
                      </tr>
                  </thead>
                  {allPatients.map((patient,index)=>(
                <Patient key={patient._id} sr={index} patient={patient}/>
               
            ))}

                  
              </table>
              
                </div>
            
        </div>
    )
}

export default AllPatient
