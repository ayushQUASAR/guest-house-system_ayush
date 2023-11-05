import React, { useContext, useState } from "react";
import "./BookingForm.css";
import { FormContext } from "../ContextHooks/FormContext";

const BookingForm = ({ startDate, endDate }) => {
  const { updateFormData } = useContext(FormContext);
  const [numCompanions, setNumCompanions] = useState(0); // State to track the number of companions
  const [companionInputs, setCompanionInputs] = useState([]); // Array to store companion input fields

  const sD = new Date(startDate);
  const eD = new Date(endDate);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedStartDate = sD.toLocaleDateString("en-US", options);
  const formattedEndDate = eD.toLocaleDateString("en-US", options)
  const handleInputChange = (event) => {
    updateFormData(event.target.name, event.target.value);
  };

  // Function to update the number of companions and generate input fields
  const handleNumCompanionsChange = (event) => {
    const num = Math.max(0, parseInt(event.target.value, 10)) || 0; // Ensure it's a valid number
    setNumCompanions(num);

    // Generate companion input fields
    const companions = Array.from({ length: num }, (_, index) => ({
      id: `companion${index + 1}`,
      name: `companion${index + 1}`,
    }));
    setCompanionInputs(companions);
  };

  return (
    <>
      <div className="form-container formWrapper">
        <form className="row g-3 book-form">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleInputChange} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleInputChange} required/>
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleInputChange} required/>
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="inputAddress" name="address" onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phNumber" className="form-label">
              Phone Number
            </label>
            <input type="text" className="form-control" id="phNumber" name="phNumber" onChange={handleInputChange} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input type="text" className="form-control" id="designation" name="designation" onChange={handleInputChange} required/>
          </div>
          <div className="col-12">
            <label htmlFor="numCompanions" className="form-label">
              Number of Companions
            </label>
            <input type="number" className="form-control" id="numCompanions" name="numCompanions" value={numCompanions} onChange={handleNumCompanionsChange} />
          </div>
          {companionInputs.map((companion, index) => (
            <div className="col-md-6" key={companion.id}>
              {/* <label htmlFor={companion.id} className="form-label">
                Companion {index + 1}
              </label> */}
              <input type="text" className="form-control" id={companion.id} name={companion.name} placeholder={`Companion ${index + 1} name`} onChange={handleInputChange} />
            </div>
          ))}
           <h6 className="head-six">Arrival Details</h6>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Date of Arrival"
              name="arrivalDate"
              value={formattedStartDate}
              readOnly
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
          <h6 className="head-six">Departure Details</h6>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Date of Departure"
              name="departureDate"
              value={formattedEndDate}
              readOnly
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
            <input type="text" className="form-control" id="purpose" name="purpose" onChange={handleInputChange} required />
          </div>
          <div className="temp">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="visitType"
                id="officialVisit"
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
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="unofficialVisit">
                Unofficial
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default BookingForm;