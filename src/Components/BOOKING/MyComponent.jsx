

import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file
import { ContentCutOutlined } from '@mui/icons-material';

function MyComponent({ onDataChange, n, maxRooms, guesthouseid, setRooms, userStartDate, userEndDate}) {
  const [selectedDivs, setSelectedDivs] = useState([]);
  const [roomStatus, setRoomStatus] = useState([]);

  console.log("gno" + guesthouseid);

  useEffect(() => {
    setRooms(selectedDivs);
    // console.log(selectedDivs);
  }, [selectedDivs]);

  console.log("selectedDivs.length :"+selectedDivs.length)
  onDataChange(selectedDivs.length);


  // useEffect(() => {
  //   fetch(import.meta.env.VITE_API_URL + "/guestHouse")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setRoomStatus(data[guesthouseid - 1].rooms)
  //       console.log('data', data[guesthouseid - 1].rooms)
  //     })
  //     .catch((err) => console.error(err.message));
  // }, []);

  const noOfRooms = {
    "GUEST HOUSE": 10,
    "SAC GUEST HOUSE": 8,
    "MEGA GUEST HOUSE": 10,
  };

  useEffect(() => {
    const fetchGuestHouseData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/guestHouse");
        const data = await response.json();
        let roomStatus = data[guesthouseid - 1].rooms;
    
        const bookingResponse = await fetch(import.meta.env.VITE_API_URL + '/admin/bookingApproval');
        const bookingData = await bookingResponse.json();
    
        bookingData.forEach((bookingApproval) => {
          if (bookingApproval.status === 'reject') {
            return;
          }
          const startDate = bookingApproval.booking.startDate;
          const endDate = bookingApproval.booking.endDate;

          console.log("userStartDate :"+userStartDate);
          console.log("userEndDate :"+userEndDate);
          console.log("startDate :"+startDate);
          console.log("endDate :"+endDate);

          if (startDate <= userEndDate && endDate >= userStartDate) {
            bookingApproval.roomsAllotted.forEach((roomId) => {
              roomStatus[roomId - 1] = false;
            });
          }
        });
    
        setRoomStatus(roomStatus);
      } catch (error) {
        console.error('Failed to fetch guest house data:', error);
      }
    };
    
    fetchGuestHouseData();
  }, [guesthouseid]);
  
  // const fetchGuestHouseData = async () => {
  //   try {
  //     const response = await fetch(
  //       import.meta.env.VITE_API_URL + '/admin/bookingApproval'
  //     );
  //     const data = await response.json();
  //     const roomStatus = Array(noOfRooms[guesthouseid]).fill(false);
  //     data.forEach((bookingApproval) => {
  //       if (bookingApproval.status === 'reject') {
  //         return;
  //       }
  //       const startDate = new Date(bookingApproval.booking.startDate);
  //       const endDate = new Date(bookingApproval.booking.endDate);
  //       for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
  //         bookingApproval.roomsAllotted.forEach((roomId) => {
  //           roomStatus[roomId - 1] = true;
  //         });
  //       }
  //     });
  //     setRoomStatus(roomStatus);
  //     console.log('roomStatus: ', roomStatus);
  //   } catch (error) {
  //     console.error('Failed to fetch guest house data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchGuestHouseData();
  // }, [guesthouseid]);

  const [count, setcount] = useState(selectedDivs.length);
  const handleDivClick = (divId) => {

    if (roomStatus[divId - 1] === false) {

      
     

      if (selectedDivs.includes(divId)) {
        // If the div is already selected, remove it
        setSelectedDivs(selectedDivs.filter((id) => id !== divId));
     
      } else if (selectedDivs.length < maxRooms) {
        // Check if the maximum number of selected rooms has not been reached
        setSelectedDivs([...selectedDivs, divId]);
       
      }
     
    

      
    }
  };

  const divs = [];
  for (let i = 1; i <= n; i++) {
    divs.push({ id: i, content: `Item ${i}`, cn: 'divtt ' });
  }

  // console.log(divs);
  return (
    <div className="roombookingu">
      {divs.map((div) => (
        <div
          key={div.id}
          onClick={() => handleDivClick(div.id)}
          className={div.cn + `${roomStatus[div.id - 1] ? 'bookedRoom' : (selectedDivs.includes(div.id) ? 'highlightedyy' : '')}`}
        // className={div.cn + `${(selectedDivs.includes(div.id)&& !roomStatus[div.id-1]) ? 'highlightedyy' : ''}`}
        >
          {/* {div.content} */}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

