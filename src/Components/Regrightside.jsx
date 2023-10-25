
import { useState } from "react";
import "../style/regform.css"
import { NavLink } from "react-router-dom";
import Alumni from './AlumniDetails/AlumniRight'
import Faculty from './FacultyDetails/FacultyRight'
import Student from './StudentDetails/StudentRight'
const buttonStyle = {
  backgroundColor: "#007BFF", // Change to the desired background color
  color: "white", // Text color
  border: "none",
  cursor: "pointer",
  padding: "10px",
  borderRadius: "5px",
  margin: "5px",
};

export default function Regrightside() {
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Phnnumber, setPhnnumber] = useState("")
  const [Address, setAddress] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [contentType, setContentType] = useState('')
  const [next,setNext]=useState(true);
  // const[Reference,setRefrence]=useState("")
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const contentComponents = {
    student: <Student/>,
    faculty : <Faculty/>,
    alumni : <Alumni/>,
  };

  const selectedContent = contentComponents[contentType];
  const setSubmit = (e) => {
    e.preventDefault();
    const newEntry = { Email: Email, Firstname: Firstname, Lastname: Lastname, Address: Address, Phnnumber: Phnnumber, Password: Password, selectedOption: selectedOption }
   setData([...data,newEntry]);

    console.log("hi")
  }


  return (
    <>
    <div> <form action="" onSubmit={setSubmit}>
    {  next ?
    
    <div>
      <div className="r">
        <h1 className="rheading">Create an Account</h1>
      </div>
   
    
        <div className="row input">
          <div className="col-md-6 col-sm-12">
            <input  required type="text" className="form-control mb-3" onChange={(e) => setFirstname(e.target.value)} value={Firstname} placeholder="First Name" />
          </div>
          <div className="col-md-6 col-sm-12">
            <input  required type="text" className="form-control mb-3" onChange={(e) => setLastname(e.target.value)} value={Lastname} placeholder="Last Name" />
          </div>
        </div>
        <div className="row input">
          <div className="col-md-3 col-sm-12">
            <div className="input-group">
              <input  required type="text" className="form-control" value="+91" readOnly />
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <input  required type="text" value={Phnnumber} onChange={(e) => setPhnnumber(e.target.value)} className="form-control" placeholder="Phone Number" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input  required type="text" value={Address} onChange={(e) => setAddress(e.target.value)} className="form-control" placeholder="Address" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <input  required type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <span className="input-group-text">
                <img src="password-icon.png" alt="Password Icon" />
              </span>
              <input  required onChange={(e) => setPassword(e.target.value)} value={Password} type="password" className="form-control" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <h2 className="govt-id-heading">Upload Govt ID</h2>
            </div>
          </div>
        </div>
        <div className="row input">
          <div className="col-12">
            <div className="input-group">
              <input  required type="file" className="form-control" id="fileInput" />
            </div>
          </div>
        </div>

        <div className="row input align-items-center">
          <div className="col-md-3 col-sm-6 col-12">
            <h2 className="reference-heading">Reference</h2>
          </div>
          <div className="col-md-3 col-sm-6 col-12">
            <label>
              <input  required
                type="radio"
                value="student"
                onClick={()=>setContentType('student')}
                checked={selectedOption === 'student'}
                onChange={handleOptionChange}
              />
              <button type="button" onClick={()=>setContentType('student')} className={`form-control btn ${selectedOption === 'student' ? 'btn-primary' : 'btn-secondary'} rounded`} style={buttonStyle}>
                <img src="student-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Student
              </button>
            </label>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <label>
              <input  required
              onClick={()=>setContentType('faculty')}
                type="radio"
                value="faculty"
                checked={selectedOption === 'faculty'}
                onChange={handleOptionChange}
              />
              <button type="button" onClick={()=>setContentType('faculty')} className={`form-control btn ${selectedOption === 'faculty' ? 'btn-primary' : 'btn-secondary'} rounded`} style={buttonStyle}>
                <img src="faculty-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Faculty
              </button>
            </label>
          </div>

          <div className="col-md-3 col-sm-6 col-12">
            <label>
              <input
                type="radio"  required
                onClick={()=>setContentType('alumni')}
                value="alumni"
                checked={selectedOption === 'alumni'}
                onChange={handleOptionChange}
              />
              <button type="button"onClick={()=>setContentType('alumni')} className={`form-control btn ${selectedOption === 'alumni' ? 'btn-primary' : 'btn-secondary'} rounded`} style={buttonStyle}>
                <img src="alumni-icon.png" alt="Icon" style={{ marginRight: "10px" }} />
                Alumni
              </button>
            </label>
          </div>
         
        </div>
        <div className="row input">
        <NavLink to ="/" >
         
              Already have an account? Login
           
          </NavLink> 
          <div className="col-md-6 col-sm-12">
            <button disabled={selectedOption === null}  onClick={()=>setNext(false)} className="form-control btn btn-success rounded" style={buttonStyle}>
              Next
            </button>
          </div>
        </div>
        
    </div> : selectedContent   }
    </form>
    </div>
    </>
  );
}
