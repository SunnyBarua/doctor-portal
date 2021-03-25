import React, { useContext, useState } from 'react';

import { Link} from 'react-router-dom';
import LoginBg from '../../images/loginBg.png';
import NavBar from '../Shared/NavBar';

const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 
  const registerHandler=(e)=>{
    
    
    e.preventDefault()
    fetch("http://localhost:4500/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
  })
  setName('')
  setEmail('')
  setPassword('')
}
const nameChangeHandler=(e)=>{
  setName(e.target.value)
}
const emailChangeHandler=(e)=>{
  setEmail(e.target.value)
}
const passwordChangeHandler=(e)=>{
  setPassword(e.target.value)
}
  
  return (
    <>
    <NavBar/>
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          
        <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" value={name} className="form-control" onChange={nameChangeHandler}/>
          </div>

        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={email} className="form-control" onChange={emailChangeHandler}/>
          </div>
         
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" value={password} className="form-control" onChange={passwordChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-2">
            <button className="btn btn-brand" type="submit" onClick={registerHandler}>Register</button>
            <Link to="/login">Back to login...</Link>
          </div>
         
         
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" style={{height:"550px" ,marginBottom:"100px",marginLeft:"50px"}} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;