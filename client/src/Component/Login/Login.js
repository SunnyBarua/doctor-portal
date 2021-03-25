import React, { useContext, useState } from 'react';

import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../images/loginBg.png';

const Login = () => {
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  const loginHandler=(e)=>{

    e.preventDefault()

    fetch("http://localhost:4500/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
         alert(data.eroor)
        }
        else{
          console.log(data)
        localStorage.setItem("user", JSON.stringify(data.user)) 
        
       
        }
        history.push("/");
        

      
        }
      )
        
      
     
  
    }
    const emailChangeHandler=(e)=>{
      e.preventDefault()
      setEmail(e.target.value)
    }
    const passwordChangeHandler=(e)=>{
      e.preventDefault()
      setPassword(e.target.value)
    }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">

        <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" value={email} className="form-control" onChange={emailChangeHandler} />
          </div>
         
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" value={password} className="form-control" onChange={passwordChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-2">
            <button className="btn btn-brand" type="submit" onClick={loginHandler}>Login</button>
            <Link to="/register">If you don't have account click here...</Link>
          </div>
         
          
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" style={{height:"550px" ,marginBottom:"100px",marginLeft:"50px"}} />
        </div>
      </div>
    </div>
  );
};

export default Login;