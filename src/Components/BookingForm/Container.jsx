/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState }  from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css";
import HomeHeader from "../Homeheader";
import { FormProvider, FormContext } from '../ContextHooks/FormContext';



const Container = () => {

  const { formData } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Perform submission with formData
  };

  return (
    <>
    <HomeHeader/>
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
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  );
};

export default Container;
