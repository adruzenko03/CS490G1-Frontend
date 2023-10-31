import React from 'react';
import './Navbar.css';
import Footer from '../Components/Footer';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to='./'>HOME</Link>
        <Link to='/Workouts'>WORKOUTS</Link>
        <Link to='Coaches'>COACHES</Link>
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
