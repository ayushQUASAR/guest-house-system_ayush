import React, { useEffect, useState } from 'react';
import './ResetPassword.css';
import { useUserContext } from '../ContextHooks/UserContext';


const ResetPassword = () => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [user, setUserDetails] = useState([]);
  const { userId } = useUserContext();

  useEffect(() => {
    let url = `${import.meta.env.VITE_API_URL}/login/admin/${userId}`;
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      }
      )
      .catch((err) => console.log(err.message));
  }, []);

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
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => window.alert(data.message))
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="resetmain1">
      <div className="resethead1">Reset Password</div>

      <div>
        <form className="resetform1">
          <label htmlFor="registeredemail" className='registeredemail'>Enter Registered Email:&nbsp;&nbsp;</label>
          <br className="resetbreaker" />
          <input type="text" id="registeredemail" value={user[0]?.email} name="emailid" className="forgetinputbox" onChange={(e) => { setEmail(e.target.value) }} /><br></br>
          <label htmlFor="newpassword" className='registeredemail'>Enter New Password :</label>
          <br className="resetbreaker" />
          <input type="password" id="newpass" name="newpass" className="resetinputbox" onChange={(e) => { setPass(e.target.value) }} /><br /><br />
          <label htmlFor="cnfrmpassword" className='registeredemail'>Confirm New Password:</label>
          <br className="resetbreaker" />
          <input type="password" id="cnfpass" name="confirmpass" className="resetinputbox1" onChange={(e) => { setConfirmPass(e.target.value) }} />
          <br />
          <p style={{ color: "red", fontSize: "0.8rem", textDecoration: "underline" }}>{error && "Both passwords does not match..."}</p>
        </form>
      </div>

      <div className="resetbook" onClick={handleClick}>Submit</div>

    </div>
  );
};

export default ResetPassword;
