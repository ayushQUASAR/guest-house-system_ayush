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
import { NavLink, Navigate, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import Booking from "./BookingDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Container = ({ isAdmin, adminId }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [adminDetails, setAdminDetails] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [dateDetails, setDateDetails] = useState(null);
  const [isFormValid, setFormValid] = useState(false); // Form validation state

  const navigate = useNavigate();

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    
    setPopupOpen(false);

  };
  const { formData } = useContext(FormContext);
  const { userId } = useUserContext();
  useEffect(() => {
    console.log("admin Id in container.jsx", adminId);
    console.log("user id from user context: ", userId);
  }, []);



  // on initial render, Person Booking Details get saved
  useEffect(() => {
    let URL = isAdmin ? `${import.meta.env.VITE_API_URL}/login/admin/${userId}` : `${import.meta.env.VITE_API_URL}/users/${userId}`;
    if (formData) {
      fetch(`${URL}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (isAdmin) {
            setAdminDetails({
              ...formData,
              isAdmin: true,
              AdminEmail: data[0].email
            })
          }
          else if (!isAdmin) {
            let registerOptionSpecificFields = {};
            if (data.userDetails) {
              const details = data.userDetails;
              registerOptionSpecificFields = {
                isStudent: details.registerOption === 2,
                PersonDept: JSON.parse(details.isNitUser) ? details.nitUserDept : ""
              }
            }

            setUserDetails({
              ...formData,
              isAdmin: false,
              ...registerOptionSpecificFields,
              PersonID: data.userDetails.idProof.data,
              PersonName: data.userDetails.name,
              PersonEmail: data.userDetails.email,
              PersonPhone: data.userDetails.phone,
              PersonAddress: data.userDetails.address,
            })
          }
        })
        .catch((err) => console.log(err.message));
    }

  }, [formData]);

  const handleDateDetails = (data) => {
    setDateDetails(data);
  };

  const handleFormValidChange = (valid) => {
    setFormValid(valid);
  };


  console.log("body details: ", userDetails);
  console.log("admin details: ", adminDetails)

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form before submitting
    if (!isFormValid) {
      toast.error("Please fill in all required fields before submitting.",toastStyle);
      return;
    }
    console.log("blah blah");
    console.log(userDetails);

    // console.log(userDetails);
    if (isAdmin) {
      console.log(adminDetails);
    }

    const bodyDetails = isAdmin ? adminDetails : userDetails;

    // Perform submission with formData
    fetch(`${import.meta.env.VITE_API_URL}/booking/register`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(bodyDetails),
      headers: {
        "Content-Type": "application/json",
      },
     })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
      navigate('/login');
    openPopup();

  };

  return (
    <>
      <div className="MainContainer">
        <div className="Bookingdetails-wrapper">
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

      <BookingPopup isAdmin={isAdmin} isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};
export default Container;