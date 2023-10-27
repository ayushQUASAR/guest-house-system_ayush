import { useState } from 'react';
import '../../style/facultyalumni.css'
import Popup from '../PopUp/Popup';
export default function StudentRight({prop}) {
  const { reffirstName,reflastName, refphoneNumber,studbranch,studrollNumber,setReffirstName, setReflastName, setRefphoneNumber, setSbranch, setSrollNumber } = prop;

  // Define state variables to store the input values
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

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
        <div className="row input">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Roll Number"
              value={studrollNumber}
              onChange={(e) => handleInputChange(e, setSrollNumber)}
            />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Branch"
              value={studbranch}
              onChange={(e) => handleInputChange(e, setSbranch)}
            />
          </div>
        </div>

        <div className="mt-auto justify-content-end d-flex">
          <button type="submit" onClick={openPopup}className="btn btn-primary btn-lg rounded register-btn">
            Register
          </button>
        </div>
      {/* </form> */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
