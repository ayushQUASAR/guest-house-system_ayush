import React, {useState} from "react";
import Table from "./ApproveTable";
// import "../style/middle.css";
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Approve = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const removeFilter = () => {
    setIsFirstPage(false);
  }

  
  return (
    <>
      <div className="Approve-container">
        <div className="approve-topbar">
          <h1>APPROVE BOOKING</h1>
      
      { isFirstPage ? <div className="d-flex flex-row bd-highlight mb-3 searchflex">
        </div> : <></> }
        </div>
        <div className="approve-table-wrapper">
          <Table onSecondPage={removeFilter} />
        </div>
        {/* <div className="footbutton">
          <button type="button" className="btn btn-primary">
            Add new user
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Approve;
