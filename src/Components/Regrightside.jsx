import { useState } from "react";
import "../style/regform.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alumni from "./AlumniDetails/AlumniRight";
import Faculty from "./FacultyDetails/FacultyRight";
import Student from "./StudentDetails/StudentRight";
import { Icon } from '@iconify/react';

import Popup from "./PopUp/Popup";

export default function Regrightside() {
  const navigate = useNavigate();

  const defaultButtonClass = "btnDefault";
  const clickedButtonClass = "btnClicked";
  const [msgerror, setMerror] = useState(null);
  const [error, setError] = useState(null);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Phnnumber, setPhnnumber] = useState("");
  const [Branch, setBranch] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [contentType, setContentType] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);
  const [reffirstName, setReffirstName] = useState("");
  const [reflastName, setReflastName] = useState("");
  const [refphoneNumber, setRefphoneNumber] = useState("");
  const [idProof, setIdProof] = useState(null);
  const [rightValue, setRightValue] = useState(-1300);
  const [registerrightval,setRegisterrightval]=useState(0);
  const [leftval,setLeft]=useState();
 

  // Alumni
  console.log(Branch);
  const [batch, setBatch] = useState("");
  const [registerOptn, setRegisteroptn] = useState(null);
  const [registeractiveclass, setRegisterclass] = useState(false);

  const [jobProfile, setJobProfile] = useState("");

  // student
  const [messageHead_m, setMessagehead] = useState("Registration Successful");

  const [para1_m, setPara1] = useState(
    "Your registration has been successfully completed."
  );
  const [para2_m, setPara2] = useState(
    "An Email has been sent for verification. \nKindly check your Mail.\nYou will be able to Login once Registration is approved"
  );
  const [studrollNumber, setSrollNumber] = useState("");
  const [studbranch, setSbranch] = useState("");

  // faculty

  const [facultyemail, setFacultyemail] = useState("");
  const [department, setDepartment] = useState("");
  const [popup, setPopup] = useState(false);


  // const setStyle=(e)=>{
  //  Password;
  // }
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Verify email domain
    const isValidEmail = inputEmail.endsWith("@nitj.ac.in");
    setMerror(
      isValidEmail ? "" : "Invalid email domain. Please use @nitj.ac.in"
    );
  };

  const handleUsernameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleFileChange = (e) => {
    let file = e.target.files[0];

    if (!file) {
      window.alert("File not uploaded.");
    }

    if (file.type.startsWith("image/") || file.type === "application/pdf") {
      console.log(file.type);

      if (file.size <= 1000000) {
        setIdProof(file);
      } else {
        window.alert(
          " file size can be maximum upto. 1MB. Please Upload file within the limit "
        );
      }
    } else {
      window.alert("ONLY IMAGES AND PDF ARE ALLOWED. Please Upload again");
    }
  };
 const regOnview=()=>{
  setRegisterrightval((prevRightValue) => (prevRightValue === 0 ? -1300 : 0));

 }
  const onView=()=>{
    setRightValue((prevRightValue) => (prevRightValue === 0 ? -1300 : 0));
    setLeft(1300);
  }

  const setSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      Email: Email,
      Firstname: Firstname,
      Lastname: Lastname,
      Address: Address,
      Phnnumber: Phnnumber,
      Password: Password,
      selectedOption: selectedOption,
      idProof: idProof,
    };
    setData([...data, newEntry]);
    console.log("submit", newEntry);

    const formData = new FormData();
    formData.append("Firstname", Firstname);
    formData.append("Lastname", Lastname);
    formData.append("Phnnumber", Phnnumber);
    formData.append("Email", Email);
    formData.append("Password", Password);
    formData.append("Address", Address);
    formData.append("selectedOption", contentType);
    formData.append("idProof", idProof);
    // Alumni
    formData.append("RefFirstName", reffirstName);
    formData.append("RefLastName", reflastName);
    formData.append("RefPhoneNumber", refphoneNumber);
    formData.append("AlumniBatch", batch);
    formData.append("AlumniBranch", Branch);
    formData.append("ALumniJobProfile", jobProfile);

    // Student
    formData.append("StudentRollNumber", studrollNumber);
    formData.append("StudentBranch", Branch);

    // Faculty
    formData.append("FacultyEmail", facultyemail);
    formData.append("Department", department);

    formData.append("registerOption", registerOptn);

    console.log(formData);
    console.log(formData.entries());

    fetch(import.meta.env.VITE_API_URL + "/register", {
      method: "POST",
      body: formData,
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        handlepopup(true, data.status);
        window.alert(
          "Registered Successfully. \n \nA verification link has been sent to you on your email and you will be able to login after verification"
        );
        navigate("/login");
      })
      .catch((err) => {
        setError(err);
        console.log("error in post request");
        window.alert(err);
      });

    console.log("registered");
  };
  const handlepopup = (val, message) => {
    console.log(message);

    if (message === "accepted") {
      setMessagehead("User Already Registered.");
      setPara1("Please continue Login from the Login Page");
      setPara2("");

      setPopup(val);
    } else if (message === "rejected") {
      setMessagehead("User is Rejected by the Admin. ");
      setPara1("Contact the Booking Office for further Help");
      setPara2("");
      setPopup(val);
    } else if (message === "pending") {
      setMessagehead("Please Wait for Approval from the Institute");
      setPopup(val);
    } else if (error) {
      setPopup(false);
      window.alert(error);
    }
  };

  return (
    <>
      <div className="reg-rightside">
        {" "}
        <NavLink className="nav-tohome" to="/">
              <div className="nav-tohome">
                <HomeRoundedIcon color="white" />
                <div className="optn-name">Home</div>
              </div>
            </NavLink>
        <form action="/register" onSubmit={setSubmit}>
          <div className="register-optn-wrapper">
          
            {/* <div className="r">
              <h1 className="rheading">Create an Account</h1>
            </div> */}

            <div className="registration-optn" style={{left:`${registerrightval}px`}}>
              {/* <div
                onClick={() => {
                  setRegisteroptn(1), setRegisterclass(true);
                }}
                className={`college-official-optn ${registeractiveclass && registerOptn == 1
                    ? "registerclass"
                    : ""
                  }`}
              >
                Student/Faculty
              </div> */}

              <div tabIndex="0" onClick={() => {
                  setRegisteroptn(1), setRegisterclass(true);
                }}className="college-official-optn" >
              <Icon icon="fluent-emoji-high-contrast:teacher" width={'80'}height={'80'}color="#007bff" /> <p>Faculty</p>
              </div>     <div tabIndex="0" onClick={() => {
                  setRegisteroptn(2), setRegisterclass(true);
                }}className="college-official-optn" >
               <Icon icon="ph:student-bold" width={'80'}height={'80'}color="#007bff" /> <p>Student</p>
              </div>  
             
                <div tabIndex="0" onClick={() => {
                  setRegisteroptn(3), setRegisterclass(true);
                }} className="college-official-optn">
                <Icon icon="iconamoon:profile" width={'80'}height={'80'} color="#007bff" />  <p>Others</p>
              </div>
              

{/*                     
              <div
                onClick={() => {
                  setRegisteroptn(2), setRegisterclass(true);
                }}
                className={`college-official-optn ${registeractiveclass && registerOptn == 2
                    ? "registerclass"
                    : ""
                  }`}
              >
                Others
              </div> */}
            </div>
          {  registerOptn&&<div onClick={()=>{onView(),regOnview()}} className="form-next-btn" style={{left:`${leftval}px `}}>
              <Icon width="30"icon="material-symbols:arrow-forward-ios-rounded" color="blue" />
              </div>}
            {registerOptn == 1 ? (
              <div className="college-official-form-wrapper"style={{left: `${rightValue}px `}}>
                <div className="college-official-form">
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      required
                      type="text"
                      value={Email}
                      onChange={handleEmailChange}
                      placeholder="example@nitj.ac.in"
                      className="college-official-email"
                    />
                    {msgerror !== null && (
                      <p className="error-message">{msgerror}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Firstname:</label>
                    <input
                      required
                      type="text"
                      value={Firstname}
                      onChange={handleUsernameChange}
                      className="college-official-username"
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label>Lastname:</label>
                    <input
                      required
                      type="text"
                      value={Lastname}
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      className="college-official-username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      required
                      type="password"
                      value={Password}
                      onChange={handlePasswordChange}
                      className="college-official-password"
                    />
                  </div>
                  <div className="form-group">
                    <h2 className="govt-id-heading">Upload Govt/College ID</h2>
                  </div>
                  <div className="form-group">
                    <input
                      required
                      type="file"
                      onChange={handleFileChange}
                      className="form-control"
                      id="fileInput"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded"
                      style={{ margin: 30 }}
                    >
                      Register
                    </button>
                  </div>
                  {/* {popup &&     <Popup  setPopup={setPopup} messageHead={messageHead_m} para1={para1_m} para2={para2_m}/>} */}
                </div>
              </div>
            ): registerOptn == 2 ? (
              <div className="college-official-form-wrapper"style={{left: `${rightValue}px `}}>
                <div className="college-official-form">
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      required
                      type="text"
                      value={Email}
                      onChange={handleEmailChange}
                      placeholder="example@nitj.ac.in"
                      className="college-official-email"
                    />
                    {msgerror !== null && (
                      <p className="error-message">{msgerror}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Firstname:</label>
                    <input
                      required
                      type="text"
                      value={Firstname}
                      onChange={handleUsernameChange}
                      className="college-official-username"
                    />
                  </div>{" "}
                  <div className="form-group">
                    <label>Lastname:</label>
                    <input
                      required
                      type="text"
                      value={Lastname}
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      className="college-official-username"
                    />
                  </div>   
                  {/* <div className="form-group"> */}
                    {/* <label>Branch</label> */}
                    {/* <input
                      required
                      type="text"
                      value={Lastname}
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                      className="college-official-username"
                    /> */}
                
                  {/* </div> */}
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      required
                      type="password"
                      value={Password}
                      onChange={handlePasswordChange}
                      className="college-official-password"
                    />
                  </div>
                  <div className="form-group">
                    <h2 className="govt-id-heading">Upload Govt/College ID</h2>
                  </div>
                  <div className="form-group">
                    <input
                      required
                      type="file"
                      onChange={handleFileChange}
                      className="form-control"
                      id="fileInput"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded"
                      style={{ margin: 30 }}
                    >
                      Register
                    </button>
                  </div>
                  {popup &&     <Popup  setPopup={setPopup} messageHead={messageHead_m} para1={para1_m} para2={para2_m}/>}
                </div>
              </div>
            ) : registerOptn == 3 ? (
         
              <div className="college-official-form-wrapper"style={{right: `${rightValue}px `}}>
                   <div>  <div className="row input">
                  <div className="col-md-6 col-sm-12">
                    <input
                      required
                      type="text"
                      className="form-control mb-3"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={Firstname}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input
                      required
                      type="text"
                      className="form-control mb-3"
                      onChange={(e) => setLastname(e.target.value)}
                      value={Lastname}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-md-3 col-sm-12">
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        value="+91"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <input
                      required
                      type="text"
                      value={Phnnumber}
                      onChange={(e) => setPhnnumber(e.target.value)}
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-12">
                    <input
                      required
                      type="text"
                      value={Address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-12">
                    <input
                      required
                      type="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-12">
                    <input
                      required
                      type="number"
                      value={Phnnumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-12">
                    <input
                      required
                      type="text"
                      value={Branch}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row input">
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text">
                        <img src="password-icon.png" alt="Password Icon" />
                      </span>
                      <input
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
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
                      <input
                        required
                        type="file"
                        onChange={handleFileChange}
                        className="form-control"
                        id="fileInput"
                      />
                    </div>
                  </div>
                </div>

                <div className="row input align-items-center">
                  <div className="col-md-3 col-sm-6 col-12">
                    <h2 className="reference-heading">Reference</h2>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12">
                    <label>
                      {/* <input  required
                type="radio"
                value="student"
                onClick={()=>setContentType('student')}
                checked={selectedOption === 'student'}
                onChange={handleOptionChange}
              /> */}
                      <button
                        type="button"
                        onClick={() => setContentType("student")}
                        className={` ${contentType === "student"
                            ? clickedButtonClass
                            : defaultButtonClass
                          } `}
                      >
                        <img
                          src="student-icon.png"
                          alt="Icon"
                          style={{ marginRight: "10px" }}
                        />
                        Student
                      </button>
                    </label>
                  </div>

                  <div className="col-md-3 col-sm-6 col-12">
                    <label>
                      {/* <input  required
              onClick={()=>setContentType('faculty')}
                type="radio"
                value="faculty"
                checked={selectedOption === 'faculty'}
                onChange={handleOptionChange}
              /> */}
                      <button
                        type="button"
                        onClick={() => setContentType("faculty")}
                        className={` ${contentType === "faculty"
                            ? clickedButtonClass
                            : defaultButtonClass
                          } `}
                      >
                        <img
                          src="faculty-icon.png"
                          alt="Icon"
                          style={{ marginRight: "10px" }}
                        />
                        Faculty
                      </button>
                    </label>
                  </div>

                  <div className="col-md-3 col-sm-6 col-12">
                    <label>
                      {/* <input
                type="radio"  required
                onClick={()=>setContentType('alumni')}
                value="alumni"
                checked={selectedOption === 'alumni'}
                onChange={handleOptionChange}
              /> */}
                      <button
                        type="button"
                        onClick={() => setContentType("alumni")}
                        className={` ${contentType === "alumni"
                            ? clickedButtonClass
                            : defaultButtonClass
                          } `}
                      >
                        <img
                          src="alumni-icon.png"
                          alt="Icon"
                          style={{ marginRight: "10px" }}
                        />
                        Alumni
                      </button>
                    </label>
                  </div>
                </div>
                {contentType == "student" && (
              <Student
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  Branch,
                  studrollNumber,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setBranch,
                  setSrollNumber,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
            )}
            {contentType == "faculty" && (
              <Faculty
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  department,
                  facultyemail,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setFacultyemail,
                  setDepartment,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
            )}
            {contentType == "alumni" && (
              <Alumni
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  batch,
                  Branch,
                  jobProfile,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setBatch,
                  setBranch,
                  setJobProfile,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
               )}
                <div className="row input">
                  <NavLink to="/">Already have an account? Login</NavLink>
                
                </div>
                </div></div>
          ) : (
              <div></div>
            )}
            {/* {contentType == "student" && (
              <Student
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  studbranch,
                  studrollNumber,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setSbranch,
                  setSrollNumber,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
            )}
            {contentType == "faculty" && (
              <Faculty
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  department,
                  facultyemail,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setFacultyemail,
                  setDepartment,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
            )}
            {contentType == "alumni" && (
              <Alumni
                prop={{
                  reffirstName,
                  reflastName,
                  refphoneNumber,
                  batch,
                  branch,
                  jobProfile,
                  setReffirstName,
                  setReflastName,
                  setRefphoneNumber,
                  setBatch,
                  setBranch,
                  setJobProfile,
                  messageHead_m,
                  para1_m,
                  para2_m,
                  setPopup,
                  popup,
                }}
              />
               )} */}
          </div>
        </form>
      </div>
    </>
  );
}
