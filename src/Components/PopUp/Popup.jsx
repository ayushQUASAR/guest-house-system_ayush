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
    <div className="popup-overlay-registration" onClick={() => setPopup(false)}>
      <div className="popup-registration" onClick={(e) => e.stopPropagation()}>
        {/* <img className="sucessIcon-registration" src={sucessIcon} alt="Success Icon" /> */}

        <h2 className="popup-heading-registration">{messageHead}</h2>
      {para1!="" && <p className="popup-para-registration">{para1}</p>}
      {para2!="" && <p className="popup-para-registration">{para2}</p>}

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
