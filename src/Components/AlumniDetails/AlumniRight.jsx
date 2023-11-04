
import { useState } from 'react';
import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
import Popup from '../PopUp/Popup';
export default function FacultyRight({prop}) {
  const {reffirstName,reflastName, refphoneNumber,department,facultyemail, setReffirstName, setReflastName, setRefphoneNumber, setFacultyemail, setDepartment } = prop;



  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // Event handler for form submission (you can add your logic here)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action
    // You can add your code to process the form data here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Department:', department);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <div>
      <div className="r">
        <h1 className="rheading">Enter Faculty Details</h1>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="row input">
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
          <button type="submit" onClick={openPopup} className="btn btn-primary btn-lg rounded register-btn">
            Register
          </button>
        </div>
      {/* </form> */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}