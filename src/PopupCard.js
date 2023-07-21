// PopupCard.js
import React from 'react';

const PopupCard = ({ data, onClose }) => {
  return (
    <div className="popup-card">
      <div className="popup-content">
        {/* Render the details of all fields from the 'data' object */}
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
        {/* Add other fields as needed */}
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default PopupCard;
