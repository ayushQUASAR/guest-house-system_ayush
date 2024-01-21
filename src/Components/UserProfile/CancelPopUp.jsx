import React, { useState } from 'react';
import './Popup.css'; // Import your CSS file for styling
import CancelForm from './CancelForm';

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  // const openPopup = () => {
  //   setIsPopupOpen(true);
  // };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* <button onClick={openPopup}>Open Popup</button> */}

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <CancelForm/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
