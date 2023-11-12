import React, { useState } from 'react';
import './SignupModal.css'; 

function SignupModal({ isVisible, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    role: 'CLIENT', // Default to CLIENT
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here
    // This would include validation and sending data to your backend
  };

  if (!isVisible) return null;

  return (
    <div className="signup-modal-backdrop" onClick={onClose}>
      <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="*FIRST NAME" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="*LAST NAME" required onChange={handleChange} />
          <input type="text" name="email" placeholder="*EMAIL" required onChange={handleChange} />
          <input type="text" name="password" placeholder="*PASSWORD" required onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="*PHONE NUMBER" required onChange={handleChange} />
          <input type="text" name="streetAddress" placeholder="*STREET ADDRESS" required onChange={handleChange} />
          <input type="text" name="city" placeholder="*CITY" required onChange={handleChange} />
          <input type="text" name="state" placeholder="*STATE" required onChange={handleChange} />
          <input type="text" name="zipCode" placeholder="*ZIP CODE" required onChange={handleChange} />
          
          <select name="role" required onChange={handleChange}>
            <option value="CLIENT">Client</option>
            <option value="COACH">Coach</option>
          </select>
          
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;
