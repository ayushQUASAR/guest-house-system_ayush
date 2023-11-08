// Container.js

import React, { useContext, useState, useEffect } from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css";
import HomeHeader from "../Homeheader";
import { FormProvider, FormContext } from '../ContextHooks/FormContext';
import BookingComponent1 from "../BOOKING1/BookingComponent1";
import { useUserContext } from "../ContextHooks/UserContext";
import BookingPopup from "./BookingPopup";
import { NavLink } from "react-router-dom";
import Booking from "./BookingDetails";

const Container = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dateDetails, setDateDetails] = useState(null);
  const [isFormValid, setFormValid] = useState(false); // Form validation state

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const { formData } = useContext(FormContext);
  const { userId } = useUserContext();

  // on initial render, Person Booking Details get saved
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
      .then((res) => res.json())
      .then((data) =>
        setUserDetails({
          ...formData,
          PersonName: data.userDetails.name,
          PersonEmail: data.userDetails.email,
          PersonPhone: data.userDetails.phone,
          PersonAddress: data.userDetails.address,
        })
      )
      .catch((err) => console.log(err.message));
  }, [formData]);

  const handleDateDetails = (data) => {
    setDateDetails(data);
  };

  const handleFormValidChange = (valid) => {
    setFormValid(valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (!isFormValid) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    console.log(userDetails);

    // console.log(userDetails);

    // Perform submission with formData
    fetch(`${import.meta.env.VITE_API_URL}/booking/register`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));

    openPopup();
  };

  return (
    <>
      <div className="MainContainer">
        <div>
          <div>
            <Booking setDateDetails={handleDateDetails} />
          </div>
          <div className="heading">
            <h1>ENTER DETAILS OF THE VISITOR</h1>
          </div>
          <div className="bookingForm">
            {dateDetails && (
              <BookingForm
                formData={formData} // Pass the formData prop here
                startDate={dateDetails.startDate}
                endDate={dateDetails.endDate}
                onFormValidChange={handleFormValidChange}
              />
            )}
            {!dateDetails && (
              <BookingForm formData={formData} onFormValidChange={handleFormValidChange} />
            )}
          </div>
        </div>

        <div className="button-container">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={handleSubmit}
            disabled={!isFormValid} // Disable the button if the form is not valid
          >
            Submit
          </button>
        </div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};
export default Container;