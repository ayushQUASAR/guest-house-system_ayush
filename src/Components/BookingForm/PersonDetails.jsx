/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./PersonDetails.css"
import { FormContext } from "../ContextHooks/FormContext";

const PersonDetails = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [department, setDepartment] = useState("");
  // const [phNumber, setPhNumber] = useState("");
  // const [designation, setDesignation] = useState("");
  // const [address, setAddress] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can access the form values here and perform any necessary actions.
  //   console.log({
  //     firstName,
  //     lastName,
  //     email,
  //     department,
  //     phNumber,
  //     designation,
  //     address,
  //   });
  // };

  const { updateFormData } = useContext(FormContext);

  const handleInputChange = (event) => {
    updateFormData(event.target.name, event.target.value);
  };
  
  return (
    <>
      <div className="person-container center-horizontal">
        <form className="row g-3">
          <h1 className="visitor-heading">DETAILS OF PERSON MAKING THE BOOKING</h1>
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleInputChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" name="email" onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="department" className="form-label">Department/Section/Center</label>
            <input type="text" className="form-control" id="department" name="department" onChange={handleInputChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="phNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phNumber" name="phNumber" onChange={handleInputChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="designation" className="form-label">Designation</label>
            <input type="text" className="form-control" id="designation" name="designation" onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" name="address" onChange={handleInputChange} />
          </div>
          <div className="col-12">
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonDetails;
