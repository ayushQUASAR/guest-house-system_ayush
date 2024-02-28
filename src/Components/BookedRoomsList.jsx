import React, { useState, useEffect } from "react";
import BookedRoomPopUp from "./BookedRoomPopUp";
import { format, set } from "date-fns"; // Import format from date-fns for date formatting
import  "../style/BookedRoomsList.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookedRoomsList({ guestHouse = "INSTITUTE GUEST HOUSE" }) {
  const [roomStatus, setRoomStatus] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [roomID, setRoomID] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedGuestHouse = guestHouse;
  const [roomNo, setRoomNo] = useState([]);
  const roomNoForIgh = [1,2,7,8,9,10,11,12,13,14];
  const roomNoForMgh  = [201,202,203,204,205,206,301,302,303,304,305,306];
  const roomNoForSacgh = [302,303,304,401,402,403,404,405,406];
  

  const noOfRooms = {
    "INSTITUTE GUEST HOUSE": 10,
    "MEGA GUEST HOUSE": 12,
    "SAC GUEST HOUSE": 8
  };

  let index = 0;
  if (guestHouse === "INSTITUTE GUEST HOUSE") {
    index = 0;
  } else if (guestHouse === "MEGA GUEST HOUSE") {
    index = 1;
  } else {
    index = 2;
  }

  useEffect(() => {


    const fetchGuestHouseData = async (index) => {
      
      if(index==0){setRoomNo(roomNoForIgh); }
      if(index==1){setRoomNo(roomNoForMgh); }
      if(index==2){setRoomNo(roomNoForSacgh); }
      
      
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
          if (selectedDate >= checkInDate && selectedDate < checkOutDate) {
            roomStatus[booking.roomId - 1] = true;
          }
        });
        setRoomStatus(roomStatus);
      } catch (error) {
        console.error('Failed to fetch guest house data:', error);
      }
    };
  
    fetchGuestHouseData(index);
  }, [index, selectedDate]);

 
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
        let data = await response.json();

        // Filter data based on selected date and room id
        data = data.filter(item => 
          new Date(item?.checkInDate).toDateString() === new Date(selectedDate).toDateString() && 
          item.roomId === roomIndex + 1
        );

        console.log(data);
        if (data.length > 0) {
          setRoomID(data[0]);
          setBookingDetails(data);
        }
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
          onClick={() => handleRoomClick(i)} style={{
          textAlign: 'center',
          padding:'10px'}}
        >{roomNo[i]} </div>
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
