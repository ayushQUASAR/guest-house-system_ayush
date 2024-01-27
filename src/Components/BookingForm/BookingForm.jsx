import React, { useContext, useState, useEffect } from "react";
import "./BookingForm.css";
import { FormContext } from "../ContextHooks/FormContext";

const BookingForm = ({ startDate, endDate, onFormValidChange, formData }) => {
  const { updateFormData } = useContext(FormContext);
  const [numCompanions, setNumCompanions] = useState(0); // Start with 0 companions
  const [companionInputs, setCompanionInputs] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const sD = new Date(startDate);
  const eD = new Date(endDate);
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedStartDate = sD.toLocaleDateString("en-US", options);
  const formattedEndDate = eD.toLocaleDateString("en-US", options);

  const handleInputChange = (event) => {
    updateFormData(event.target.name, event.target.value);
    validateForm();
  };

  const handleNumCompanionsChange = (event) => {
    const num = Math.max(0, Math.min(10, parseInt(event.target.value, 10))) || 0;
    setNumCompanions(num);

    // Generate companion input fields
    const companions = Array.from({ length: num }, (_, index) => ({
      id: `companion${index + 1}`,
      name: `companion${index + 1}`,
    }));
    setCompanionInputs(companions);
    validateForm();
  };
  useEffect(() => {
    // Validate the form when it mounts
    validateForm();
  }, []);

  useEffect(() => {
    // Validate the form when it mounts
    validateForm();
  }, [numCompanions]);

  useEffect(() => {
    // Validate the form when formData changes
    validateForm();
  }, [formData]);

  const validateForm = () => {
    // Define the required fields
    const requiredFields = [
      "firstName",
      "email",
      "address",
      "phNumber",
      "designation",
      "arrivalTime",
      "departureTime",
      "purpose",
    ];

    // Check if all required fields are filled
    const isValid = requiredFields.every((field) => !!formData[field]);

    // Check if all companion names are filled, but only if there are companions
    const isCompanionsValid =
      numCompanions === 0 || companionInputs.every((companion) => !!formData[companion.name]);

    // Set the form validity based on all validations
    const formValid = isValid && isCompanionsValid;
    setIsFormValid(formValid);
    onFormValidChange(formValid);
  };

  return (
    <>
      <div className="form-container formWrapper">
        <form className="row g-3 book-form">
          <p className="warning-para">All fields marked with (*) are mandatory.</p>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              First Name<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email<span className="asterisk">*</span>
            </label>
            <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleInputChange} required />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="inputAddress" name="address" onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="phNumber" className="form-label">
              Phone Number<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="phNumber" name="phNumber" onChange={handleInputChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="designation" className="form-label">
              Designation<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="designation" name="designation" onChange={handleInputChange} required />
          </div>
          <div className="col-12">
            <label htmlFor="numCompanions" className="form-label">
              Number of Companions<span className="asterisk">*</span>
            </label>
            <select className="form-control" id="numCompanions" name="numCompanions" value={numCompanions} onChange={handleNumCompanionsChange}>
              {Array.from({ length: 11 }, (_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
          {companionInputs.map((companion, index) => (
            <div className="col-md-6" key={companion.id}>
              <input type="text" className="form-control" id={companion.id} name={companion.name} placeholder={`Companion ${index + 1} name*`} onChange={handleInputChange} required />
            </div>
          ))}
          {/* <h6 className="head-six">Arrival Details*</h6> */}
          <label htmlFor="" className="form-label">Arrival Details<span className="asterisk">*</span></label>
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
            <input type="text" className="form-control" placeholder="Check in timing : 12:00 pm" name="arrivalTime"  readOnly />
            {/* <p>Check in timing : 12:00 pm</p> */}
          </div>
          {/* <h6 className="head-six">Departure Details*</h6> */}
          <label htmlFor="" className="form-label">Departure Details<span className="asterisk">*</span></label>
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
            <input type="text" className="form-control" placeholder="Check out timing : 11:00 am" readOnly />
            {/* <p>Check out timing : 11:00 am</p> */}
          </div>
          <div className="col-12">
            <label htmlFor="purpose" className="form-label">
              Purpose of visit<span className="asterisk">*</span>
            </label>
            <input type="text" className="form-control" id="purpose" name="purpose" onChange={handleInputChange} required />
          </div>
          <div className="temp">
          <h6 className="head-six">Kind of Visit</h6> 
            <div className="form-check form-check-inline">
            <input
                  className="form-check-input"
                  type="radio"
                  name="visitType"
                  id="officialVisit"
                  onChange={handleInputChange}
                  required
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
                  required
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

