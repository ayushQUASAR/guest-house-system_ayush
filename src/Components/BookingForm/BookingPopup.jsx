import React, { useState, useEffect } from 'react';
import './BookingPopup.css';
import sucessIcon from "../../images/check2.png"
import { NavLink } from 'react-router-dom';
const BookingPopup = ({ isOpen, onClose, isAdmin, isStudent }) => {
  if (!isOpen) return null;

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
    <div className="popup-overlay-booking">
      <div className="popup-booking" onClick={(e) => e.stopPropagation()}>
        <img className="sucessIcon-booking" src={sucessIcon} alt="Success Icon" />
        {!isStudent && (
          <>
        <p className="popup-para-booking">Your booking request has been submitted. Admin will allocate a room on the basis of Availability.</p>
        <NavLink to="/UserDetails">
          <button className="btn btn-primary btn-sm popupClose-booking" onClick={onClose}>
            Close
          </button>
        </NavLink>
          </>
          )
        }
        {isStudent && (
          <>
          <h2 className="popup-heading-booking">Booking sent for HOD approval</h2>
            <p className="popup-para-booking">Your request has been sent for HoD's approval. Please meet them to expedite the room allocation process. After HoD's approval admin will allocate you a room on the basis of Availability.</p>
            <NavLink to="/UserDetails">
              <button className="btn btn-primary btn-sm popupClose-booking" onClick={onClose}>
                Close
              </button>
            </NavLink>
          </>
        )}
        {isAdmin && (
            <>
              <p className="popup-para-booking">Kindly approve this booking from Approve Booking tab.</p>
              <NavLink to="/Dashboard">
                <button className="btn btn-primary btn-sm popupClose-booking" onClick={onClose}>
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
