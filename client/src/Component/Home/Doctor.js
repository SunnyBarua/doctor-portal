import React from 'react';
import img from '../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center ">
       <img style={{height:'300px',width:'300px'}} className="img-fluid mb-3" src={`http://localhost:4500/${doctor.image}`} alt=""/>
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary doctor_mail_icon" icon={faMailBulk}/> 
            {doctor.email}</p>
        </div>
    );
};

export default Doctor;