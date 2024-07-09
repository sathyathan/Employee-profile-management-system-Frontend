import axios from "axios";
import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

const Attendance = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[present,setPresent]=useState('')
    const [selectedValue, setSelectedValue] = useState('');
      
    

    const[msg,setMsg]=useState('')
    const navigate=useNavigate();
    const handleChange = (event) => {
      setPresent(event.target.value);
     };
    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={email,password,present};
     console.log(payload);
    
    await axios.post("https://employee-profile-management-system.onrender.com/api/employee/attendance-employee",payload)
  .then((res)=>console.log(res.data.message))
  setMsg(res.data.message)
  .catch((error)=>{
   console.log(error);
    setMsg(error.data.message);

    });
    setTimeout(()=>{
navigate("/landingpage");
    },1000)

};
    return (
        
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Employee Attendance</strong>
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
            
        <input
          type="radio"
          id="present"
          name="attendance"
          value="present"
          checked={present === 'present'}
          onChange={handleChange}
        />
        <label htmlFor="present">Present</label>
        <br />
        <input
          type="radio"
          id="absent"
          name="attendance"
          value="absent"
          checked={present === 'absent'}
          onChange={handleChange}
/>
        <label htmlFor="absent">Absent</label>
        <br /><br />

        <button type="submit">Submit</button>
      

            
             
          </fieldset>
        </form>
        <br/>
        
        
          </div>
        
    );
};

export default Attendance;