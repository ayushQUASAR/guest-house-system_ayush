import React, { useState } from 'react';
import './cancelpopup.css'; 
import CancelForm from './CancelForm';

const Popup = ({ isOpen, closePopup }) => {
  return (
    <div>
      {isOpen && (
        <div className="popup-overlay-cancel">
          <div className="popup-content-cancel">
            <span className="close-btn-cancel" onClick={closePopup}>
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
