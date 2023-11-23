import React from 'react';
import '../styles/Footer.css';

import { NavLink } from "react-router-dom";

function Footer({ onLoginClick, onSignupClick, userRole }) {
  // Conditionally render footer content based on userRole
  const renderFooterContent = () => {
    if (userRole === 'COACH') {
      return (
        <>
          {/* <NavLink activeclassname="active" to="/MyWorkout">My Workout</NavLink >
          <NavLink activeclassname="active" to="/Activity">Activity</NavLink>
          <NavLink activeclassname="active" to="/Progress">Progress</NavLink> */}
          <div>My Clients</div>
          <div>My Workout</div>
          <div>My Coach</div>
          <div>Activity</div>
          <div>Progress</div>
          <div>Settings</div>
        </>
      );
    } else if (userRole === 'CLIENT') {
      return (
        <>
          {/* <NavLink activeclassname="active" to="/MyWorkout">My Workout</NavLink>
          <NavLink activeclassname="active" to="/Activity">Activity</NavLink>
          <NavLink activeclassname="active" to="/Progress">Progress</NavLink>  */}
          <div>My Coach</div>
          <div>Activity</div>
          <div>Progress</div>
          <div>Settings</div>
        </>
      );
    } else {
      return (
        <>
          <div className="login" onClick={onLoginClick}>LOGIN</div>
          <div className="signup" onClick={onSignupClick}>SIGNUP</div>
        </>
      );
    }
  };

  return (
    <div className="footer">
      <NavLink activeclassname="active" to="/MyWorkout">
        My Workout
      </NavLink>
      <NavLink activeclassname="active" to="/Activity">
        Activity
      </NavLink>
      <NavLink activeclassname="active" to="/Progress">
        Progress
      </NavLink>
      {renderFooterContent()}
    </div>
  );
}

export default Footer;
