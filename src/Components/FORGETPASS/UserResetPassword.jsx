import React, {useEffect, useState, useContext} from 'react';
import './ResetPassword.css';
import { useUserContext } from "../ContextHooks/UserContext";


const UserResetPassword = () => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const { userId } = useUserContext();
  console.log("ResetPassword: "+userId);

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
  }, [userId]);

useEffect(()=> {

if(confirmPass!== "" && pass !== confirmPass) {
  setError(true);
}
else if(confirmPass!== "" && pass === confirmPass) {
  setError(false);
}

}, [pass,confirmPass]);


const handleClick = ()=> {
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
        <label htmlFor="registeredemail">Enter Registered Email:</label>
          <br className="resetbreaker" />
          <input type="text" id="registeredemail" name="emailid" className="forgetinputbox" onChange={(e) => {setEmail(e.target.value)}} value={email} disabled/>
          <label htmlFor="newpassword">Enter New Password :</label>
          <br className="resetbreaker" />
          <input type="password" id="newpass" name="newpass" className="resetinputbox"  onChange={(e) => {setPass(e.target.value)}}/><br /><br />
          <label htmlFor="cnfrmpassword">Confirm New Password:</label>
          <br className="resetbreaker" />
          <input type="password" id="cnfpass" name="confirmpass" className="resetinputbox1" onChange={(e)=> {setConfirmPass(e.target.value)}} />
          <br/>
         <p style={{color: "red", fontSize:"0.8rem", textDecoration:"underline"}}>{error && "Both passwords does not match..."}</p> 
        </form>
      </div>
      <div className="resetbook" onClick={handleClick}>Submit</div>
    </div>
  );
};

export default UserResetPassword;
