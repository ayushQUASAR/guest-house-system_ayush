// BookingDetails.js

import React from "react";
import "./BookingDetails.css";
import { NavLink } from "react-router-dom";
import BookingComponent1 from "../BOOKING1/BookingComponent1"

const inputStyle = {
  backgroundColor: "#f8f9fa", // Light gray background
  color: "black", // Text color
  fontWeight: 500, // Bold text
};

const BookingDetails = ({ bookingDetails, onBackPage }) => {
  const startDate = new Date(bookingDetails.startDate);
  const endDate = new Date(bookingDetails.endDate);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedStartDate = startDate.toLocaleDateString("en-US", options);
  const formattedEndDate = endDate.toLocaleDateString("en-US", options);
  const durationOfStay = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);

  const handleButtonClick = () => {

  };
  return (
    <div className="navbar">
      <div className="form-group ">
        <label className="booking-label" htmlFor="checkin">CHECK IN</label>
        <input
          type="text"
          className="form-control inputs"
          style={inputStyle}
          id="checkin"
          placeholder="Check In"
          value={formattedStartDate}
          readOnly
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="checkout">CHECK OUT</label>
        <input
          type="text"
          className="form-control inputs"
          style={inputStyle}
          id="checkout"
          placeholder="Check Out"
          value={formattedEndDate}
          readOnly
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="stayduration">DURATION OF STAY</label>
        <input
          type="text"
          className="form-control inputs"
          style={inputStyle}
          id="stayduration"
          placeholder="Duration of Stay"
          value={`${durationOfStay} days`}
          readOnly
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="roomselected">ROOMS SELECTED</label>
        <input
          type="text"
          className="form-control inputs"
          style={inputStyle}
          id="rooms"
          placeholder="Rooms Selected"
          value={`${bookingDetails.roomsSelected} ${bookingDetails.roomsSelected === 1 ? "room" : "rooms"}`}
          readOnly
        />
      </div>
        <button type="button" className="btn btn-warning btn-lg changeSelection" onClick={onBackPage}>
          Change Selection
        </button>
    </div>
  );
};

export default BookingDetails;
