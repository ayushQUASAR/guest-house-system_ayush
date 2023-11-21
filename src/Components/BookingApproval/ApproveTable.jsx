import React, { useState, useEffect } from "react";
// import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./Approvetable.css"
import BookingComponent from "../BOOKING/BookingComponent";
import Popup from "../PopUp/Popup";


const Approvaltable = ({ onSecondPage }) => {
  const [pendingBooking, setPendingBooking] = useState(null);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };


  const closePopup = () => {
    setPopupOpen(false);
  };
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/booking/approved/pending`)
      .then((res) => res.json())
      .then((data) => { setPendingBooking(data); console.log(data) })
      .then((err) => console.log(err));
  }, []);

  const handleBack = () => {
    setIsFirstPage(true);
  }
  // useEffect(()=> {
  //     fetch("${import.meta.env.VITE_API_URL}/booking/approved/pending")
  //     .then((res) => res.json())
  //    .then((data) => setRequests(() => {
  //       const dataSet = data.map((eachData) => {
  //        return {...eachData, accepting: false}
  //       })

  const handleSubmit = () => {

  }
  const handleApproval = (id, status) => {
    if (status === 'accept') {
      setIsFirstPage(false);
      // openPopup();
      onSecondPage();
    }

    if (status === 'reject') {
      const rejectBody = {
        booking: id,
        status: "reject",
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
          window.alert(data.message);

          setPendingBooking((prev) => {
            const selectedUsers = prev.filter((user) => user._id !== id);
            return selectedUsers;
          })

        })
        .catch((err) => console.log(err));

    }
  }



  // pendingUsers.map((user, index) => {
  // return  <tr key={user._id}>
  //                <td scope="row">{index+1}</td>
  //             <td>{user.name}</td> 
  //             <td>{user.email}</td>
  //             <td>{user.phone}</td>
  //             <td>{user.refInfo}</td> 
  //             <td><button type="button" class="btn btn-success btn-sm">Accept</button> <button type="button" class="btn btn-danger btn-sm">Reject</button></td>
  //   </tr>
  // })

  return (
    <>
    {
      isFirstPage ? 
      <div class="approval-table">
      <div className="d-flex flex-row justify-content-between">
      
      <table className="book-approval-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Guest House</th>
            <th>No. of Rooms</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Reason of Booking</th>
            <th>Reference</th>
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
          <td>{user.purpose}</td>
          <td>{user.roomBooker.isAdmin ? "Admin" : user.roomBooker.name}</td>
          
          <td>
            <button
              type="button"
              className="btn btn-success btn-sm mr-3"
              onClick={() => {
                setCurrentUser(user);
                handleApproval(user._id, 'accept');
              }}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleApproval(user._id, 'reject')}
            >
              Reject
            </button>
          </td>
        </tr>
      ))}
  </tbody>
        </table>
      </div>

          {/* <div className="table-content">
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
                        <div><button type="button" class="btn btn-success btn-sm mr-3" onClick={()=> {console.log(user);setCurrentUser(user);handleApproval(user._id, 'accept')}}>Accept</button> <button type="button" class="btn btn-danger btn-sm" onClick={() => handleApproval(user._id, 'reject')}>Reject</button></div>
              </div>
            })
        }


       
      </div> */}
        </div> : <BookingComponent guesthouseno={currentUser.guestHouseSelected} id={currentUser._id} rooms={currentUser.roomsSelected} onSubmit={handleSubmit} />
      }

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
