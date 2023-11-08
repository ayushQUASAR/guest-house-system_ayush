import React, { useState, useEffect } from "react";
import "./BookingDetails.css";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const inputStyle = {
  backgroundColor: "#f8f9fa",
  color: "black",
  fontWeight: 500,
};

const guestHouseOptions = ["Guest House 1", "Guest House 2", "Guest House 3"];
const maxRooms = [10, 8, 12];

const BookingDetails = ({ setDateDetails }) => {
  // Get today's date in India's time zone.
  const todayInIndia = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const todayDate = new Date(todayInIndia);
  const todayYear = todayDate.getFullYear();
  const todayMonth = String(todayDate.getMonth() + 1).padStart(2, "0");
  const todayDay = String(todayDate.getDate()).padStart(2, "0");
  const todayDateString = `${todayYear}-${todayMonth}-${todayDay}`;

  const [checkinDate, setCheckinDate] = useState(todayDateString);

  // Calculate tomorrow's date based on the selected check-in date.
  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowYear = tomorrowDate.getFullYear();
  const tomorrowMonth = String(tomorrowDate.getMonth() + 1).padStart(2, "0");
  const tomorrowDay = String(tomorrowDate.getDate()).padStart(2, "0");
  const tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

  const [checkoutDate, setCheckoutDate] = useState(tomorrowDateString);

  const [durationOfStay, setDurationOfStay] = useState(1); // Default to 1 day.
  const [selectedGuestHouse, setSelectedGuestHouse] = useState("Guest House 1");
  const [roomsSelected, setRoomsSelected] = useState(1);

  useEffect(() => {
    // Calculate the duration of stay when either check-in or check-out date changes.
    const duration = (new Date(checkoutDate).getTime() - new Date(checkinDate).getTime()) / (1000 * 3600 * 24);
    setDurationOfStay(duration);
    setDateDetails({ startDate: checkinDate, endDate: checkoutDate });
  }, [checkinDate, checkoutDate]);

  const handleCheckinChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < todayDateString) {
      alert("Check-in date cannot be earlier than today.");
    } else {
      setCheckinDate(selectedDate);

      // Calculate tomorrow's date based on the selected check-in date and update check-out date.
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayYear = nextDay.getFullYear();
      const nextDayMonth = String(nextDay.getMonth() + 1).padStart(2, "0");
      const nextDayDay = String(nextDay.getDate()).padStart(2, "0");
      const nextDayString = `${nextDayYear}-${nextDayMonth}-${nextDayDay}`;
      setCheckoutDate(nextDayString);
    }
  };

  const handleCheckoutChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate <= checkinDate) {
      alert("Check-out date cannot be equal to or earlier than the check-in date.");
    } else {
      setCheckoutDate(selectedDate);
    }
  };

  const handleGuestHouseChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedGuestHouse(selectedOption);
    setRoomsSelected(1); // Reset the number of rooms selected when the guest house changes.
  };

  // Generate room options based on the selected guest house's maximum limit
  const roomOptions = Array.from({ length: maxRooms[guestHouseOptions.indexOf(selectedGuestHouse)] }, (_, i) => i + 1);

  const handleRoomsChange = (e) => {
    const selectedRooms = parseInt(e.target.value, 10);
    if (selectedRooms < 1) {
      alert("Minimum 1 room should be selected.");
    } else if (selectedRooms > maxRooms[guestHouseOptions.indexOf(selectedGuestHouse)]) {
      alert(`Maximum ${maxRooms[guestHouseOptions.indexOf(selectedGuestHouse)]} rooms are allowed for this guest house.`);
    } else {
      setRoomsSelected(selectedRooms);
    }
  };

  const handleReset = () => {
    setCheckinDate(todayDateString);
    setCheckoutDate(tomorrowDateString);
    setDurationOfStay(1);
    setSelectedGuestHouse("Guest House 1");
    setRoomsSelected(1);
  };

  return (
    <div className="navbar">
      <button type="button" className="btn btn-lg back-button">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        <HomeRoundedIcon color="white" />
        </NavLink>
      </button>
      <div className="form-group">
        <label className="booking-label" htmlFor="guestHouse">
          SELECT GUEST HOUSE
        </label>
        <select
          className="form-control inputs"
          style={inputStyle}
          id="guestHouse"
          value={selectedGuestHouse}
          onChange={handleGuestHouseChange}
        >
          {guestHouseOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="checkin">
          CHECK IN
        </label>
        <input
          type="date"
          className="form-control inputs"
          style={inputStyle}
          id="checkin"
          placeholder="Check In"
          value={checkinDate}
          onChange={handleCheckinChange}
          min={todayDateString} // Set the minimum date to today
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="checkout">
          CHECK OUT
        </label>
        <input
          type="date"
          className="form-control inputs"
          style={inputStyle}
          id="checkout"
          placeholder="Check Out"
          value={checkoutDate}
          onChange={handleCheckoutChange}
          min={checkinDate} // Set the minimum date to the check-in date
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="stayduration">
          DURATION OF STAY
        </label>
        <input
  type="text"
  className="form-control inputs"
  style={inputStyle}
  id="stayduration"
  placeholder="Duration of Stay"
  value={`${durationOfStay} ${durationOfStay === 1 ? 'day' : 'days'}`}
  readOnly
/>

      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="rooms">
          NUMBER OF ROOMS
        </label>
        <select
            className="form-control inputs"
            style={inputStyle}
            id="rooms"
            value={roomsSelected}
            onChange={handleRoomsChange}
          >
            {roomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="button" className="btn btn-sm changeSelection" onClick={handleReset}>
          CLEAR
        </button>
      </div>
    );
}

export default BookingDetails;

