/* eslint-disable no-unused-vars */
import React, {useContext, useState } from "react";
import "./BookingForm.css";
import { FormContext } from "../ContextHooks/FormContext";

const BookingForm = ({startDate, endDate}) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phNumber, setPhNumber] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [companion1, setCompanion1] = useState("");
  // const [companion2, setCompanion2] = useState("");
  // const [companion3, setCompanion3] = useState("");
  // const [arrivalDate, setArrivalDate] = useState("");
  // const [arrivalTime, setArrivalTime] = useState("");
  // const [departureDate, setDepartureDate] = useState("");
  // const [departureTime, setDepartureTime] = useState("");
  // const [purpose, setPurpose] = useState("");
  // const [visitType, setVisitType] = useState("Official");
  // const [bookingFor, setBookingFor] = useState("myself");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can access the form values here and perform any necessary actions.
  //   console.log({
  //     firstName,
  //     lastName,
  //     email,
  //     address,
  //     phNumber,
  //     designation,
  //     companion1,
  //     companion2,
  //     companion3,
  //     arrivalDate,
  //     arrivalTime,
  //     departureDate,
  //     departureTime,
  //     purpose,
  //     visitType,
  //     bookingFor,
  //   });
  // };

  const { updateFormData } = useContext(FormContext);

  const handleInputChange = (event) => {
    updateFormData(event.target.name, event.target.value);
  };

  return (
    <>
      <div className="form-container center-horizontal">
        <form className="row g-3">
          <h1 className="visitor-heading">ENTER DETAILS OF VISITOR</h1>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleInputChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="inputAddress" name="address" onChange={handleInputChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="phNumber" className="form-label">
              Phone Number
            </label>
            <input type="text" className="form-control" id="phNumber" name="phNumber" onChange={handleInputChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input type="text" className="form-control" id="designation" name="designation" onChange={handleInputChange} />
          </div>
          <h6>Name of companions (if any)</h6>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 1"
              name="companion1"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 2"
              name="companion2"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 3"
              name="companion3"
              onChange={handleInputChange}
            />
          </div>
          <h6>Arrival Details</h6>
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Arrival"
              name="arrivalDate"
              value={startDate}
            />
          </div>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              placeholder="Time of Arrival"
              name="arrivalTime"
              onChange={handleInputChange}
            />
          </div>
          <h6>Departure Details</h6>
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Departure"
              name="departureDate"
              value={endDate}
            />
          </div>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              placeholder="Time of Departure"
              name="departureTime"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="purpose" className="form-label">
              Purpose of visit
            </label>
            <input type="text" className="form-control" id="purpose" name="purpose" onChange={handleInputChange} />
          </div>
          <h6>Kind of visit</h6>
          <div className="temp">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="visitType"
                id="officialVisit"
                // name="Official"
                // checked={visitType === "Official"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="officialVisit">
                Official
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="visitType"
                id="unofficialVisit"
                // name="Unofficial"
                // checked={visitType === "Unofficial"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="unofficialVisit">
                Unofficial
              </label>
            </div>
          </div>
          {/* <h6>Who are you booking for ?</h6>
          <div className="temp">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="bookingForMyself"
                name="myself"
                // checked={bookingFor === "myself"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="bookingForMyself">
                I&apos;m the main guest
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="bookingForSomeoneElse"
                name="someoneElse"
                // checked={bookingFor === "someoneElse"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="bookingForSomeoneElse">
                I&apos;m the booking for someone else
              </label>
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default BookingForm;
