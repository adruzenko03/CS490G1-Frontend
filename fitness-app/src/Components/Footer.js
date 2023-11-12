import React from 'react';
import './Footer.css';
function Footer({ onLoginClick, onSignupClick }) {
  return (
    <div className="footer">
      <div className="login" onClick={onLoginClick}>LOGIN</div>
      <div className="signup" onClick={onSignupClick}>SIGNUP</div>
    </div>
  );
}

export default Footer;
