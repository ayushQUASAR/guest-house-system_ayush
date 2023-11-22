// import React, { useEffect, useState, useRef } from 'react';
// import './MyComponent.css'; // Import the CSS file

// function MyComponent({n, maxRooms}) {
//   const [divs, setDivs] = useState(new Array(8).fill(false));
//   // const elementRef = useRef(null);

//   useEffect(()=> {
// setDivs(new Array(n).fill(false));
//   }, [n])
//   console.log(divs);

// const handleDivClick = (index) => {

//      setDivs((prev) => {
//       const new_state = prev;
//       new_state[index] = true;

//       return new_state;
//      })
//     // setHighlightedDiv(index+1);

//   };

//   // const divs = [];
//   // for (let i = 1; i <= n; i++) {
//   //   divs.push({ id: i, content: `Item ${i}` });
//   // }


//   return (
//     <div className="roombookingu">
//       {divs.map((element, index) => (
//         <div
//           key={index}
//           onClick={() => {handleDivClick(index)}}
//           className={`divtt ${divs[index] === true ? 'highlightedyy' : ''}`}
//         >
//           {/* {div.content} */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyComponent;

import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file
import { ContentCutOutlined } from '@mui/icons-material';

function MyComponent({ n, maxRooms, guesthouseid, setRooms }) {
  const [selectedDivs, setSelectedDivs] = useState([]);
  const [roomStatus, setRoomStatus] = useState([]);

  console.log("gno" + guesthouseid);

  useEffect(() => {
    setRooms(selectedDivs);
    // console.log(selectedDivs);
  }, [selectedDivs]);


  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/guestHouse")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setRoomStatus(data[guesthouseid - 1].rooms)
        console.log('data', data[guesthouseid - 1].rooms)
      })
      .catch((err) => console.error(err.message));
  }, []);

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

