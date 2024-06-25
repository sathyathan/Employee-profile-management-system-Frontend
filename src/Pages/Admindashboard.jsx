import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Admindashboard = () => {
    return (
        <div>
            <Navbar/>
            <header>
            <section class="hero-section">
        <div class="container">
          <div class="row align-items-center py-4 g-5">
            <div class="col-12 col-md-6">
              <div class="text-center text-md-start">
                <h1 class="display-md-2 display-4 fw-bold text-dark pb-2">
                  <span class="tts">Employee</span><span class="ttc">Profile Management System</span> 
              
                </h1>
                <p class="lead">
                  Employee Profile Management System contains different type of employees attendance and leave applications schedule should be maintained
                </p>
                <button class="btn butn fw-bold px-5 py-3 mt-3 fs-5">
                  Discover Now
                </button>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img
                src="https://thumbs.dreamstime.com/b/isometric-business-office-team-corporate-teamwork-meeting-employee-workplace-people-work-d-vector-illustration-career-strategy-148009201.jpg"
                alt="employee"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
            
            

            
   </div> 
   
    );
};

export default Admindashboard;