import React from 'react';
import './styles/Footer.css';
import { Link } from "react-router-dom";

function Footer({ onLoginClick, onSignupClick, userRole }) {
  // Conditionally render footer content based on userRole
  const renderFooterContent = () => {
    if (userRole === 'COACH') {
      return (
        <>
          {/* <Link to="/MyWorkout">My Workout</Link>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link> */}
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
          {/* <Link to="/MyWorkout">My Workout</Link>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link> <div>My Coach</div> */}
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
      <Link to="/MyWorkout">My Workout</Link>
      <Link to="/Activity">Activity</Link>
      <Link to="/Progress">Progress</Link>
      {renderFooterContent()}
    </div>
  );
}

export default Footer;
