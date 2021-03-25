import React from 'react'


const Patient = ({patient,sr}) => {
 
    return (
  
            <tbody>       
                    <tr>
                        <td>{sr+1}</td>
                        <td>{patient.name}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.weight}KG</td>
                        <td>{patient.phone}</td>
                        <td>{patient.email}</td>
                    </tr>
                 
            </tbody>
  
    )
}

export default Patient
