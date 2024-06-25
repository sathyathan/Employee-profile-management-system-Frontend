import React, { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Admindashboard from './Pages/Admindashboard';
import CreateEmployee from './Components/CreateEmployee';
import GetEmployee from './Components/GetEmployee';


  const App = () => {
  
    return (
    <div>
      <BrowserRouter>
    
      <Routes>
      <Route path='/'element={<Admindashboard/>}/>
      <Route path='/Register'element={<Register/>}/>
      <Route path='/Login'element={<Login />}/>
      <Route path='/LandingPage'element={<LandingPage/>}/>
  
      </Routes>
      </BrowserRouter>
      <CreateEmployee/>
      <GetEmployee/>
    </div>
  );
};

export default App;