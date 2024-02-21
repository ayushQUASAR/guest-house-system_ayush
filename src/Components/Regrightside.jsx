import { useEffect, useState } from "react";
import "../style/regform.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alumni from "./AlumniDetails/AlumniRight";
import Faculty from "./FacultyDetails/FacultyRight";
import Student from "./StudentDetails/StudentRight";
import Dropdown from "./Dropdown/Dropdown";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import { Icon } from '@iconify/react';

import Popup from "./PopUp/Popup";
import usePasswordToggle from "./Passwordvisible/usePasswordToggle";

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
  const [PasswordMatch, setMatchmessage] = useState("");
  const [contentType, setContentType] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);
  const [reffirstName, setReffirstName] = useState("");
  const [reflastName, setReflastName] = useState("");
  const [refphoneNumber, setRefphoneNumber] = useState("");
  const [idProof, setIdProof] = useState(null);
  const [rightValue, setRightValue] = useState(-1300);
  const [registerrightval, setRegisterrightval] = useState(0);
  const [leftval, setLeft] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [PasswordInputType2, ToggleIcon2] = usePasswordToggle();

  // Alumni
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
          "File Size Can Be Maximum Upto 1MB. Please Upload A  File Within Limit "
        );
      }
    } else {
      window.alert("ONLY IMAGES AND PDF ARE ALLOWED. Please Upload again");
    }
  };

  const regOnview = () => {
    setRegisterrightval((prevRightValue) => (prevRightValue === 0 ? -1300 : 0));

  }
  const onView = () => {
    setRightValue((prevRightValue) => (prevRightValue === 0 ? -1300 : 0));
    setLeft(1300);
  }
  const handleback = () => {
    window.back();
  }
  useEffect(() => {
    if (ConfirmPassword.length != 0) {
      if (ConfirmPassword != Password) {
        setMatchmessage("Passwords do not match! ")
      }
      else {
        setMatchmessage("")
      }
    }
    console.log("passs")
  }, [ConfirmPassword])
  const Handleconfirmpass = (e) => {
    setConfirmPassword(e.target.value)

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

    console.log("Form data to be submitted to database : ", formData);
    console.log("Form data entries to be submitted to database : ", formData.entries());

    fetch(import.meta.env.VITE_API_URL + "/register", {
      method: "POST",
      body: formData,
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);

        handlepopup(true, data.status);

        if (!data.status) {
          window.alert(data.message);

        }


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

    if (message === 'success') {
      setMessagehead("Registered Successfully.");
      setPara1("verification link has been sent to you on your email and you will be able to login after verification");
      setPara2("");
    }
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

        <NavLink className="nav-tohome" to="/login">
          <span><button className="btn btn-primary "> Back</button></span>
        </NavLink>
        {/* </div> */}
        {popup && <Popup isRegPopup={true} setPopup={setPopup} messageHead={messageHead_m} para1={para1_m} para2={para2_m} />}
        <form action="/register" onSubmit={setSubmit}>
          <div className="reg-form-wrapper">
            <div className="register-optn-wrapper">

              {/* <div className="r">
              <h1 className="rheading">Create an Account</h1>
            </div> */}
              <div className="registration-optn" style={{ left: `${registerrightval}px`, height: '500px' }}>
                <div style={{ display: 'flex' }} >
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
                  }} className="college-official-optn" >
                    <Icon icon="fluent-emoji-high-contrast:teacher" width={'80'} height={'80'} color="#007bff" /> <p>Faculty</p>
                  </div>     <div tabIndex="0" onClick={() => {
                    setRegisteroptn(2), setRegisterclass(true);
                  }} className="college-official-optn" >
                    <Icon icon="ph:student-bold" width={'80'} height={'80'} color="#007bff" /> <p>Student</p>
                  </div>

                  <div tabIndex="0" onClick={() => {
                    setRegisteroptn(3), setRegisterclass(true);
                  }} className="college-official-optn">
                    <Icon icon="iconamoon:profile" width={'80'} height={'80'} color="#007bff" />  <p>Others</p>
                  </div>

                  {registerOptn && <div onClick={() => { onView(), regOnview() }} className="form-next-btn" >
                    <Icon width="30" icon="material-symbols:arrow-forward-ios-rounded" color="blue" />
                  </div>}
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
              </div>

              {registerOptn == 1 ? (
                <div className="college-official-form-wrapper" style={{ left: `${rightValue}px ` }}>
                  <div className="college-official-form">

                    <div className="form-group regform-group-custom">
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
                          value={Phnnumber}
                          onChange={(e) => setPhnnumber(e.target.value)}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>



                    <div className="form-group regform-group-custom">
                      <label>Firstname:</label>
                      <input
                        required
                        type="text"
                        value={Firstname}
                        onChange={handleUsernameChange}
                        className="college-official-username"
                      />
                    </div>{" "}


                    <div className="form-group regform-group-custom">
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

                    <div className="form-group regform-group-custom">
                      <label>Department:</label>

                      <Dropdown names={['Computer Science and Engineering', 'Instrumental and Control Engineering', 'Electrical Engineering', 'Industrial and Production Engineering', 'Textile Technology', 'Mechanical Engineering', 'Biotechonology', 'Electronics and Communication Engineering', 'Civil Engineering', 'Information Technology', 'Chemical Engineering', 'Physics', 'Chemistry', 'Mathematics and Computing', 'Humanities and Management']} placeholder={'Department'} Branch={department} setBranch={setDepartment} />
                    </div>


                    <div className="form-group regform-group-custom">
                      <label>Password:</label>
                      <input
                        required
                        type={PasswordInputType}
                        value={Password}
                        onChange={handlePasswordChange}
                        className="college-official-password"
                        placeholder="Password"
                      />
                      <span>{ToggleIcon}</span>
                    </div>
                    <div className="form-group regform-group-custom">
                      <label>Confirm Password:</label>

                      <input
                        required
                        onChange={(e) => { Handleconfirmpass(e) }}
                        value={ConfirmPassword}
                        type={PasswordInputType2}
                        className="college-official-password"
                        placeholder="Password"
                      />
                      <span>{ToggleIcon2}</span>
                      <p className="password-match-msg">{PasswordMatch}</p>
                    </div>
                    <div className="form-group regform-group-custom">
                      <h2 className="govt-id-heading">Upload Govt/College ID</h2>
                    </div>


                    <div className="form-group regform-group-custom">
                      <input
                        required
                        type="file"
                        onChange={handleFileChange}
                        className="form-control"
                        id="fileInput"
                      />
                    </div>


                    <div className="form-group regform-group-custom">
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
              ) : registerOptn == 2 ? (
                <div className="college-official-form-wrapper" style={{ left: `${rightValue}px ` }}>
                  <div className="college-official-form">

                    <div className="form-group regform-group-custom">
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


                    <div className="form-group regform-group-custom">
                      <label>Phone No:</label>
                      {/* <div className="row input"> */}
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
                          value={Phnnumber}
                          onChange={(e) => setPhnnumber(e.target.value)}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="form-group regform-group-custom">
                      <label>Firstname:</label>
                      <input
                        required
                        type="text"
                        value={Firstname}
                        onChange={handleUsernameChange}
                        className="college-official-username"
                      />
                    </div>{" "}
                    <div className="form-group regform-group-custom">
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
                    <div className="form-group regform-group-custom">
                      <label>Roll Number</label>
                      <input
                        required
                        type="text"
                        value={studrollNumber}
                        onChange={(e) => {
                          setSrollNumber(e.target.value);
                        }}
                        className="college-official-username"
                      />
                    </div>

                    <div className="form-group regform-group-custom">
                      <label>Department:</label>

                      <Dropdown names={['Computer Science and Engineering', 'Instrumental and Control Engineering', 'Electrical Engineering', 'Industrial and Production Engineering', 'Textile Technology', 'Mechanical Engineering', 'Biotechonology', 'Electronics and Communication Engineering', 'Civil Engineering', 'Information Technology', 'Chemical Engineering', 'Physics', 'Chemistry', 'Mathematics and Computing', 'Humanities and Management']} placeholder={'Department'} Branch={department} setBranch={setDepartment} />
                    </div>

                    <div className="form-group regform-group-custom">
                      <label>Password:</label>
                      <input
                        required
                        type={PasswordInputType}
                        value={Password}
                        onChange={handlePasswordChange}
                        className="college-official-password"
                        placeholder="Password"

                      />
                      <span>{ToggleIcon}</span>
                    </div>
                    <div className="form-group regform-group-custom">
                      <label>Confirm Password:</label>

                      <input
                        required
                        onChange={(e) => { Handleconfirmpass(e) }}
                        value={ConfirmPassword}
                        type={PasswordInputType2}
                        className="college-official-password"
                        placeholder="Password"
                      />
                      <span>{ToggleIcon2}</span>
                      <p className="password-match-msg">{PasswordMatch}</p>
                    </div>

                    <div className="form-group regform-group-custom">
                      <h2 className="govt-id-heading">Upload Govt/College ID</h2>
                    </div>
                    <div className="form-group regform-group-custom">
                      <input
                        required
                        type="file"
                        onChange={handleFileChange}
                        className="form-control"
                        id="fileInput"
                      />
                    </div>
                    <div className="form-group regform-group-custom">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded"
                        style={{ margin: 30 }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ) : registerOptn == 3 ? (

                <div className="college-official-form-wrapper" style={{ left: `${rightValue}px ` }}>
                  <div className="college-official-form">



                    <div className="form-group regform-group-custom">
                      <label>Firstname:</label>
                      <input
                        required
                        type="text"
                        className="form-control mb-3"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={Firstname}
                        placeholder="First Name"
                      />
                    </div>

                    <div className="form-group regform-group-custom">
                      <label>Lastname:</label>
                      <input
                        required
                        type="text"
                        className="form-control mb-3"
                        onChange={(e) => setLastname(e.target.value)}
                        value={Lastname}
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="form-group regform-group-custom">
                      <label>Phone No:</label>
                      {/* <div className="row input"> */}
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
                          value={Phnnumber}
                          onChange={(e) => setPhnnumber(e.target.value)}
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                    </div>

                    <div className="form-group regform-group-custom">

                      <label>Address:</label>
                      <input
                        required
                        type="text"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        placeholder="Address"
                      />

                    </div>

                    <div className="form-group regform-group-custom">
                      {/* <div className="col-12"> */}
                      <label>Email:</label>
                      <input
                        required
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>


                    <div className="form-group regform-group-custom">
                      <label>Password:</label>

                      <input
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                        type={PasswordInputType}
                        className="college-official-password"
                        placeholder="Password"
                      />
                      <span>{ToggleIcon}</span>
                    </div>
                    <div className="form-group regform-group-custom">
                      <label>Confirm Password:</label>
                      {/* <span className="input-group-text">
                      <img src="password-icon.png" alt="Password Icon" />
                    </span> */}
                      <input
                        required
                        onChange={(e) => { Handleconfirmpass(e) }}
                        value={ConfirmPassword}
                        type={PasswordInputType2}
                        className="college-official-password"
                        placeholder="Password"
                      />
                      <span>{ToggleIcon2}</span>
                      <p className="password-match-msg">{PasswordMatch}</p>
                    </div>

                    <div className="row input">

                      <h2 className="govt-id-heading">Upload Govt ID</h2>

                    </div>
                    <div className="form-group regform-group-custom">

                      <input
                        required
                        type="file"
                        onChange={handleFileChange}
                        className="form-control"
                        id="fileInput"
                      />

                    </div>
                    <div> 
                    </div>
                    <div className="row input align-items-center">
                      <div className="col-md-3 col-sm-6 col-12">
                        <h2 className="reference-heading">Reference</h2>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-center align-items-center">
                      <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                        <label>
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

                      <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
                        <label>
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




                      <div className="col-md-3 col-sm-6 col-lg-3 mb-3">
                        <label>

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
                          department,
                          studrollNumber,
                          setReffirstName,
                          setReflastName,
                          setRefphoneNumber,
                          setDepartment,
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
                          department,
                          jobProfile,
                          setReffirstName,
                          setReflastName,
                          setRefphoneNumber,
                          setBatch,
                          setDepartment,
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

            </div>
          </div>
        </form >
      </div >
    </>
  );
}
