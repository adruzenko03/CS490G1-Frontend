import React from 'react';
import './Modal.css';

function LoginModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form>
          <label htmlFor="email">EMAIL:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">PASSWORD:</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">LOGIN</button>
          <button type="button" onClick={onClose}>CREATE AN ACCOUNT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
