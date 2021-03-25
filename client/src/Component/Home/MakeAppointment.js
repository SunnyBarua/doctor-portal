import React from 'react';
import { useHistory } from 'react-router-dom';
import doctor from '../../images/doctor.png';


const MakeAppointment = () => {
    const history=useHistory()
    const AppointmentHandler = () => {
        
        history.push("/appointment")
        window.scrollTo(0, 0);
        
    }
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5 px-5 appointment-text">
                        <h3 className="text-primary text-white" style={{fontWeight:"800"}}>Appointment</h3>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn  btn-primary" onClick={AppointmentHandler}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;