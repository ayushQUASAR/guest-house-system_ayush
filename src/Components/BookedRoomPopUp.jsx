// BookingDetailsPopup.js
import React from "react";
import { format } from "date-fns";
import "../style/BookedRoomPopUp.css";

function BookedRoomPopUp({ details, onClose }) {
  const formattedCheckInDate = format(new Date(details.checkInDate), "MMM do yyyy");
  const formattedCheckOutDate = format(new Date(details.checkOutDate), "MMM do yyyy");

  return (
    <div className="popUpBackground">
      <div className="popUpContent">
        <h2>BOOKING DETAILS</h2>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Check-in Date: {formattedCheckInDate}</p>
        <p>Check-out Date: {formattedCheckOutDate}</p>
        <button className="btn btn-primary btn-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default BookedRoomPopUp;
