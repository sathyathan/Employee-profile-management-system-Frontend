import axios from "axios";
import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

const Account = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[account,setAccount]=useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const[msg,setMsg]=useState('')
    const navigate=useNavigate();
    const handleChange = (event) => {
      setAccount(event.target.value);
     };
    const handleSubmit=async(e)=>{
     e.preventDefault();
     const payload={email,password,account};
     console.log(payload);
    
    await axios.post("http://localhost:5000/api/employee/account-employee",payload)
  .then((res)=>console.log(res.data.message))
  
  .catch((error)=>{
   console.log(error);
    setMsg(error.data.message);

    });
    setTimeout(()=>{
      navigate("/Emptype");
          },1000)
      
    
};
    return (
        
        <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              <strong>Employee Account
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
          id="saving"
          name="account"
          value="saving"
          checked={account=== 'saving'}
          onChange={handleChange}
        />
        <label htmlFor="saving">Saving</label>
        <br />
        <input
          type="radio"
          id="current"
          name="Account"
          value="current"
          checked={account === 'current'}
          onChange={handleChange}
/>
        <label htmlFor="current">Current</label>
        <br /><br />

        <button type="submit">Submit</button>
      

            
             
          </fieldset>
        </form>
        <br/>
        
        
          </div>
        
    );
};

export default Account;