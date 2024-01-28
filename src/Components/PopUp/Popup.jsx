import React from "react";
import "./Popup.css";
import sucessIcon from "../../images/check2.png";
import { NavLink, redirect, useNavigate } from "react-router-dom";
const Popup = ({
  setPopup,
  messageHead,
  para1,
  para2,
  isRegPopup
}) => {
  const navigate = useNavigate();
  console.log(setPopup);
  return (
    <div className="popup-overlay" onClick={() => setPopup(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <img className="sucessIcon" src={sucessIcon} alt="Success Icon" />

        <h2 className="popup-heading">{messageHead}</h2>
        <p className="popup-para">{para1}</p>

        <p>{para2}</p>

        <button
          className="btn btn-primary btn-lg rounded"
          onClick={() => {
            setPopup(false);
            if(isRegPopup) {
              
              // return redirect("/login");
              navigate("/login");

            }

            if(!isRegPopup) {
              // onClose();
              // updateBooking((prev) => {
              //   return prev.filter((booking) => booking._id === id);
              // });
              // return redirect("/Dashboard");
              navigate("/Dashboard")
            }
           
            
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
