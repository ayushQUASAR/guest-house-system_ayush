import { useState } from 'react';
import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
import Popup from '../PopUp/Popup';

export default function FacultyRight({ prop }) {
  const { reffirstName, reflastName, refphoneNumber, department, facultyemail, setReffirstName, setReflastName, setRefphoneNumber, setFacultyemail, setDepartment } = prop;

  const [isPopupOpen, setPopupOpen] = useState(false);

  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
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
            value={firstName}
            onChange={(e) => handleInputChange(e, setFirstName)}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => handleInputChange(e, setLastName)}
          />
        </div>
      </div>
      <div className="row input">
        <div className="col-12">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
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
            value={phoneNumber}
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
          />
        </div>
      </div>
      <div className="mt-auto justify-content-end d-flex">
        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg rounded register-btn" disabled={!firstName || !lastName || !email || !department || !phoneNumber}>
          Register
        </button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
