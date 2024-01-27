import { useState } from 'react';
import '../../style/facultyalumni.css'
import '../../style/MainContainer.css'
import Popup from '../PopUp/Popup';
import Dropdown from '../Dropdown/Dropdown';
export default function AlumniRight({ prop }) {
  const { reffirstName, reflastName, refphoneNumber, batch, department, jobProfile, setReffirstName, setReflastName, setRefphoneNumber, setBatch, setDepartment, setJobProfile, messageHead_m, para1_m, para2_m, setPopup, popup } = prop;



  // Event handler to update the state when input values change
  const handleInputChange = (e, stateUpdater) => {
    stateUpdater(e.target.value);
  };

  // Event handler for form submission (you can add your logic here)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission action
    // You can add your code to process the form data here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Branch:', branch);
    console.log('Batch:', batch);
    console.log('Phone Number:', phoneNumber);
    console.log('Job Profile:', jobProfile);
  };

  return (
    <>
      <div className="r">
        <h1 className="rheading">Enter Alumni Details</h1>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <div className="row input"> */}
      <div className="form-group regform-group-custom">
        <label>First-Name:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="First Name"
          value={reffirstName}
          onChange={(e) => handleInputChange(e, setReffirstName)}
        />
      </div>
      <div className="form-group regform-group-custom">
        <label>Last-Name:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Last Name"
          value={reflastName}
          onChange={(e) => handleInputChange(e, setReflastName)}
        />
      </div>
      {/* </div> */}
      {/* <div className="row input"> */}

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
        <Dropdown names={['Computer Science and Technology', 'Instrumental and Control Engineering', 'Electrical Engineering', 'Industrial and Production Engineering', 'Textile Technology', 'Mechanical Engineering', 'Biotechonology', 'Electronics and Communication Engineering', 'Civil Engineering', 'Information Engineering', 'Chemical Engineering', 'Physics', 'Chemistry', 'Mathematics', 'Humanities and Management']} placeholder={'Branch'} Branch={department} setBranch={setDepartment} />
      </div>

      <div className="form-group regform-group-custom">
        <label>Batch:</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Batch"
          value={batch}
          onChange={(e) => handleInputChange(e, setBatch)}
        />
      </div>
      {/* </div> */}
      <div className="form-group regform-group-custom">
        <label>Phone No:</label>
        
  
        <div style={{ display: 'flex' }}>

          <div style={{ width: '20%' }} className="input-group">
            <input
              required
              type="text"
              className="form-control"
              value="+91"
              readOnly
            />
          </div>


          <input style={{ width: '70%', letterSpacing: '0.10rem' }}
            required
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={refphoneNumber}
            onChange={(e) => handleInputChange(e, setRefphoneNumber)}

          />
        </div>
      </div>
      <div className="form-group regform-group-custom">
        <label>Job-Profile:</label>
        {/* <div className="col-12"> */}
        <input
          type="text"
          className="form-control"
          placeholder="Current Job Profile"
          value={jobProfile}
          onChange={(e) => handleInputChange(e, setJobProfile)}
        />
      </div>
      {/* </div> */}
      <button type="submit" className="btn btn-primary ">
        Register
      </button>
      {/* <div className="mt-auto justify-content-end d-flex">
        <button onClick={() => setPopup(true)} type="submit" className="btn btn-primary btn-lg rounded register-btn">
          Register
        </button>
      </div> */}
      {popup && <Popup setPopup={setPopup} messageHead={messageHead_m} para1={para1_m} para2={para2_m} />}
      {/* </form> */}
    </>
  );
}
