import React, { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Admindashboard from './Pages/Admindashboard';
import CreateEmployee from './Components/CreateEmployee';
import GetEmployee from './Components/GetEmployee';
import Attendance from './Pages/Attendance';
import Location from './Pages/Location';
import Account from './Pages/Account';
import Emptype from './Pages/Emptype';



  const App = () => {
  
    return (
    <div>
      <BrowserRouter>
    
      <Routes>
      <Route path='/'element={<Admindashboard/>}/>
      <Route path='/Register'element={<Register/>}/>
      <Route path='/Login'element={<Login />}/>
      <Route path='/LandingPage'element={<LandingPage/>}/>
      <Route path='/Attendance'element={<Attendance/>}/>
      <Route path='/Location'element={<Location/>}/>
      <Route path='/Account'element={<Account/>}/>
      <Route path='/Emptype'element={<Emptype/>}/>
  
      </Routes>
      </BrowserRouter>
      <CreateEmployee/>
      <GetEmployee/>
    </div>
  );
};

export default App;
