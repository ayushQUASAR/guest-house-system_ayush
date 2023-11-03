import React from 'react';
import './Popup.css';
import sucessIcon from "./check.png"
const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
     
        <img className='sucessIcon' src={sucessIcon} alt='Success Icon'/>
        <h2>Registration Successful</h2>
        <p>Your registration has been successfully completed.</p>
        <button className="btn btn-primary btn-lg rounded" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
