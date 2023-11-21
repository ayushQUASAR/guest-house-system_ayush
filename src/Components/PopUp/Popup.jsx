import React from 'react';
import './Popup.css';
import sucessIcon from "./check.png"
import { NavLink } from 'react-router-dom';
const Popup = ({ setPopup,messageHead,para1,para2}) => {


  return (
    <div className="popup-overlay" onClick={()=>setPopup(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
     
        <img className='sucessIcon' src={sucessIcon} alt='Success Icon'/>

        <h2 className='popup-heading'>{messageHead}</h2>
        <p className='popup-para'>{para1}</p>
       
        <p>{para2}</p>
        <NavLink to="/login">
        <button className="btn btn-primary btn-lg rounded" onClick={()=>setPopup(false)}>Close</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Popup;
