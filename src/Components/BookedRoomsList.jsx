import React, { useState, useEffect } from "react";
import BookedRoomPopUp from "./BookedRoomPopUp";
import { format, set } from "date-fns"; // Import format from date-fns for date formatting
import  "../style/BookedRoomsList.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookedRoomsList({ guestHouse = "MAIN GUEST HOUSE" }) {
  const [roomStatus, setRoomStatus] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [roomID, setRoomID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedGuestHouse = guestHouse;

  // useEffect(() => {
  //   fetch(import.meta.env.VITE_API_URL + "/guestHouse")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data[index].rooms);
  //       setRoomStatus(data[index].rooms);
  //     })
  //     .catch((err) => console.error(err.message));
  // }, [guestHouse]);

  const noOfRooms = {
    "GUEST HOUSE": 10,
    "SAC GUEST HOUSE": 8,
    "MEGA GUEST HOUSE": 10,
  };

  let index = 0;
  if (guestHouse === "GUEST HOUSE") {
    index = 0;
  } else if (guestHouse === "MEGA GUEST HOUSE") {
    index = 1;
  } else {
    index = 2;
  }

  useEffect(() => {
    fetchGuestHouseData(index);
  }, [index, selectedDate]);

  const fetchGuestHouseData = async (index) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL +
        `/booking/approved/approved?guestHouse=${index + 1}`
      );
      const data = await response.json();
      const roomStatus = Array(noOfRooms[guestHouse]).fill(false);
      data.forEach((booking) => {
        const checkInDate = new Date(booking.checkInDate);
        const checkOutDate = new Date(booking.checkOutDate);
        if (selectedDate >= checkInDate && selectedDate <= checkOutDate) {
          roomStatus[booking.roomId - 1] = true;
        }
      });
      setRoomStatus(roomStatus);
    } catch (error) {
      console.error('Failed to fetch guest house data:', error);
    }
  };

  const handleRoomClick = async (roomIndex) => {
    if (!roomStatus[roomIndex]) {
      setSelectedRooms((prevSelectedRooms) => {
        const newSelectedRooms = [...prevSelectedRooms];
        if (newSelectedRooms.includes(roomIndex)) {
          newSelectedRooms.splice(newSelectedRooms.indexOf(roomIndex), 1);
        } else {
          newSelectedRooms.push(roomIndex);
        }
        return newSelectedRooms;
      });
    }
    if (roomStatus[roomIndex] == true) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL +
            `/booking/approved/approved?guestHouse=${index + 1}`
        );
        const data = await response.json();
        console.log(data);
        data.forEach((element) => {
          if (element.roomId == roomIndex + 1) {
            console.log(element);
            setRoomID(element);
          }
        });
        setBookingDetails(data);
        // setRoomID(data[roomIndex]);
      } catch (error) {
        console.error("Error fetching booking details:", error.message);
      }
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

  };

  const roomBoxes = Array.from(
    { length: noOfRooms[selectedGuestHouse] },
    (_, i) => {
      // if (roomStatus[i]) {
      //   return null;
      // }

      console.log(roomStatus);
  
      return (
        <div
          key={i + 1}
          className={`roomBox ${
            roomStatus[i]
            ? "isBooked" :
            selectedRooms.includes(i) ? "isSelected" : "isAvailable"
          }`}
          onClick={() => handleRoomClick(i)}
        ></div>
      );
    }
  );
  
  return (
    <>
      <div className="roomsHeading">
        SELECT ROOM (s)
        <div className="statusOfRooms">
          <span className="available">Available</span>
          <span className="booked">Booked</span>
          <span className="selected">Selected</span>
        </div>
      </div>
      <DatePicker className="DATECSS" selected={selectedDate} onChange={handleDateChange} />
      <div className="guestHouseBoxes">{roomBoxes}</div>
  
      {bookingDetails && (
        <BookedRoomPopUp
          details={roomID}
          onClose={() => setBookingDetails(null)}
        />
      )}
    </>
  );
}

export default BookedRoomsList;
