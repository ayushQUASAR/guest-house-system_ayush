/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState }  from "react";
import BookingDetails from "./BookingDetails";
import BookingForm from "./BookingForm";
import PersonDetails from "./PersonDetails";
import "./Container.css";
import HomeHeader from "../Homeheader";
import { FormProvider, FormContext } from '../ContextHooks/FormContext';
import BookingComponent1 from "../BOOKING1/BookingComponent1";



const Container = () => {
const [isFirstPage, setIsFirstPage] = useState(true);
const [bookingDetailsData, setBookingDetailsData] = useState(null);
  const { formData } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  
    // Perform submission with formData
//     fetch("https://guest-house-back.onrender.com/booking/register", {
// method: "POST",
// mode: "cors",
// body: JSON.stringify(formData),
// headers: {
// "Content-Type": "application/json"
// }})
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err.message));
  };


  const handleBookNowClick = (data) => {
   setBookingDetailsData(data);
    setIsFirstPage(false);
  }
  return (
    <>
    <HomeHeader/>
    {isFirstPage ? <BookingComponent1 onBookNowClick={handleBookNowClick}/> :
     <div className="MainContainer">

      <div className="heading">
        <h1><b>REQUIRED DETAILS</b></h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          {/* <div className="bookingDetails"> */}
            <BookingDetails bookingDetails={bookingDetailsData} />
            {/* <BookingComponent1/> */}
          {/* </div> */}
        </div>
        <div className="col-md-5">
          {/* <div className="bookingForm"> */}
            <BookingForm startDate={bookingDetailsData.startDate} endDate={bookingDetailsData.endDate} />
          {/* </div> */}
        </div>
      </div>
      <button style={{position:"absolute", right: "25%", top: "80%"}} type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>}
    </>
  );
};

export default Container;
