import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Footer from "./Footer";

function Navbar({ onLoginClick, onSignupClick, userRole }) {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink id="navlogo" to="/" activeclassname="active">
          TRU-FIT
        </NavLink>
        <NavLink to="/Workouts" activeclassname="active">
          WORKOUTS
        </NavLink>
        <NavLink to="/Coaches" activeclassname="active">
          COACHES
        </NavLink>
      </div>

      <Footer
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
        userRole={userRole}
      />
    </div>
  );
}

export default Navbar;
