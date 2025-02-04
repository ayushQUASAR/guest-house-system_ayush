import { useState } from 'react';
import '../../style/facultyalumni.css'
import Popup from '../PopUp/Popup';
import Dropdown from '../Dropdown/Dropdown';
export default function StudentRight({ prop }) {
  const { reffirstName, reflastName, refphoneNumber, department, studrollNumber, setReffirstName, setReflastName, setRefphoneNumber, setDepartment, setSrollNumber, messageHead_m, para1_m, para2_m, setPopup, popup } = prop;

  // Define state variables to store the input values


  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };

  // Event handler for form submission (you can add your logic here)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action
    // You can add your code to process the form data here
  };

  return (
    <>
      <div className="r">
        <h1 className="rheading">Enter Student Details</h1>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <div className="row input" > */}
      <div className="form-group regform-group-custom" >
        <label>First Name:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="First Name"
          value={reffirstName}
          onChange={(e) => handleInputChange(e, setReffirstName)}
        />
      </div>
      <div className="form-group regform-group-custom">
        <label>Last Name:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Last Name"
          value={reflastName}
          onChange={(e) => handleInputChange(e, setReflastName)}
        />
      </div>
      {/* </div> */}
      {/* <div className="row input" style={{"margin":"10px"}}>
        <div className="col-md-3 col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control" value="+91" readOnly />
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={refphoneNumber}
            onChange={(e) => handleInputChange(e, setRefphoneNumber)}
          />
        </div>
      </div> */}
      {/* <div className="row input"> */}
      <div className="form-group regform-group-custom">
        <label>Roll Number:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Roll Number"
          value={studrollNumber}
          onChange={(e) => handleInputChange(e, setSrollNumber)}
        />
      </div>
      {/* </div> */}
      {/* <div className="row input"> */}
      <div className="form-group regform-group-custom">
        {/* <input
              type="text"
              className="form-control"
              placeholder="Branch"
              value={studbranch}
              onChange={(e) => handleInputChange(e, setSbranch)}
            /> */}
        <label>Branch:</label>
        <Dropdown
  names={[
    'Biotechnology',
    'Chemical Engineering',
    'Chemistry',
    'Civil Engineering',
    'Computer Science and Engineering',
    'Electrical Engineering',
    'Electronics and Communication Engineering',
    'Humanities and Management',
    'Industrial and Production Engineering',
    'Information Technology',
    'Instrumentation and Control Engineering',
    'Mathematics',
    'Mechanical Engineering',
    'Physics',
    'Textile Engineering',
  ]}
  placeholder={'Branch'}
  Branch={department}
  setBranch={setDepartment}
/>
      </div>
      {/* </div> */}
      <button type="submit" className="btn btn-primary ">
        Register
      </button>
      {/* <div className="mt-auto justify-content-end d-flex">
        <button type="submit" className="btn btn-primary btn-lg rounded register-btn">
          Register
        </button>
      </div> */}
      {/* </form> */}
      {popup && <Popup setPopup={setPopup} messageHead={messageHead_m} para1={para1_m} para2={para2_m} />}
      </>
  );
}
