import React from "react";
import Table from "./Approvaltable";
import "../style/middle.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
const Approve = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // e.preventDefault(); // 
    navigate("/Register");
  }
  return (
    <>
      <div className="Approve-container">
        <div className="approve-topbar">
          <h1>APPROVE REGISTRATION</h1>
      
        </div>
        <div className="approve-table-wrapper">
          <Table />
        </div>
        <div className="footbutton">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Add new user
          </button>
        </div>
      </div>
    </>
  );
};

export default Approve;
