import axios from "axios";
import React, { useState } from "react";

const CreateEmployee = () => {
  const [createData, setCreateData] = useState([]);
  const [createMsg, setCreateMsg] = useState("");
  const handleSubmit = () => {
    fetchData();
  };
  const fetchData = async () => {
    const payload={
        firstname:"nehru",
        lastname:"thangavel",
        designation:"ui developer",
        role:"employee",
        email:"nehru12@gmail.com",
        password:"1256",
        attendance:"present",
        location:"chennai",
        account:"saving",
        emptype:"junior",
        
       
    };

    axios.post("https://employee-profile-management-system.onrender.com/api/employee/createemployee", payload)
    .then((res)=>{
        setCreateData(res.data.result)
        setCreateMsg(res.data.message)
    })
    .catch((err)=>console.log(err))
  };
  return (
    <div>
      <button onClick={handleSubmit}>Add Employee</button>
      <h1>{createMsg}</h1>
    </div>
  );
};

export default CreateEmployee;