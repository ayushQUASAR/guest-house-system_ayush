import React, { createContext, useContext, useState, useEffect }  from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css";
import HomeHeader from "../Homeheader";
import { FormProvider, FormContext } from '../ContextHooks/FormContext';
import BookingComponent1 from "../BOOKING1/BookingComponent1";
import { useUserContext } from "../ContextHooks/UserContext";
import Booking from "./BookingDetails";

import BookingPopup from "./BookingPopup";

const Container = () => {
const [isFirstPage, setIsFirstPage] = useState(true);
const [bookingDetailsData, setBookingDetailsData] = useState(null);
const [userDetails, setUserDetails] = useState(null);
const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const { formData } = useContext(FormContext);
  const {userId} = useUserContext();
  // console.log(userId);
  
  // on initial render Person Booking Details gets saved
  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
.then((res) => res.json())
.then((data) => setUserDetails({...formData, PersonName: data.userDetails.name, PersonEmail : data.userDetails.email, PersonPhone: data.userDetails.phone, PersonAddress: data.userDetails.address }))
.catch((err) => console.log(err.message));
  }, [formData])


  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log(userDetails);

    
  
    // Perform submission with formData
    // fetch("https://guest-house-back.onrender.com/booking/register", {
  fetch(`${import.meta.env.VITE_API_URL}/booking/register`, {
method: "POST",
mode: "cors",
body: JSON.stringify(userDetails),
headers: {
"Content-Type": "application/json"
}})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err.message));

window.alert("Booking done")
  };

  const handleBackPage = () =>  {
    setIsFirstPage(true);
  }

  const handleBookNowClick = (data) => {
   setBookingDetailsData(data);
    setIsFirstPage(false);
  }
  return (
    <>
    {/* <HomeHeader/> */}
    {isFirstPage ? <BookingComponent1 onBookNowClick={handleBookNowClick}/> :
     <div className="MainContainer">
      <div >
        <div >
            <Booking onBackPage={handleBackPage} bookingDetails={bookingDetailsData} />
        </div>
        <div className="heading">
          <h1>ENTER DETAILS OF THE VISITOR</h1>
        </div>
        <div className="bookingForm">
            <BookingForm startDate={bookingDetailsData.startDate} endDate={bookingDetailsData.endDate} />
        </div>
      </div>
      <div className="button-container">
            <button type="submit" className="btn btn-primary btn-lg " onClick={handleSubmit}>Submit</button>
      </div>
    </div>}
    <BookingPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Container;