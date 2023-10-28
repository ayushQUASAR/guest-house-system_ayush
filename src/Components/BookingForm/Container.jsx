import React from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css";

const Container = () => {
  return (
    <div className="MainContainer">
      <div className="heading">
        <h1><b>REQUIRED DETAILS</b></h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          {/* <div className="bookingDetails"> */}
            <BookingDetails />
          {/* </div> */}
        </div>
        <div className="col-md-5">
          {/* <div className="bookingForm"> */}
            <BookingForm />
          {/* </div> */}
        </div>
        <div className="col-md-4">
          {/* <div className="personDetails"> */}
            <PersonDetails />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Container;
