import React, { useState, useEffect } from "react";  
import sucessIcon from "../images/check2.png";
import '../style/bookingDetail.css';
import { useUserContext } from './ContextHooks/UserContext';
const AdminBookingHistory= () => {
  const [bookings, setBookings] = useState([]); 
  const [selectReason, setSelectReason] = useState(false);
  function formatDateToISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  } 
  const formatRoomData = (room) => {
    let str = "";
    if (room.length == 1) {
      return str + room[0];
    }
    for (let i = 0; i < room.length - 1; i++) {
      str += `${room[i]}, `;
    }

    str += ` ${room[room.length - 1]}`;

    return str;
  };
  const handleReject = () =>{
    setSelectReason(true);
  }
  const closeReason = () =>{
    setSelectReason(false);
  }
  // const email = sessionStorage.getItem("email");
  
  const { userId } = useUserContext();
  useEffect(() => { 
    fetch(`${import.meta.env.VITE_API_URL}/booking/admin/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let bookings_h = data;
        if (bookings_h) {
          const final = bookings_h.map((booking) => {
            return {
              id: booking._id,
              guestHouse: booking.guestHouseSelected,
              bookingDate: formatDateToISO(new Date(booking.createdAt)),
              checkIn: formatDateToISO(new Date(booking.startDate)),
              checkOut: formatDateToISO(new Date(booking.endDate)),
              rooms: booking.roomsAllotted,
              status: booking.status,
            };
          });

          setBookings(final);
        } else setBookings(null);
      })
      .catch((err) => console.log(err.message));
    const today = new Date();
  }, []);

  return (
    <>
      {bookings != null && bookings.length > 0 ? (
        <div>
          <div style={{ color: "#0275d8", backgroundColor: "#d8f4ff" }}>
            <h2 style = {{padding: '4px'}}>Booking History</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Room(s)</th>
                <th>Guest House</th>
                <th>Booking Date</th>
                <th>Check In / Out</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>
                    {booking.status === "pending" ||
                    booking.status === "rejected" || 
                    booking.status === "hodPending"
                      ? "-"
                      : formatRoomData(booking.rooms)}
                  </td>
                  <td>
                    {booking.status === "pending" ||
                    booking.status === "rejected"  || 
                    booking.status === 'hodPending'
                      ? "-"
                      : booking.guestHouse === 1
                      ? "INSTITUTE GUEST HOUSE"
                      : booking.guestHouse === 2
                      ? "MEGA GUEST HOUSE"
                      : "SAC GUEST HOUSE"}
                  </td>
                  <td>{booking.bookingDate}</td>
                  <td>{`${booking.checkIn} / ${booking.checkOut}`}</td>
                  <td>{booking.status}</td>
                  <td>
                  <td>
                  {booking.status === 'hodPending' && 
                    <div className = "btn btn-primary" onClick = {handleReject}>
                      View
                    </div>}
                  {booking.status === 'rejected' && 
                    <div className = "btn btn-primary" onClick = {handleReject}>
                      Reason
                    </div>}
                  {booking.status === 'pending' && 
                    <div className = "btn btn-primary" onClick = {handleReject}>
                      View
                    </div>} 
                  {booking.status === 'approved' && 
                    <div className = "btn btn-primary" onClick = {handleReject}>
                      View
                    </div>}
                  </td> 
                  {selectReason && (  
                      <div className="popup-overlay-booking" style = {{ background : 'transparent'}}>
                        <div className="popup-booking"> 
                          <img className="sucessIcon-booking" src={sucessIcon} alt="Success Icon" />
                          <p>
                          {booking.status === 'hodPending' && <div > HOD approval Pending</div>}
                          {booking.status === 'rejected' && <div >Reason of Rejectation</div>}
                          {/* {booking.status === 'autoReject' && <div >booking has been automatically canceled as payment was not completed within 24 hours</div>} */}
                          {booking.status === 'pending' && <div >AMDIN approval Pending</div>}
                          {booking.status === 'approved' && <div >Your  Booking is Approved!. Please pay within next 24 hours.</div>}
                          
                        </p>
                        <button className="btn btn-primary btn-sm popupClose-booking" onClick={closeReason}>
                            Close
                            </button>
                        </div>
                      </div> 
                  )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              color: "#0275d8",
              backgroundColor: "#d8f4ff",
            }}
          >
            No Past Bookings !
          </h2>
          {/* <p>You currently have no upcoming bookings.</p> */}
        </div>
      )}
      
    </>
  );
};

export default AdminBookingHistory;
