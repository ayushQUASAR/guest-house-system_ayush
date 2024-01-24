import React, { useState, useEffect } from 'react';
import { useUserContext } from '../ContextHooks/UserContext';
import CancelPopUp from './CancelPopUp'; 
const UpcomingBooking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, rooms:[2,3], guestHouse: 'Guest House 1', bookingDate: '2023-11-01', checkIn: '2023-11-10', checkOut: '2023-11-07', status : 'Pending' },
    { id: 2, rooms: [2,3], guestHouse: 'Guest House 2', bookingDate: '2023-11-05', checkIn: '2023-11-12', checkOut: '2023-11-17', status : 'Success' },
    { id: 3, rooms: [2,3], guestHouse: 'Guest House 1', bookingDate: '2023-11-08', checkIn: '2023-11-20', checkOut: '2023-11-25', status : 'Pending'  },
  ]);
  const { userId } = useUserContext();
  const [user, setUserDetails] = useState([]);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       console.log(data);
  //       setUserDetails(data)
  //     }
  //     )
  //     .catch((err) => console.log(err.message));   
  // const bookings_H = user.bookingHistory;
  // if(bookings_H){
  //   const filteredBookings = bookings_H.filter((booking) => new Date(booking.startDate) > new Date() && (booking.status === "approved" || booking.status === "pending"))
  //   console.log(filteredBookings)
  //   const final = filteredBookings.map((booking) => {
  //   return {
  //     id: booking._id,
  //     guestHouse: booking.guestHouseAllotted,
  //     bookingDate: formatDateToISO(new Date(booking.createdAt)),
  //     checkIn: formatDateToISO(new Date(booking.startDate)),
  //     checkOut: formatDateToISO(new Date(booking.endDate)),
  //     rooms: booking.roomsAllotted,
  //     status: booking.status
      
  //   }})  ;
  //   // setBookings(final);
  // }+
  // else setBookings(null)
  // }, []);

  
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
      fetch(`${import.meta.env.VITE_API_URL}/booking/${id}`, {
        method: "DELETE"
      })
      .then((res) => res.json())
      .then((data) => console.log("booking",data))
      .catch((err) => console.log({message:err.message}))
      setShowPopup(true);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    }
  };
  return (
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
        {bookings !== null &&bookings.length > 0 &&bookings.map((booking, index) => (
            <tr key={booking.id}>
            <td>{index+1}</td>
            <td>{booking.status === 'approved' ? formatRoomData(booking.rooms) : "NOT ALLOTTED"}</td>
            <td>{booking.status === 'approved' ? (booking.guestHouse === 1 ? "Guest House 1" : booking.guestHouse === 2 ? "Guest House 2"  :"Guest House 3") : "NOT ALLOTTED"}</td>
            <td>{booking.bookingDate}</td>
            <td>{booking.checkIn}</td>
            <td>{booking.checkOut}</td>
            <td>{booking.status}</td>
            {booking.status === 'Pending' && (<td> < button className='btn' style = {{backgroundColor : 'red', color : 'white'}} onClick={() => handleCancel(booking.id)} disabled>Cancel</button>
          </td>)}
            {booking.status === 'Success' && (<td> < button className='btn' style = {{backgroundColor : 'red', color : 'white'}} onClick={() => handleCancel(booking.id)}>Cancel</button>
          </td>)}
            
          {booking.status === 'Success' && <td> <button className='btn' style = {{backgroundColor : 'green', color : 'white'}} onClick={()=>handlePayment()} disabled>Pay Now</button>
          </td>}
          {booking.status === 'Pending' && <td> <button className='btn' style = {{backgroundColor : 'green', color : 'white'}} onClick={()=>handlePayment()}>Pay Now</button>
          </td>}
          </tr>
        ))}
      </tbody>
    </table> 
    
    {showPopup && <CancelPopUp />} 
    </div>
  );
};

export default UpcomingBooking;
