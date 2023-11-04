import React from "react";
import "./BookingDetails.css";

const BookingDetails = ({bookingDetails}) => {

  const startDate = new Date(bookingDetails.startDate);
  const endDate = new Date(bookingDetails.endDate);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedStartDate = startDate.toLocaleDateString('en-US', options);
const formattedEndDate = endDate.toLocaleDateString('en-US', options);
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
              <div className="col">{formattedStartDate}</div>
              <div className="col">{formattedEndDate}</div>
            </div>
          </div>

          <p className="card-text text">
            Total length of stay: {(endDate.getTime() - startDate.getTime())/(1000*3600*24)} days 
            <hr />
            You selected: {bookingDetails.roomsSelected} {bookingDetails.roomsSelected === 1 ? "room" : "rooms"}
          </p>
          {/* <button type="button" className="btn btn-primary changeBtn">
            Change your selection
          </button>
          <h5 className="price-heading">Your Price Summary</h5>
          <h4 className="card-header">
            Total <span className="amount float-end">Rs 1200</span>
          </h4> */}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
