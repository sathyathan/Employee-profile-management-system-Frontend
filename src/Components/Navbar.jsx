import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
         <div className="container-fluid">     
        <Link to ='/'className="navbar-brand">
         Employee Profile
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-0 ms-md-3">
                <Link to="/Home" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              
              <li className="nav-item ms-0 ms-md-3">
                <Link to="/register" className="nav-link" aria-current="page">
                  Register
                </Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <Link to="/login" className="nav-link" aria-current="page">
                  Login
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;