import React from "react";
import "./BookingApprovalPopup.css";
import sucessIcon from "../../images/check2.png";
import { NavLink, redirect, useNavigate } from "react-router-dom";
const BookingApprovalPopup = ({
  setPopup,
  messageHead,
  para1,
  para2
}) => {
  const navigate = useNavigate();
  console.log(setPopup);
  return (
    <div className="popup-overlay-approval" onClick={() => setPopup(false)}>
      <div className="popup-approval" onClick={(e) => e.stopPropagation()}>
        <img className="sucessIcon-approval" style = {{width : '40px', height : '40px'}} src={sucessIcon} alt="Success Icon" />
        <h2 className="popup-heading-approval">{messageHead}</h2>
      {para1!="" && <p className="popup-para-approval">{para1}</p>}
      {para2!="" && <p className="popup-para-approval">{para2}</p>}

        <button
          className="btn btn-primary btn-sm rounded"
          onClick={() => {
            setPopup(false)
            // navigate("/Dashboard")
            navigate('/login')
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingApprovalPopup;
