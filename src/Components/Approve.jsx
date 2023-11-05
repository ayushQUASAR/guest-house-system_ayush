import React from "react";
import Table from "./Approvaltable";
import "../style/middle.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Approve = () => {
  const handleClick = () => {
    
  }
  return (
    <>
      <div className="Approve-container">
        <div className="approve-topbar">
          <h1>APPROVAL REGISTRATION</h1>
      
        <div className="d-flex flex-row bd-highlight mb-3 searchflex">
          <div className="p-2 bd-highlight">
            <input
              type="text"
              placeholder="Search..."
              className="form-control" // Added form-control class for consistent sizing
            />
          </div>
          <div className="p-2 bd-highlight">
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
          <div className="p-2 bd-highlight">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FILTER
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
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
