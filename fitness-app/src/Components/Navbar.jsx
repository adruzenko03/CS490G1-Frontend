import React from 'react';
import './styles/Navbar.css';
import Footer from './Footer';
import { Link } from "react-router-dom"

function Navbar({ onLoginClick, onSignupClick, userRole }) {
  return (
    <div className="navbar">
      <div className="links">
        <Link id='navlogo' to='./'>TRU-FIT</Link>
        <Link to='/Workouts'>WORKOUTS</Link>
        <Link to='/Coaches'>COACHES</Link>
      </div>
      <Footer onLoginClick={onLoginClick} onSignupClick={onSignupClick} userRole={userRole}/>
    </div>
  );
}

export default Navbar;
