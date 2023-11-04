import React, { useState } from 'react';
import './MyComponent.css'; // Import the CSS file

function MyComponent({n}) {
  const [highlightedDiv, setHighlightedDiv] = useState(null);

  const handleDivClick = (divId) => {
    setHighlightedDiv(divId);
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
          className={`divtt ${highlightedDiv === div.id ? 'highlightedyy' : ''}`}
        >
          {/* {div.content} */}
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
