
import React from 'react';

import React, { useState } from 'react';
import './popup.css'; // Import your CSS file for styling
import CancelForm from './CancelForm';

const Popup = ({ isOpen, closePopup }) => {
  return (
    <div>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <CancelForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
