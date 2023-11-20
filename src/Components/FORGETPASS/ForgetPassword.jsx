import React, {useState, useEffect} from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [email,setEmail] = useState("");
 

  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/login/forgot-password`, {
      method: "post",
      mode :"cors",
      body: JSON.stringify({
        email
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json())
    .then((data) => window.alert(data.message))
    .catch((err) => console.log(err.message));

  }

  

  return (
    <div className="forgetmain1">
      <div className="forgethead1">Forget Password</div>

      <div>
        <form className="forgetform1">
          <label htmlFor="registeredemail">Enter Registered Email:</label>
          <br className="forgetbreaker" />
          <input type="text" id="from" name="emailid" className="forgetinputbox" onChange={(e) => {setEmail(e.target.value)}}/>
        </form>
      </div>
      <div className="forgetbook" onClick={handleClick}>Send Link</div>
    </div>
  );
};

export default ForgetPassword;
