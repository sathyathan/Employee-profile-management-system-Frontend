import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";



const Register = () => {
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const[designation,setDesignation]=useState('')
    const[role,setRole]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[msg,setMsg]=useState('')
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={firstname,lastname,designation,role,email,password};
    
    await axios.post("https://employee-profile-management-system.onrender.com/api/employee/register-employee",payload)
    .then((res)=>setMsg(res.data.message))
    .catch((error)=>{
   console.log(error);
    setMsg(error.data.message);

    });
    setTimeout(()=>{
navigate("/login");
    },1000)

};
    return (
            <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <strong>Employee Registration</strong>
          </legend>
          <p>
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter Your First Name"
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Your last Name"
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Enter Your designation"
              required
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Enter Your role"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail Id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          
          <button type="submit">Register</button>
          
          
        </fieldset>
      </form>
    
        
    
        </div>
    );
};

export default Register;