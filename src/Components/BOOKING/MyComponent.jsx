import React, { useEffect, useState, useRef } from 'react';
import './MyComponent.css'; // Import the CSS file

function MyComponent({n}) {
  const [divs, setDivs] = useState(new Array(8).fill(false));
  // const elementRef = useRef(null);
  
  useEffect(()=> {
setDivs(new Array(n).fill(false));
  }, [n])
  console.log(divs);
 
const handleDivClick = (index) => {
    
     setDivs((prev) => {
      const new_state = prev;
      new_state[index] = true;

      return new_state;
     })
    // setHighlightedDiv(index+1);

  };

  // const divs = [];
  // for (let i = 1; i <= n; i++) {
  //   divs.push({ id: i, content: `Item ${i}` });
  // }


  return (
    <div className="roombookingu">
      {divs.map((element, index) => (
        <div
          key={index}
          onClick={() => {handleDivClick(index)}}
          className={`divtt ${divs[index] === true ? 'highlightedyy' : ''}`}
        >
          {/* {div.content} */}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
