import React from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
  return (
    <div className="resetmain1">
      <div className="resethead1">Reset Password</div>

      <div>
        <form className="resetform1">
          <label htmlFor="newpassword">Enter New Password :</label>
          <br className="resetbreaker" />
          <input type="text" id="newpass" name="newpass" className="resetinputbox" /><br /><br />
          <label htmlFor="cnfrmpassword">Confirm New Password:</label>
          <br className="resetbreaker" />
          <input type="text" id="cnfpass" name="confirmpass" className="resetinputbox1" />
        </form>
      </div>
      <div className="resetbook">Submit</div>
    </div>
  );
};

export default ResetPassword;
