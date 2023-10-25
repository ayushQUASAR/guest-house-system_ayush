import { useState } from 'react';
import '../../style/facultyalumni.css'
export default function StudentRight() {
  // Define state variables to store the input values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [branch, setBranch] = useState('');

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
    <div>
      <div className="r">
        <h1 className="rheading">Enter Student Details</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row input">
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
        <div className="row input">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Roll Number"
              value={rollNumber}
              onChange={(e) => handleInputChange(e, setRollNumber)}
            />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Branch"
              value={branch}
              onChange={(e) => handleInputChange(e, setBranch)}
            />
          </div>
        </div>

        <div className="mt-auto justify-content-end d-flex">
          <button type="submit" className="btn btn-primary btn-lg rounded register-btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
