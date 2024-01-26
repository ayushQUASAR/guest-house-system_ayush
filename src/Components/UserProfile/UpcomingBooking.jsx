import React, { useState, useEffect } from 'react';
import { useUserContext } from '../ContextHooks/UserContext';
import CancelPopUp from './CancelPopUp'; 
const UpcomingBooking = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [bookingId,setBookingId] = useState('')
  const { userId } = useUserContext();
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    // Fetch upcoming bookings data from the database
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory/upcoming`)
      .then((res) => res.json())
      .then((data) => {
        console.log("upcoming booking data : ",data);
        setBookings(data); // Update the state with fetched data
      })
      .catch((err) => console.log("Error while retrieving booking data of user :", err.message));
  }, [userId]);

  
  function formatDateToISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const formatRoomData = (room) => {
    let str = "Room No. ";
    if(room.length == 1) {
      return str + room[0];
    }
    for(let i = 0;i<room.length-1;i++) {
        str+= `${room[i]}, `;
    }

    str+=  ` ${room[room.length-1]}`;
    return str;
  }

  const handlePayment = () => {
    window.confirm('Do you want to proceed for payment?')
  };

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setShowPopup(true);
    }
    setBookingId(id);
  };

  const handleBookingDeletion = (id) => {
    // Assuming you have an API endpoint to delete the booking on the server
    fetch(`${import.meta.env.VITE_API_URL}/booking/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Booking deleted:', data);

        // If the booking deletion is successful, update the state
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
      })
      .catch((err) => console.log("Error while deleting booking from database :",err.message ));
  };


  return (
    <>
    {bookings.length > 0 ? (
      <div>
    <div className = 'row' style = {{padding : '3%'}}>
    <h2 style = {{color : '#0275d8', backgroundColor : '#d8f4ff'}}>Upcoming Booking</h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Room(s)</th>
          <th>Guest House</th>
          <th>Booking Date</th>
          <th>Check-In</th>
          <th>Check-Out</th>
          <th>Status</th> 
          <th>Cancel Booking</th>
          <th>Payment </th>
        </tr>
      </thead>
      <tbody>
        {bookings !== null && bookings.length > 0 && bookings.map((booking, index) => (
          <tr key={booking._id}>
            <td>{index+1}</td>
            <td>{booking.status === 'approved' ? formatRoomData(booking.roomsSelected) : "NOT ALLOTTED"}</td>
            <td>{booking.status === 'approved' ? (booking.guestHouseSelected === 1 ? "Guest House 1" : booking.guestHouseSelected === 2 ? "Guest House 2"  :"Guest House 3") : "NOT ALLOTTED"}</td>
            <td>{formatDateToISO(booking.createdAt)}</td>
            <td>{formatDateToISO(booking.startDate)}</td>
            <td>{formatDateToISO(booking.endDate)}</td>
            <td>{booking.status}</td>
            {booking.status === 'pending' && (<td> < button className='btn' style = {{backgroundColor : 'red', color : 'white'}} onClick={() => handleCancel(booking._id)} disabled>Cancel</button>
          </td>)}
            {booking.status === 'approved' && (<td> < button className='btn' style = {{backgroundColor : 'red', color : 'white'}} onClick={() => handleCancel(booking._id)}>Cancel</button>
          </td>)}
            
          {booking.status === 'approved' && <td> <button className='btn' style = {{backgroundColor : 'green', color : 'white'}} onClick={()=>handlePayment()} disabled>Pay Now</button>
          </td>}
          {booking.status === 'pending' && <td> <button className='btn' style = {{backgroundColor : 'green', color : 'white'}} onClick={()=>handlePayment()}>Pay Now</button>
          </td>}
          </tr>
        ))}
      </tbody>
    </table> 
    </div>
    ) : (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h2 style={{ fontSize:'50px',color: '#0275d8', backgroundColor: '#d8f4ff' }}>No Upcoming Bookings</h2>
        {/* <p>You currently have no upcoming bookings.</p> */}
      </div>
    )}
    
    {showPopup && (
      <CancelPopUp isOpen={showPopup} closePopup={() => setShowPopup(false)}>
          <CancelForm
            bookingId={bookingId}
            onDeleteSuccess={() => handleBookingDeletion(bookingId)}
            />
        </CancelPopUp>
      )}
    
  </>
  );
};

export default UpcomingBooking;