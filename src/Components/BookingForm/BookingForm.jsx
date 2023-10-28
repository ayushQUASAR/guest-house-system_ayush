import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [companion1, setCompanion1] = useState("");
  const [companion2, setCompanion2] = useState("");
  const [companion3, setCompanion3] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [visitType, setVisitType] = useState("Official");
  const [bookingFor, setBookingFor] = useState("myself");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can access the form values here and perform any necessary actions.
    console.log({
      firstName,
      lastName,
      email,
      address,
      phNumber,
      designation,
      companion1,
      companion2,
      companion3,
      arrivalDate,
      arrivalTime,
      departureDate,
      departureTime,
      purpose,
      visitType,
      bookingFor,
    });
  };

  return (
    <>
      <div className="form-container center-horizontal">
        <form className="row g-3" onSubmit={handleSubmit}>
          <h1 className="visitor-heading">ENTER DETAILS OF VISITOR</h1>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="phNumber" className="form-label">
              Phone Number
            </label>
            <input type="text" className="form-control" id="phNumber" value={phNumber} onChange={(e) => setPhNumber(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input type="text" className="form-control" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          </div>
          <h6>Name of companions (if any)</h6>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 1"
              value={companion1}
              onChange={(e) => setCompanion1(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 2"
              value={companion2}
              onChange={(e) => setCompanion2(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Companion 3"
              value={companion3}
              onChange={(e) => setCompanion3(e.target.value)}
            />
          </div>
          <h6>Arrival Details</h6>
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Arrival"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              placeholder="Time of Arrival"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
          </div>
          <h6>Departure Details</h6>
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              placeholder="Date of Departure"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              placeholder="Time of Departure"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="purpose" className="form-label">
              Purpose of visit
            </label>
            <input type="text" className="form-control" id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
          </div>
          <h6>Kind of visit</h6>
          <div className="temp">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="visitType"
                id="officialVisit"
                value="Official"
                checked={visitType === "Official"}
                onChange={() => setVisitType("Official")}
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
                value="Unofficial"
                checked={visitType === "Unofficial"}
                onChange={() => setVisitType("Unofficial")}
              />
              <label className="form-check-label" htmlFor="unofficialVisit">
                Unofficial
              </label>
            </div>
          </div>
          <h6>Who are you booking for ?</h6>
          <div className="temp">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="bookingForMyself"
                value="myself"
                checked={bookingFor === "myself"}
                onChange={() => setBookingFor("myself")}
              />
              <label className="form-check-label" htmlFor="bookingForMyself">
                I'm the main guest
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="bookingForSomeoneElse"
                value="someoneElse"
                checked={bookingFor === "someoneElse"}
                onChange={() => setBookingFor("someoneElse")}
              />
              <label className="form-check-label" htmlFor="bookingForSomeoneElse">
                I'm the booking for someone else
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
