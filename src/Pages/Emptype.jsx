import axios from "axios";
import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

const Emptype = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[emptype,setEmpType]=useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const[msg,setMsg]=useState('')
    const navigate=useNavigate();
    const handleChange = (event) => {
      setEmpType(event.target.value);
     };
    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={username,email,password,emptype};
     console.log(payload);
    
    await axios.post("http://localhost:5000/api/employee/emp-type",payload)
  .then((res)=>console.log(res.data.message))
  
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
              <strong>Employee Type
              </strong>
            </legend>
            <p>
              <label htmlFor="username">Username:</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
          id="intern"
          name="type"
          value="intern"
          checked={emptype=== 'intern'}
          onChange={handleChange}
        />
        <label htmlFor="intern">Intern</label>
        <br />
        <input
          type="radio"
          id="junior"
          name="Emptype"
          value="junior"
          checked={emptype === 'junior'}
          onChange={handleChange}
/>
        <label htmlFor="junior">Junior</label>
        <br />
        <input
          type="radio"
          id="senior"
          name="Emptype"
          value="senior"
          checked={emptype === 'senior'}
          onChange={handleChange}/>
        <label htmlFor="senior">Senior</label>
        <br /><br />

        <button type="submit">Submit</button>
      

            
             
          </fieldset>
        </form>
        <br/>
        
        
          </div>
        
    );
};

export default Emptype;