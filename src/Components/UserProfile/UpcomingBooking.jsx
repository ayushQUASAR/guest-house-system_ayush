import React, { useState } from 'react';

const UpcomingBooking = () => {
  const [bookings, setBookings] = useState([
    
    { id: 1, room: 'Room A', guestHouse: 'Guest House 1', bookingDate: '2023-11-01', checkIn: '2023-11-10', checkOut: '2023-11-07', status : 'Pending' },
    { id: 2, room: 'Room B', guestHouse: 'Guest House 2', bookingDate: '2023-11-05', checkIn: '2023-11-12', checkOut: '2023-11-17', status : 'Success' },
    { id: 3, room: 'Room C', guestHouse: 'Guest House 1', bookingDate: '2023-11-08', checkIn: '2023-11-20', checkOut: '2023-11-25', status : 'Pending'  },
  ]); 
  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
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
          <th>Room No.</th>
          <th>Guest House</th>
          <th>Booking Date</th>
          <th>Check-In</th>
          <th>Check-Out</th>
          <th>Status</th> 
          <th>Cancel Button</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
            <tr key={booking.id}>
            <td>{booking.id}</td>
            <td>{booking.room}</td>
            <td>{booking.guestHouse}</td>
            <td>{booking.bookingDate}</td>
            <td>{booking.checkIn}</td>
            <td>{booking.checkOut}</td>
            <td>{booking.status}</td>
            <td> <button className='btn' style = {{backgroundColor : 'red', color : 'white'}} onClick={() => handleCancel(booking.id)}>Cancel</button>
          </td>
          </tr>
        ))}
    </tbody>
    </table>
    </div>
  );
};

export default UpcomingBooking;
