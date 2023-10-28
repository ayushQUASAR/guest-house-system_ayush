import React from "react";
import "./BookingDetails.css";

const BookingDetails = () => {
  return (
    <div className="details-container">
      <div className="card details">
        <h4 className="card-header">Booking Details</h4>
        <div className="card-body">
          <div className="gridContainer">
            <div className="row">
              <div className="col">Check-in</div>
              <div className="col">Check-out</div>
            </div>
            <div className="row">
              <div className="col">Mon, Oct 30, 2023</div>
              <div className="col">Tue, Oct 31, 2023</div>
            </div>
          </div>

          <p className="card-text text">
            Total length of stay: 1 night
            <hr />
            You selected: 1 room
          </p>
          <button type="button" className="btn btn-primary changeBtn">
            Change your selection
          </button>
          <h5 className="price-heading">Your Price Summary</h5>
          <h4 className="card-header">
            Total <span className="amount float-end">Rs 1200</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
