// PopupModal.js
import React, { useState, useEffect } from 'react';

const PopupModal = ({ isOpen, onClose, title, onSave, rowData }) => {
  const [editedData, setEditedData] = useState({ ...rowData });

  useEffect(() => {
    setEditedData({ ...rowData });
  }, [rowData]);

  const handleSave = () => {
    onSave(editedData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          {/* <button onClick={onClose}>Close</button> */}
        </div>
        <div className="modal-content">
          <div className="field">
            <label>Field 1:</label>
            <input
              type="text"
              value={editedData.field1}
              onChange={(e) => setEditedData({ ...editedData, field1: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Field 2:</label>
            <input
              type="text"
              value={editedData.field2}
              onChange={(e) => setEditedData({ ...editedData, field2: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Field 3:</label>
            <input
              type="text"
              value={editedData.field3}
              onChange={(e) => setEditedData({ ...editedData, field3: e.target.value })}
            />
          </div>
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="close-btn" onClick={onClose}>Close</button>

        </div>
      </div>
    </div>
  );
};

export default PopupModal;
