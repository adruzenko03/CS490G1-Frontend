import React from 'react';
import './styles/Footer.css';
import { Link } from "react-router-dom";

function Footer({ onLoginClick, onSignupClick, userRole }) {
  // Conditionally render footer content based on userRole
  const renderFooterContent = () => {
    if (userRole === 'coach') {
      return (
        <>
          {/* <Link to="/MyWorkout">My Workout</Link>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link> */}
          <div>My Clients</div>
          <Link to="/MyWorkout">My Workout</Link>
          <div>My Coach</div>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link>
          <Link to="/Settings">Settings</Link>
        </>
      );
    } else if (userRole === 'client') {
      return (
        <>
          {/* <Link to="/MyWorkout">My Workout</Link>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link> <div>My Coach</div> */}
          <Link to="/MyWorkout">My Workout</Link>
          <div>My Coach</div>
          <Link to="/Activity">Activity</Link>
          <Link to="/Progress">Progress</Link>
          <Link to="/Settings">Settings</Link>
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
      {renderFooterContent()}
    </div>
  );
}

export default Footer;
