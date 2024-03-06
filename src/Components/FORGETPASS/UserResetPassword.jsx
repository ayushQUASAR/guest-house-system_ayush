import React, { useEffect, useState, useContext } from 'react';
import './ResetPassword.css';
import { useUserContext } from "../ContextHooks/UserContext";
import { useNavigate } from "react-router-dom";


const UserResetPassword = () => {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [oldpass, setOldpass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const { userId } = useUserContext();
  console.log("ResetPassword: " + userId);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEmail(data.userDetails.email);
        console.log(data.userDetails.email);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [userId,refresh]);

  useEffect(() => {

    if (confirmPass !== "" && pass !== confirmPass) {
      setError(true);
    }
    else if (confirmPass !== "" && pass === confirmPass) {
      setError(false);
    }

  }, [pass, confirmPass]);


  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/login/update-password`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email,
        password: pass,
        oldpass,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => {
     

      
        navigate("/login"); // -1 means go back one step in history
      
      window.alert(data.message);
      // Check if the password change was successful
     
    })
    .catch((err) => console.log(err.message));
  }
  

  return (
    <div className="resetmain1">

      <div className="resethead1">Reset Password</div>

      
        <form className="resetform1">
          <label htmlFor="registeredemail" className='registeredemail'>Enter Registered Email:</label>
           <input type="text" id="registeredemail" name="emailid" className="resetinputbox1" onChange={(e) => { setEmail(e.target.value) }} value={email} disabled /><br /><br />
          <label htmlFor="oldpassword" className='registeredemail'>Enter Old Password :</label>
          &nbsp;<input type="password" id="oldpass" name="oldpass" className="resetinputbox" onChange={(e) => { setOldpass(e.target.value) }} /><br /><br />

          <label htmlFor="newpassword" className='registeredemail'>Enter New Password :</label>
          <br className="resetbreaker" />
          <input type="password" id="newpass" name="newpass" className="resetinputbox" onChange={(e) => { setPass(e.target.value) }} /><br /><br />
          <label htmlFor="cnfrmpassword" className='registeredemail'>Confirm New Password:</label>
          <br className="resetbreaker" />
          <input type="password" id="cnfpass" name="confirmpass" className="resetinputbox" onChange={(e) => { setConfirmPass(e.target.value) }} />
          <br />
          <p style={{ color: "red", fontSize: "0.8rem",margin:'10px',textDecoration: "underline" }}>{error && "Both passwords does not match..."}</p>
        </form>
      
      <div className="resetbook" onClick={handleClick}>Submit</div>
    </div>
  );
};

export default UserResetPassword;
