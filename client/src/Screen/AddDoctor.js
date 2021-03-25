import React, { useState } from 'react'
import Sidebar from '../Component/Dashboard/SideBar'

const AddDoctor = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [file, setFile] = useState("No File Chosen");
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(file,name,email)
    const data = new FormData()
    data.append('file', file);
    data.append('name', name);
    data.append('email',email);
    setName('')
    setEmail('')
    setFile("No File Chosen")
      
      fetch('http://localhost:4500/addDoctor', {
          method: 'POST',
          body: data
      })
          .then(response => response.json())
          .then(result => {
              console.log(result)
          })
          .catch(error => {
              console.error(error)
          })
         
  }

  return (
      <section className="container-fluid row">
          <Sidebar></Sidebar>
          <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: -14, backgroundColor: "#F4FDFB" }}>
              <h5 className="text-brand">Add a Doctor</h5>
              <form  onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Name</label>
                      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input type="file" className="form-control mt-2" onChange={(e)=>setFile(e.target.files[0])}  />
                  </div>
                  <button type="submit" className="btn btn-primary mt-2" >Submit</button>
              </form>
          </div>
      </section>
  );
};

export default AddDoctor;