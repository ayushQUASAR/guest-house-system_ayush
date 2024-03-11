import React, { useState, useEffect } from "react";  
import sucessIcon from "../images/check2.png";
import '../style/bookingDetail.css';
import { useUserContext } from './ContextHooks/UserContext';
const AdminBookingHistory= () => {
  const [bookings, setBookings] = useState([]);
  const { userId } = useUserContext();
  const [selectReason, setSelectReason] = useState(false); 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGuestHouse, setFilterGuestHouse] = useState("");
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  function formatDateToISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const handleSearch = () => {
    setSearchButtonClicked(true);
  };
  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setFilterStatus("");
    setFilterGuestHouse("");
    setSearchButtonClicked(true);
  };
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
  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    switch (filterType) {
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "status":
        setFilterStatus(value);
        break;
      case "guestHouse":
        setFilterGuestHouse(value);
        break;
      default:
        break;
    }
  };
  const handleReject = () => {
    setSelectReason(true);
  }
  const closeReason = () => {
    setSelectReason(false);
  }
  useEffect(() => {
    if (searchButtonClicked) {
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
            const filteredBookings = final.filter((booking) => {
              return (
                (startDate === "" || booking.checkIn >= startDate) &&
                (endDate === "" || booking.checkOut <= endDate) &&
                (filterStatus === "" || booking.status === filterStatus) &&
                (filterGuestHouse === "" ||
                  (booking.guestHouse === 1 && filterGuestHouse === "Institute") ||
                  (booking.guestHouse === 2 && filterGuestHouse === "Mega") ||
                  (booking.guestHouse === 3 && filterGuestHouse === "SAC"))
              );
            });
            setBookings(filteredBookings);
          } else setBookings([]);
        })
        .catch((err) => console.log(err.message));
      setSearchButtonClicked(false);
    }
  }, [userId, startDate, endDate, filterStatus, filterGuestHouse, searchButtonClicked]);

// Fetch initial data on component mount
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
      } else {
        setBookings([]); // Set to an empty array if there are no bookings
      }
    })
    .catch((err) => console.log(err.message));
}, [userId]);
  return (
    <>
        <div>
          <div style={{ color: "#0275d8", backgroundColor: "#d8f4ff" }}>
            <h2 style={{ padding: '4px' }}>Booking History</h2>
          </div>
          <div className = "filter-box">
            <div className = "form-group">
            <label className = "labels">Start Date:</label>
            <input
              type="date"
              className="inputs"
              value={startDate}
              onChange={(e) => handleFilterChange(e, "startDate")}
              />
              </div>
              <div className = "form-group">

            <label className = "labels">End Date:</label>
            <input
              type="date"
              className="inputs"
              value={endDate}
              onChange={(e) => handleFilterChange(e, "endDate")}
              />

              </div>
              <div className = "form-group">

            <label className = "labels">Status:</label>
            <select
              className="inputs"
              value={filterStatus}
              onChange={(e) => handleFilterChange(e, "status")}
              >
              <option value="">All</option>
              <option value="autoReject">AutoReject</option>
              <option value="cancelled">Cancelled</option>
              <option value="checkedOut">checkOut</option>
              {/* Add more status options as needed */}
            </select>
                </div>
                <div className = "form-group">

            <label className = "labels">Guest House:</label>
            <select
              className="inputs"
              value={filterGuestHouse}
              onChange={(e) => handleFilterChange(e, "guestHouse")}
              >
              <option value="">All</option>
              <option value="Institute">Institute Guest House</option>
              <option value="Mega">Mega Guest House</option>
              <option value="SAC">SAC Guest House</option>
            </select> 
              </div>
            <button className="btn" style = {{backgroundColor :'white', color : 'black', margin : '10px' }} onClick={handleSearch}>
              Search
            </button>
            <button className="btn" style = {{backgroundColor :'red', color : 'white', margin : '10px' }} onClick={handleClear}>
              Clear
            </button>
      </div>
          <table className="tables-data">
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
                      booking.status === "rejected" ||
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
                        <div className="btn btn-primary" onClick={handleReject}>
                          View
                        </div>}
                      {booking.status === 'rejected' &&
                        <div className="btn btn-primary" onClick={handleReject}>
                          Reason
                        </div>}
                      {booking.status === 'pending' &&
                        <div className="btn btn-primary" onClick={handleReject}>
                          View
                        </div>}
                      {booking.status === 'approved' &&
                        <div className="btn btn-primary" onClick={handleReject}>
                          View
                        </div>}
                    </td>
                    {selectReason && (
                      <div className="popup-overlay-booking" style={{ background: 'transparent' }}>
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
    </>
  );
};

export default AdminBookingHistory;
