import React from 'react';
import './Modal.css';
import { useState } from 'react';

function LoginModal({ isVisible, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    try { 
      const response = await fetch('https://localhost:3000/login' , {//TEST USING POSTMAN
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if( response.ok) {
          onLoginSuccess(data);
          onClose();
        } else{
          setError(data.message || 'Login Failed');
        }
      }
      catch (err){
        setError('Network Error');
      } 
    };


  if (!isVisible) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">EMAIL:</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button type="submit">LOGIN</button>
          {error && <div className='error'>{error}</div>}
          <button type="button" onClick={onClose}>BACK</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
