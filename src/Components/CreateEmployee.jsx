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
        present:"true",
        absent:"false",
        location:"chennai",
        phone:"9876543210",
        dob:"1990-01-01",
        address:"chennai",
        department:"software development",
        salary:10000,
       
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