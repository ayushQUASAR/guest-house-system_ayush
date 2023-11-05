import React from 'react';
import './Popup.css';
import sucessIcon from "./check.png"
import { NavLink } from 'react-router-dom';
const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
     
        <img className='sucessIcon' src={sucessIcon} alt='Success Icon'/>

        <h2 className='popup-heading'>Registration Successful</h2>
        <p className='popup-para'>Your registration has been successfully completed.</p>
       
        <p>Please wait for Approval of Registration from Institute. You will be able to Login once Registration is approved.</p>
        <NavLink to="/login">
        <button className="btn btn-primary btn-lg rounded" onClick={handleClose}>Close</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Popup;
