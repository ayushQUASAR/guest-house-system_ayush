import { useState } from 'react';
import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
import Popup from '../PopUp/Popup';

export default function FacultyRight({ prop }) {
  const { reffirstName, reflastName, refphoneNumber, department, facultyemail, setReffirstName, setReflastName, setRefphoneNumber, setFacultyemail, setDepartment,messageHead_m,para1_m,para2_m,setPopup,popup } = prop;


  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action

    // Check if all required fields are filled before submitting
    if (firstName && lastName && email && department && phoneNumber) {
      // You can add your code to process the form data here
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Department:', department);
      console.log('Phone Number:', phoneNumber);

      // You can trigger the popup or make an API call here
      openPopup();
    } else {
      // Display an error message or handle the incomplete form case
      console.log('Please fill in all required fields');
    }
  };

  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Faculty Details</h1>
      </div>
      <div>
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="First Name"
            value={reffirstName}
            onChange={(e) => handleInputChange(e, setReffirstName)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Last Name"
            value={reflastName}
            onChange={(e) => handleInputChange(e, setReflastName)}
          />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={facultyemail}
            onChange={(e) => handleInputChange(e, setFacultyemail)}
          />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Department"
            value={department}
            onChange={(e) => handleInputChange(e, setDepartment)}
          />
        </div>
      </div>
      <div className="row input">
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
      </div>
      <div className="mt-auto justify-content-end d-flex">
        <button type="submit" className="btn btn-primary btn-lg rounded register-btn">
          Register
        </button>
      </div>
      {popup&&     <Popup  setPopup={setPopup}messageHead={messageHead_m} para1={para1_m} para2={para2_m}/>}
    </div>
  );
}
