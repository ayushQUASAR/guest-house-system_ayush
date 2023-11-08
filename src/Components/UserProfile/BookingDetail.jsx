import React, { useState, useEffect } from 'react';

const BookingDetails = () => {
  const [bookings, setBookings] = useState([
    { id: 1, room: 'Room A', guestHouse: 'Guest House 1', bookingDate: '2023-11-01', checkIn: '2023-11-10', checkOut: '2023-11-07' },
    { id: 2, room: 'Room B', guestHouse: 'Guest House 2', bookingDate: '2023-11-05', checkIn: '2023-11-12', checkOut: '2023-11-17' },
    { id: 3, room: 'Room C', guestHouse: 'Guest House 1', bookingDate: '2023-11-08', checkIn: '2023-11-20', checkOut: '2023-11-25' },
  ]); 
  useEffect(() => {
    const today = new Date(); 
    setBookings((prevBookings) =>
      prevBookings.map((booking) => {
        const checkOutDate = new Date(booking.checkOut);
        if (checkOutDate < today) {
          return { ...booking, status: 'Complete' };
        }
        return booking;
      })
    );
  }, []); 
  return (
    <div  > 
    <div style = {{color : '#0275d8', backgroundColor : '#d8f4ff'}}>
      <h2>Booking History</h2>
    </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Room ID</th>
            <th>Guest House</th>
            <th>Booking Date</th>
            <th>Check In / Out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.room}</td>
              <td>{booking.guestHouse}</td>
              <td>{booking.bookingDate}</td>
              <td>{`${booking.checkIn} / ${booking.checkOut}`}</td>
              <td>{booking.status || 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
