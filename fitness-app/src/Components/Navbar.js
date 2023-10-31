import React from 'react';
import './Navbar.css';
import Footer from '../Components/Footer';
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className='navbar-item'>HOME</div>
        <div className='navbar-item'>WORKOUTS</div>
        <div className='navbar-item'>COACHES</div>
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
