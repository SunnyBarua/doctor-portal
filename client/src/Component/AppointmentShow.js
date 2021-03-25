import React from 'react'

const AppointmentShow = ({appointmentInfo,sr}) => {
    return (
        
             <tbody>       
                    <tr>
                        
                        <td>{appointmentInfo.service}</td>
                        <td>{appointmentInfo.date.toString()}</td>
                        <td>{appointmentInfo.name}</td>
                        <td>{appointmentInfo.gender}</td>
                        
                        <td>{appointmentInfo.phone}</td>
                        <td>{appointmentInfo.email}</td>
                    </tr>
                 
            </tbody>
       
    )
}

export default AppointmentShow
