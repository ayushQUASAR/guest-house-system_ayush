

import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file
import { ContentCutOutlined } from '@mui/icons-material';

function MyComponent({ onDataChange, n, maxRooms, guesthouseid, setRooms, userStartDate, userEndDate}) {
  const [selectedDivs, setSelectedDivs] = useState([]);
  const [roomStatus, setRoomStatus] = useState([]);
  
  console.log("gno" + guesthouseid);
  const noOfRooms = [10, 12, 8];

  useEffect(() => {
    setRooms(selectedDivs);
    // console.log(selectedDivs);
  }, [selectedDivs]);

  console.log("selectedDivs.length :"+selectedDivs.length)
  onDataChange(selectedDivs.length);




  // const noOfRooms = {
  //   "MAIN GUEST HOUSE": 10,
  //   "MEGA GUEST HOUSE": 12,
  //   "SAC GUEST HOUSE": 8,
  // };


  useEffect(() => {
    const fetchGuestHouseData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + "/guestHouse");
        const data = await response.json();
        
    let rooms = new Array(noOfRooms[guesthouseid]).fill(false);
    console.log(rooms);
        const bookingResponse = await fetch(import.meta.env.VITE_API_URL + '/admin/bookingApproval');
        const bookingData = await bookingResponse.json();
        
    
        bookingData.forEach((bookingApproval) => {
          if (bookingApproval.status === 'reject') {
            return;
          }
          const startDate = bookingApproval.booking.startDate;
          const endDate = bookingApproval.booking.endDate;
  
       
  
          if (bookingApproval.guestHouseAllotted === guesthouseid && startDate >= userStartDate && endDate <= userEndDate) {
            console.log("rooms allotted: ", bookingApproval.roomsAllotted)
            bookingApproval.roomsAllotted.forEach((roomId) => {

              // setRoomStatus((prev) => {
              //   const new_state = prev;
              //   new_state[roomId-1] = true;
              // })
              rooms[roomId - 1] = true;
            });
          }
        });
    
        console.log(rooms);
        setRoomStatus(rooms);
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
          {div.id}88
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

