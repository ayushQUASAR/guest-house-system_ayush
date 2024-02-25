

import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file
import { ContentCutOutlined } from '@mui/icons-material';

function MyComponent({ onDataChange, n, maxRooms, guesthouseid, setRooms, userStartDate, userEndDate }) {


  const [selectedDivs, setSelectedDivs] = useState([]);
  const [roomStatus, setRoomStatus] = useState([]);

  console.log("gno" + guesthouseid);
  const noOfRooms = [10, 12, 8];

  const [roomNo, setRoomNo] = useState([]);
  const roomNoForIgh = [1, 2, 7, 8, 9, 10, 11, 12, 13, 14];
  const roomNoForMgh = [201, 202, 203, 204, 205, 206, 301, 302, 303, 304, 305, 306];
  const roomNoForSacgh = [302, 303, 304, 401, 402, 403, 404, 405, 406];


  useEffect(() => {
    setRooms(selectedDivs);  
 

  }, [selectedDivs]);

  console.log("selectedDivs.length :" + selectedDivs.length)
  onDataChange(selectedDivs.length);




  useEffect(() => {
    if (guesthouseid == 1) { setRoomNo(roomNoForIgh); }
    if (guesthouseid == 2) { setRoomNo(roomNoForMgh); }
    if (guesthouseid == 3) { setRoomNo(roomNoForSacgh); }


    const fetchGuestHouseData = async () => {
      try {

        const response = await fetch(import.meta.env.VITE_API_URL + "/guestHouse");
        const data = await response.json();
        console.log("response",response);
        let rooms = new Array(noOfRooms[guesthouseid-1]).fill(false);
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
          style={{padding:'5px 5px 5px 5px'}}
          onClick={() => handleDivClick(div.id)}
          className={div.cn + `${roomStatus[div.id - 1] ? 'bookedRoom' : (selectedDivs.includes(div.id) ? 'highlightedyy' : '')}`}
        // className={div.cn + `${(selectedDivs.includes(div.id)&& !roomStatus[div.id-1]) ? 'highlightedyy' : ''}`}
        >
          {roomNo[div.id-1]}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

