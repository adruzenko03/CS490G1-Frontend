import React from 'react';
import './Navbar.css';
import Footer from './Footer';
import { Link } from "react-router-dom"

function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <div className="navbar">
      <div className="links">
        <Link to='./'>TRU-FIT</Link>
        <Link to='/Workouts'>WORKOUTS</Link>
        <Link to='Coaches'>COACHES</Link>
      </div>
      <Footer onLoginClick={onLoginClick} onSignupClick={onSignupClick}/>
    </div>
  );
}

export default Navbar;
