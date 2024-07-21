import axios from "axios";
import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

const Location = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[location,setLocation]=useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const[msg,setMsg]=useState('')
    const navigate=useNavigate();
    const handleChange = (event) => {
      setLocation(event.target.value);
     };
    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={email,password,location};
     console.log(payload);
    
    await axios.post("http://localhost:5000/api/employee/location-employee",payload)
  .then((res)=>console.log(res.data.message))
  
  .catch((error)=>{
   console.log(error);
    setMsg(error.data.message);

    });
    setTimeout(()=>{
      navigate("/account");
          },1000)
      
    
};
    return (
        
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Employee Location
              </strong>
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
          id="chennai"
          name="location"
          value="chennai"
          checked={location === 'chennai'}
          onChange={handleChange}
        />
        <label htmlFor="chennai">Chennai</label>
        <br />
        <input
          type="radio"
          id="madurai"
          name="location"
          value="madurai"
          checked={location === 'madurai'}
          onChange={handleChange}
        />
        <label htmlFor="madurai">Madurai</label>
        <br />
        <input
          type="radio"
          id="trichy"
          name="location"
          value="trichy"
          checked={location === 'trichy'}
          onChange={handleChange}
        />
        <label htmlFor="trichy">Trichy</label>
        <br />
    
        <input
          type="radio"
          id="covai"
          name="location"
          value="covai"
          checked={location === 'covai'}
          onChange={handleChange}
/>
        <label htmlFor="covai">Covai</label>
        <br /><br />

        <button type="submit">Submit</button>
        </fieldset>
        </form>
        <br/>
        
        
          </div>
        
    );
};

export default Location;