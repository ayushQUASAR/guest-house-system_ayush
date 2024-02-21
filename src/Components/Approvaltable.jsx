import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../style/Approvaltable.css";
import { useNavigate } from "react-router-dom";

const Approvaltable = () => {
  const [pendingUsers, setPendingUsers] = useState("");
  const navigate = useNavigate();

  const [dialog, setDialog] = useState(false);
  
  const toggleDialog = () => {
    setDialog((prev) => !prev);
  };
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/users/approved/pending")
      .then((res) => res.json())
      .then((data) => {
        setPendingUsers(data);
        console.log("pendinguserdata", data);
      })
      .then((err) => console.log(err));
  }, []);

  const handleApproval = (id, status) => {

   const confirm =  window.confirm(`Are you sure you want to ${status} this user?`);

    if (confirm === true) {
    fetch(import.meta.env.VITE_API_URL + "/admin/approveRegistration", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        user: id,
        status: `${status}`,
      }),
      headers: {
        "Content-Type": "application/json",
      }, 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert(data.message);
      //  navigate(0);
      setPendingUsers((prev) => {
        return  prev.filter((user) => user.user._id !== id);
      })
      })
      .catch((err) => console.log(err));  
  };
}

  
  return (
    <>
      <div>
        <table className="approval-table ">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email id</th>
              <th>Contact Number</th>
              <th>Govt/College ID</th>
              <th>Reference</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            {pendingUsers &&
              pendingUsers.length > 0 &&
              pendingUsers.map((user, index) => {
                return (
                  <tr key={user.user?._id}>
                    <td>{index + 1}</td>
                    <td>{user.user?.name}</td>
                    <td>{user.user?.email}</td>
                    <td>{user.user?.phone}</td>
                    {user.roomBooker?.isAdmin ? (
                        <td>-</td>
                      ) : (
                        <td>
                          <button
                            className="popup-button"
                            onClick={toggleDialog}
                          >
                            View
                          </button>
                          {dialog && (
                            <div className="dialog">
                              <div className="dialog-content">
                                <button
                                  className="close-icon"
                                  onClick={toggleDialog}
                                >
                                  &#10005;
                                </button>
                                <img
                                  className="popup-image"
                                  src={user.roomBooker?.idProof}
                                  alt="Popup Image"
                                />
                              </div>
                            </div>
                          )}
                        </td>
                      )}
                    <td>{user.user?.refInfo}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success btn-sm mr-3"
                        onClick={() => {
                          handleApproval(user.user?._id, "accept");
                          console.log(user.user?._id);
                        }}
                      >
                        Accept
                      </button>{" "}
                      <button
                        type="button"
                        class="btn btn-danger btn-sm"
                        onClick={() => handleApproval(user.user?._id, "reject")}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {/* <div className="grid-table">
        
            <div>S.No</div>
            <div>Name</div> 
            <div>Email id</div>
            <div>Contact Number</div>
            <div>Reference</div> 
            <div>Approval</div>
        
        </div> */}

        {/* <div className="table-content">
          {
           pendingUsers && pendingUsers.length > 0 &&  pendingUsers.map((user, index) => {
              return  <div className="grid-table-content" key={user?._id}>
                             <div>{index+1}</div>
                          <div>{user.user.name}</div> 
                          <div>{user.user.email}</div>
                          <div>{user.user.phone}</div>
                          <div>{user.user.refInfo}</div> 
                          <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {handleApproval(user.user?._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user.user?._id, 'reject')}>Reject</button></div>
                </div>
              })
          }


         
        </div> */}
      </div>
    </>
  );
};

export default Approvaltable;
