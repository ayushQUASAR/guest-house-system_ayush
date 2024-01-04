import React, { useState, useEffect } from 'react';
import { useUserContext } from '../ContextHooks/UserContext';


const BookingDetails = () => {
  const [bookings, setBookings] = useState([
    // { id: 1, rooms:[2,3], guestHouse: 'Guest House 1', bookingDate: '2023-11-01', checkIn: '2023-11-10', checkOut: '2023-11-07', status : 'Pending' },
    // { id: 2, rooms: [2,3], guestHouse: 'Guest House 2', bookingDate: '2023-11-05', checkIn: '2023-11-12', checkOut: '2023-11-17', status : 'Success' },
    // { id: 3, rooms: [2,3], guestHouse: 'Guest House 1', bookingDate: '2023-11-08', checkIn: '2023-11-20', checkOut: '2023-11-25', status : 'Pending'  },
  ]);
  const { userId } = useUserContext();
  const [user, setUserDetails] = useState([]);
   
  function formatDateToISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
    const day = String(date.getDate()).padStart(2, '0');
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
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        setUserDetails(data)
      }
      )
      .catch((err) => console.log(err.message));
    const today = new Date();

    let bookings_h = user.bookingHistory;
    if(bookings_h)
    {
    const final = bookings_h.map((booking) => {
      return {
        id: booking._id,
        guestHouse: booking.guestHouseAllotted,
        bookingDate: formatDateToISO(new Date(booking.createdAt)),
        checkIn: formatDateToISO(new Date(booking.startDate)),
        checkOut: formatDateToISO(new Date(booking.endDate)),
        rooms: booking.roomsAllotted,
        status: booking.status
      }
    });

    setBookings(final);}
    else setBookings(null)

  }, []);


  return (
    <div  >
      <div style={{ color: '#0275d8', backgroundColor: '#d8f4ff' }}>
        <h2>Booking History</h2>
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
          </tr>
        </thead>
        <tbody>
          {
          bookings!=null && bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.status === 'pending' || booking.status === 'rejected' ? "-" : formatRoomData()}</td>
              <td>{booking.status === 'pending' || booking.status === 'rejected' ? "-" : (booking.guestHouse === 1 ? "Guest House 1" : booking.guestHouse === 2 ? "Guest House 2" : "Guest House 3")}</td>
              <td>{booking.bookingDate}</td>
              <td>{`${booking.checkIn} / ${booking.checkOut}`}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
