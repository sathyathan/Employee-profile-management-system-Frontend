import axios from "axios";
import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[msg,setMsg]=useState('')
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={email,password};
    
    await axios.post("https://employee-profile-management-system.onrender.com/api/employee/login-employee",payload)
    .then((res)=>console.log(res.data.message))
    .catch((error)=>{
   console.log(error);
    setMsg(error.data.message);

    });
    setTimeout(()=>{
navigate("/attendance");
    },1000)

};
    return (
        
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Employee Login</strong>
            </legend>
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
              <label htmlFor="Password">Password:</label>
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
            
            <button type="submit">Login</button>
            
          </fieldset>
        </form>
        <br/>
        
        <Link to="/Back">Back</Link>
          </div>
        
    );
};

export default Login;