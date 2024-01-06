import React from 'react';
import './Popup.css';
import sucessIcon from "../../images/check2.png"
import { NavLink } from 'react-router-dom';
 
 const ConfirmationPopup = ({ confirmationP, messageHead, username }) => {

    console.log(confirmationP)
    return (
      <div className="popup-overlay" onClick={() => confirmationP(false)}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
  
          <img className='sucessIcon' src={sucessIcon} alt='Success Icon' />
  
          <h2 className='popup-heading'>{messageHead} </h2>
  
          {console.log("gjnmk,"+{username})}
          {console.log(username)}
  
          {/* <NavLink to="/login"> */}
            <button className="btn btn-primary  btn-lg rounded" 
             style={{ backgroundColor: 'red', color: 'white', marginRight:'5px'}}
            onClick={() => confirmationP(false)}>Yes</button>
        
            <button className="btn btn-primary btn-lg rounded" 
            onClick={() => confirmationP(false)}>No</button>
          {/* </NavLink> */}
  
  
        </div>
      </div>
    );
  };
  export default ConfirmationPopup;