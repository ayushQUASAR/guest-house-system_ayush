import React from 'react';
import './BookingPopup.css';
import sucessIcon from "./check.png"
import { NavLink } from 'react-router-dom';
const BookingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
     
        <img className='sucessIcon' src={sucessIcon} alt='Success Icon'/>

        <h2 className='popup-heading'>Booking Successful</h2>
        <p className='popup-para'>Please wait for your Approval from Institute.</p>
  
        <button className="btn btn-primary  btn-sm popupClose" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingPopup;
