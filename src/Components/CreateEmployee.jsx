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
        firstname:"sathya",
        lastname:"Thangavel",
        designation:"Developer",
        role:"Employee",
        email:"sathya@gmail.com",
        password:"12345",
        present:"true",
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