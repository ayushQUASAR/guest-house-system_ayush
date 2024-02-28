import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookingDetails.css";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { FormContext } from "../ContextHooks/FormContext";
import { useLoginContext } from "../ContextHooks/LoginContext";

const inputStyle = {
  backgroundColor: "#f8f9fa",
  color: "black",
  fontWeight: 500,
};

const toastStyle = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const guestHouseOptions = [
  "Institute Guest House",
  "Mega Guest House",
  "SAC Guest House",
];
const maxRooms = [10, 12, 8];

const BookingDetails = ({ setDateDetails }) => {
  // Get today's date in India's time zone.
  const todayInIndia = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });
  const todayDate = new Date(todayInIndia);
  const todayYear = todayDate.getFullYear();
  const todayMonth = String(todayDate.getMonth() + 1).padStart(2, "0");
  const todayDay = String(todayDate.getDate()).padStart(2, "0");
  const todayDateString = `${todayYear}-${todayMonth}-${todayDay}`;

  const { isAdm } = useLoginContext();
  console.log("is admin : ", isAdm);
  const initialCheckinDate = isAdm
    ? todayDateString
    : (() => {
        const oneWeekLater = new Date(todayDate);
        oneWeekLater.setDate(oneWeekLater.getDate() + 7);
        const year = oneWeekLater.getFullYear();
        const month = String(oneWeekLater.getMonth() + 1).padStart(2, "0");
        const day = String(oneWeekLater.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      })();

  const [checkinDate, setCheckinDate] = useState(initialCheckinDate);

  const { updateFormData } = useContext(FormContext);

  // Calculate tomorrow's date based on the selected check-in date.
  const tomorrowDate = new Date(initialCheckinDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrowYear = tomorrowDate.getFullYear();
  const tomorrowMonth = String(tomorrowDate.getMonth() + 1).padStart(2, "0");
  const tomorrowDay = String(tomorrowDate.getDate()).padStart(2, "0");
  const tomorrowDateString = `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

  //adding limitation to the checkin and checkout date
  const maxAllowedCheckInDate = new Date(initialCheckinDate);

  maxAllowedCheckInDate.setDate(maxAllowedCheckInDate.getDate() + 21);
  const maxAllowedCheckoutDate = new Date(checkinDate);
  maxAllowedCheckoutDate.setDate(maxAllowedCheckoutDate.getDate() + 3);

  const [checkoutDate, setCheckoutDate] = useState(tomorrowDateString);

  const [durationOfStay, setDurationOfStay] = useState(1); // Default to 1 day.
  const [selectedGuestHouse, setSelectedGuestHouse] = useState(
    "Institute Guest House"
  );
  const [roomsSelected, setRoomsSelected] = useState(1);

  useEffect(() => {
    // Calculate the duration of stay when either check-in or check-out date changes.
    const duration =
      (new Date(checkoutDate).getTime() - new Date(checkinDate).getTime()) /
      (1000 * 3600 * 24);
    setDurationOfStay(duration);
    setDateDetails({ startDate: checkinDate, endDate: checkoutDate });

    updateFormData("arrivalDate", checkinDate);
    updateFormData("departureDate", checkoutDate);
    updateFormData("roomsSelected", roomsSelected);
    const finalGuestHouse =
      selectedGuestHouse === "Institute Guest House"
        ? 1
        : selectedGuestHouse === "Mega Guest House"
        ? 2
        : 3;
    updateFormData("guestHouseSelected", finalGuestHouse);
  }, [checkinDate, checkoutDate, selectedGuestHouse, roomsSelected]);



  const handleCheckinChange = (e) => {
    const selectedDate = e.target.value;
    console.log("handle check in function called ");
    if ( isAdm && selectedDate < todayDateString) {
      toast.error("Check-in date cannot be earlier than today.", toastStyle);
    } else if (!isAdm && selectedDate < initialCheckinDate) {
      const oneWeekLater = new Date(todayDate);
      oneWeekLater.setDate(oneWeekLater.getDate() + 7);
      const validDate = oneWeekLater.toISOString().split("T")[0];
      toast.error(
        `You can only book a room 1 week from now. Earliest allowed date: ${validDate}`,
        toastStyle
      );
    } else if (selectedDate > maxAllowedCheckInDate) {
      toast.error("Check-in date cannot be later than 21 days.", toastStyle);
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
      toast.error(
        "Check-out date cannot be equal to or earlier than the check-in date.",
        toastStyle
      );
    } else {
      const selectedCheckoutDate = new Date(selectedDate);
      const selectedCheckinDate = new Date(checkinDate);
      const selectedDurationOfStay =
        (selectedCheckoutDate.getTime() - selectedCheckinDate.getTime()) /
        (1000 * 3600 * 24);

      if (!isAdm && selectedDurationOfStay > 3) {
        toast.error("Maximum stay can be 3 days only!", toastStyle);
      } else {
        setCheckoutDate(selectedDate);
      }
    }
  };

  const handleGuestHouseChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedGuestHouse(selectedOption);
    setRoomsSelected(1); // Reset the number of rooms selected when the guest house changes.
  };

  const maxGuestHouseRooms =
    maxRooms[guestHouseOptions.indexOf(selectedGuestHouse)];
  const roomOptions = Array.from(
    { length: maxGuestHouseRooms },
    (_, i) => i + 1
  );
  

  const handleRoomsChange = (e) => {
    const selectedRooms = parseInt(e.target.value, 10);

    if (selectedRooms < 1) {
      toast.error("Minimum 1 room should be selected.", toastStyle);
    } else if (!isAdm && selectedRooms > 2) {
      toast.error("You can book maximum of 2 rooms only.", toastStyle);
    } else {
      // For admin, check if the selected rooms exceed the maximum rooms for the guesthouse
      if (isAdm) {
        if (selectedRooms > maxGuestHouseRooms) {
          toast.error(
            `Admin can book a maximum of ${maxGuestHouseRooms} rooms for ${selectedGuestHouse}.`,
            toastStyle
          );
          return;
        }
      }

      setRoomsSelected(selectedRooms);
    }
  };

  const handleReset = () => {
    if(isAdm){
      setCheckinDate(todayDateString);
    } else {
      setCheckinDate(initialCheckinDate)
    }
    setCheckoutDate(tomorrowDateString);
    
    setDurationOfStay(1);
    setSelectedGuestHouse("Institute Guest House");
    setRoomsSelected(1);
  };

  return (
    <div className="navbar">
      {/* <button type="button" className="btn btn-lg back-button">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        <HomeRoundedIcon color="white" />
        </NavLink>
      </button> */}
      <div className="form-group">
        <label className="booking-label selectguesthouse" htmlFor="guestHouse">
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
          CHECK IN :12:00 PM
        </label>
        <input
          type="date"
          className="form-control inputs"
          style={inputStyle}
          id="checkin"
          placeholder="Check In"
          value={checkinDate}
          onChange={handleCheckinChange}
          // min={isAdm ? todayDateString : initialCheckinDate} // Set the minimum date to today
          max={isAdm ? null : maxAllowedCheckInDate.toISOString().split("T")[0]}
        />
      </div>
      <div className="form-group">
        <label className="booking-label" htmlFor="checkout">
          CHECK OUT:11:00 am
        </label>
        <input
          type="date"
          className="form-control inputs"
          style={inputStyle}
          id="checkout"
          placeholder="Check Out"
          value={checkoutDate}
          onChange={handleCheckoutChange}
          // min={checkinDate} // Set the minimum date to the check-in date
          // max={isAdm ? null : maxAllowedCheckoutDate.toISOString().split("T")[0]}
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
          value={`${durationOfStay} ${durationOfStay === 1 ? "day" : "days"}`}
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
      <button
        type="button"
        className="btn btn-sm changeSelection"
        onClick={handleReset}
      >
        CLEAR
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BookingDetails;
