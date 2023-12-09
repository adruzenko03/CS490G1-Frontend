import { React, useState} from 'react';
import './styles/Footer.css';
import { Link } from "react-router-dom";

import homeDumbbell from '../icons/homedumbbell.png'
import activity from '../icons/activity.png'
import progress from '../icons/progress.png'

function Footer({ onLoginClick, onSignupClick, userRole }) {
  const [activeLink, setActiveLink] = useState(null);

  const toggleLink = (linkId) => {
    setActiveLink(linkId === activeLink ? null : linkId);
  };
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
        <div className="signLogButtons">
          <div className="login" onClick={onLoginClick}>LOGIN</div>
          <div className="signup" onClick={onSignupClick}>SIGNUP</div>
        </div>
        </>
      );
    }
  };

  return (
    <div className="footer">


      <Link id='myWorkout' className={activeLink === 'myWorkout' ? 'active' : ''} onClick={() => toggleLink('myWorkout')} to='/MyWorkout' >
          <img 
              src={homeDumbbell} 
              style={{ 
                width:"20px" ,marginRight: "10px"
                }}
          />
          MyWorkout
        </Link>
      <Link id='activity' className={activeLink === 'activity' ? 'active' : ''} onClick={() => toggleLink('activity')} to='/Activity' >
          <img 
              src={activity} 
              style={{ 
                width:"20px" ,marginRight: "10px"
                }}
          />
          Activity
        </Link>
      <Link id='progress' className={activeLink === 'progress' ? 'active' : ''} onClick={() => toggleLink('progress')} to='/Progress' >
          <img 
              src={progress} 
              style={{ 
                width:"20px" ,marginRight: "10px"
                }}
          />
          Progress
        </Link>

      {renderFooterContent()}
    </div>
  );
}

export default Footer;
