import React, { useState, useEffect } from "react";
import { useUserContext } from "../ContextHooks/UserContext";

const BookingDetails = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const { userId } = useUserContext();

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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/bookingHistory`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let bookings_h = data.bookingHistory;
        if (bookings_h) {
          const final = bookings_h.map((booking) => {
            return {
              id: booking._id,
              guestHouse: booking.guestHouseAllotted,
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
  }, [userId]);

  return (
    <>
      {bookings != null && bookings.length > 0 ? (
        <div>
          <div style={{ color: "#0275d8", backgroundColor: "#d8f4ff" }}>
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
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>
                    {booking.status === "pending" ||
                    booking.status === "rejected"
                      ? "-"
                      : formatRoomData(booking.rooms)}
                  </td>
                  <td>
                    {booking.status === "pending" ||
                    booking.status === "rejected"
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

export default BookingDetails;
