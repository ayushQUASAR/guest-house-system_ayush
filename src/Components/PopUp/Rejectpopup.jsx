import React, { useState } from 'react';
 import './RejectPrompt.css'; // Import or define your custom styling

const CustomPrompt = ({ isOpen, onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleInputChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {
    if (reason.trim() === '') {
      window.alert('Please provide a reason for rejection.');
    } else {
      onSubmit(reason);
      onClose();
    }
  };

  return (
    <div className={`custom-prompt ${isOpen ? 'open' : 'closed'}`}>
      <div className="prompt-content">
        <div className="RejectPromptHeader">
            <h3>Reason for rejection:</h3>
            </div>
        <div className="RejectPromptTextArea">
        <textarea
          rows="4"
          cols="30"
          value={reason}
          onChange={handleInputChange}
        ></textarea>
        </div>
        
        <div className="RejectPromptSubmit">
        <button className="RejectPromptBtn"onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CustomPrompt;