import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

function AppointmentForm({ modalIsOpen, closeModal,appointmentOn ,date}) {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {
        console.log("I am from client ",data)
        data.service = appointmentOn;
        data.date=date;
        console.log(data.date)
        data.created=new Date()
        fetch("http://localhost:4500/addAppointment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            
        })
            .then(res => res.json())
            .then(success => {
                if(success){
                    closeModal();
                    alert("Appointment created successfully")
            }
        })  
    }
     
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center">ON { date.toDateString()}</p>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-3">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group  pt-3">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group  pt-3">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row  pt-3">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4 ">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right pt-3">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
        </Modal>
      </div>
    );
}

export default AppointmentForm
