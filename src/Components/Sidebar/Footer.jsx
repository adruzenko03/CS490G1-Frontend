import React from "react";
import "./styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer({ onLoginClick, onSignupClick, userRole }) {
  // Conditionally render footer content based on userRole
  const renderFooterContent = () => {
    if (userRole === "coach") {
      return (
        <>
          <NavLink activeclassname="active" to="/MyWorkout">
            My Workout
          </NavLink>
          <NavLink activeclassname="active" to="/Activity">
            Activity
          </NavLink>
          <NavLink activeclassname="active" to="/Progress">
            Progress
          </NavLink>
          <div>My Clients</div>
          <div>My Coach</div>
          <div>Settings</div>
        </>
      );
    } else if (userRole === "client") {
      return (
        <>
          <NavLink activeclassname="active" to="/MyWorkout">
            My Workout
          </NavLink>
          <NavLink activeclassname="active" to="/Activity">
            Activity
          </NavLink>
          <NavLink activeclassname="active" to="/Progress">
            Progress
          </NavLink>
          <div>My Coach</div>
          <div>Settings</div>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <NavLink activeclassname="active" to="/MyWorkout">
            My Workout
          </NavLink>
          <NavLink activeclassname="active" to="/Activity">
            Activity
          </NavLink>
          <NavLink activeclassname="active" to="/Progress">
            Progress
          </NavLink>
          <div className="login" onClick={onLoginClick}>
            LOGIN
          </div>
          <div className="signup" onClick={onSignupClick}>
            SIGNUP
          </div>
        </>
      );
    }
  };

  return <div className="footer">{renderFooterContent()}</div>;
}

export default Footer;
