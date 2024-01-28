import React, { useState, useEffect } from 'react';
import './BookingPopup.css';
import sucessIcon from "../../images/check2.png"
import { NavLink } from 'react-router-dom';
const BookingPopup = ({ isOpen, onClose, isAdmin }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
  };

  // const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/check-session`, {
  //     method: 'GET',
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.loggedIn) {
  //         setIsAdmin(data.isAdmin);
  //       }
  //     });
  // }, []);

  return (
    <div className="popup-overlay">
      <div className="popup" onClick={(e) => e.stopPropagation}>
        <img className="sucessIcon" src={sucessIcon} alt="Success Icon" />
        <h2 className="popup-heading">Booking sent for Admin approval</h2>
        {!isAdmin && (
          <>
            <p className="popup-para">Please wait for your Approval from Institute.</p>
            <NavLink to="/UserDetails">
              <button className="btn btn-primary btn-sm popupClose" onClick={onClose}>
                Close
              </button>
            </NavLink>
          </>
        )}
        {isAdmin && (
            <>
              <p className="popup-para">Kindly approve this booking from Approve Booking tab.</p>
              <NavLink to="/Dashboard">
                <button className="btn btn-primary btn-sm popupClose" onClick={onClose}>
                  Close
                </button>
              </NavLink>
            </>
          )}
      </div>
    </div>
  );
};

export default BookingPopup;
