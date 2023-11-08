import React from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  return (
    <div className="forgetmain1">
      <div className="forgethead1">Forget Password</div>

      <div>
        <form className="forgetform1">
          <label htmlFor="registeredemail">Enter Registered Email:</label>
          <br className="forgetbreaker" />
          <input type="text" id="from" name="emailid" className="forgetinputbox" />
        </form>
      </div>
      <div className="forgetbook">Send Link</div>
    </div>
  );
};

export default ForgetPassword;
