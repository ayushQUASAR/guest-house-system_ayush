import React, { useState, useEffect } from "react";
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./Approvetable.css";
import BookingComponent from "../BOOKING/BookingComponent";
import CustomPrompt from "../PopUp/Rejectpopup";

const Approvaltable = ({ onSecondPage }) => {
  const [pendingBooking, setPendingBooking] = useState(null);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isCustomPromptOpen, setCustomPromptOpen] = useState(false);
  const [customPromptReason, setCustomPromptReason] = useState("");
  const [dialog, setDialog] = useState(false);

  const toggleDialog = () => {
    setDialog((prev) => !prev);
  };

  // const openPopup = () => {
  //   setPopupOpen(true);
  // };

  // const closePopup = () => {
  //   setPopupOpen(false);
  // };
  const openCustomPrompt = () => {
    setCustomPromptOpen(true);
  };

  const closeCustomPrompt = () => {
    setCustomPromptOpen(false);
  };

  const handleReject = (id) => {
    const confirm = window.confirm(
      `Are you sure you want to reject this booking?`
    );
    if (confirm === true) {
      setCurrentUser(id);
      openCustomPrompt();
    }
  };

  const handlePromptSubmit = (reason) => {
    if (reason === "") {
      window.alert("Rejection not processed. Reason was not provided.");
    } else {
      setCustomPromptReason(reason);
      handleApproval(currentUser, "reject", reason);
      closeCustomPrompt();
    }
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/booking/approved/pending`)
      .then((res) => res.json())
      .then((data) => {
        setPendingBooking(data);
        console.log(data);
      })
      .then((err) => console.log(err));
  }, []);

  const handleBack = () => {
    setIsFirstPage(true);
    console.log("clicked");
  };

  const handleSubmit = () => {};
  const handleApproval = (id, status, reason) => {
    const confirm = window.confirm(
      `Are you sure you want to ${status} this booking?`
    );

    if (confirm === true) {
      if (status === "accept") {
        setIsFirstPage(false);
        // openPopup();
        onSecondPage();
      }

      if (status === "reject") {
        const rejectBody = {
          booking: id,
          status: "reject",
          reason: reason,
        };

        console.log("reject body: ", rejectBody);
        fetch(`${import.meta.env.VITE_API_URL}/admin/bookingApproval`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(rejectBody),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            console.log(data.message);

            setPendingBooking((prev) => {
              const selectedUsers = prev.filter((user) => user._id !== id);
              return selectedUsers;
            });
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <>
      {isFirstPage ? (
        <div className="approval-table">
          <div className="d-flex flex-row justify-content-between">
            <table className="book-approval-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Guest House</th>
                  <th>No. of Rooms</th>
                  <th>Email</th>
                  <th>Contact No.</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason of Booking</th>
                  <th>Govt/College ID</th>
                  <th>Approval</th>
                </tr>
              </thead>
              <tbody>
                {pendingBooking &&
                  pendingBooking.length > 0 &&
                  pendingBooking.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.guestHouseSelected}</td>
                      <td>{user.roomsSelected}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{new Date(user.startDate).toLocaleDateString()}</td>
                      <td>{new Date(user.endDate).toLocaleDateString()}</td>
                      <td>{user.purpose}</td>
                      {user.roomBooker.isAdmin ? (
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
                                  src={user.roomBooker.idProof}
                                  alt="Popup Image"
                                />
                              </div>
                            </div>
                          )}
                        </td>
                      )}
                      <td>
                        <button
                          type="button"
                          className="btn btn-success btn-sm mr-3"
                          onClick={() => {
                            setCurrentUser(user);
                            handleApproval(user._id, "accept");
                          }}
                        >
                          Accept
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleReject(user._id, "reject")}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <BookingComponent
          updateBooking={setPendingBooking}
          guesthouseno={currentUser.guestHouseSelected}
          id={currentUser._id}
          rooms={currentUser.roomsSelected}
          startDate={currentUser.startDate}
          endDate={currentUser.endDate}
          onBack={handleBack}
        />
      )}
      <CustomPrompt
        isOpen={isCustomPromptOpen}
        onClose={closeCustomPrompt}
        onSubmit={handlePromptSubmit}
      />

      {/* <div class="approval-table">
        <div className="d-flex flex-row justify-content-between">
        
            <div>S.No</div>
            <div>Name</div>
            <div>Guest House</div> 
            <div>No. of Rooms</div>
            <div>Email</div>
            <div>Contact Number</div>
            <div>Reason of Booking</div>
            <div>Reference</div>
            <div>Approval</div>
        
        </div>

        <div className="table-content">
          {
           pendingBooking && pendingBooking.length > 0 &&  pendingBooking.map((user, index) => {
              return  <div className="d-flex flex-row justify-content-between" key={user._id}>
                             <div>{index+1}</div>
                          <div>{user.name}</div> 
                          <div>{user.guestHouseSelected}</div>
                          <div>{user.roomsSelected}</div>
                          <div>{user.email}</div>
                          <div>{user.phone}</div>
                          <div>{user.roomBooker.name}</div> 
                          <div>{user.purpose}</div>
                          <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {handleApproval(user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user._id, 'reject')}>Reject</button></div>
                </div>
              })
          }


         
        </div>
        
      </div> */}
      {/* <Popup isOpen={isPopupOpen} onClose={closePopup} /> */}
    </>
  );
};

export default Approvaltable;
