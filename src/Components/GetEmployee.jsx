import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetEmployee = () => {
    const [getcallData, setgetcallData] = useState([]);
    const [getcallMsg, setgetcallMsg] = useState("");
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      await axios
        .get("https://employee-profile-management-system.onrender.com/api/employee/getallemployee")
        .then((res) => {
          setgetcallData(res.data.result);
          setgetcallMsg(res.data.message);
        })
        .catch((err) => console.log(err));
    };
  
    return (
        <div>
            <h1>{getcallMsg}</h1>
      {getcallData.map((ele, index) => {
        return (
          <div key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{ele._id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.firstName}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.lastName}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.designation}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.role}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.email}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.password}
                </h6>
              
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.present}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.location}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.account}
                </h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.Emptype}
                </h6>
                
                
                
                
                
                

              </div>
            </div>
          </div>
        );
      })}
        </div>
    );
};

export default GetEmployee;