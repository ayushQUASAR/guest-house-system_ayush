

import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file

function MyComponent({ n, maxRooms, setRooms}) {
  const [selectedDivs, setSelectedDivs] = useState([]);

  console.log(selectedDivs);

useEffect(()=> {
setRooms(selectedDivs);
// console.log(selectedDivs);
}, [selectedDivs]);

  const handleDivClick = (divId) => {
   
    if (selectedDivs.includes(divId)) {
      // If the div is already selected, remove it
      setSelectedDivs(selectedDivs.filter((id) => id !== divId));
    } else if (selectedDivs.length < maxRooms) {
      // Check if the maximum number of selected rooms has not been reached
      setSelectedDivs([...selectedDivs, divId]);
    }
  };

  const divs = [];
  for (let i = 1; i <= n; i++) {
    divs.push({ id: i, content: `Item ${i}` });
  }


  return (
    <div className="roombookingu">
      {divs.map((div) => (
        <div
          key={div.id}
          onClick={() => handleDivClick(div.id)}
          className={`divtt ${selectedDivs.includes(div.id) ? 'highlightedyy' : ''}`}
        >
    
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

