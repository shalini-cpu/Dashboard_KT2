// Content.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import PopupModal from './PopupModal';
import PopupCard from './PopupCard';


const Content = ({ tabs,showProductDetails, productDetails }) => {
  // Sample data for the table in each tab
  const initialTableData = [
    [
      { id: 1, field1: 'Value 1', field2: 'Value A', field3: 'Text 1' },
      { id: 2, field1: 'Value 2', field2: 'Value B', field3: 'Text 2' },
      // Add more rows as needed
    ],
    [
      { id: 3, field1: 'Value 3', field2: 'Value C', field3: 'Text 3' },
      { id: 4, field1: 'Value 4', field2: 'Value D', field3: 'Text 4' },
      // Add more rows as needed
    ],
    // Add more tab data as needed
  ];

  const [tableData, setTableData] = useState(initialTableData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedRowData, setEditedRowData] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs && tabs[0]);
  const [showPopup, setShowPopup] = useState(false);

  // State to manage card visibility and field details
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState({});

  // Function to handle opening the modal for editing a row
  const handleModalOpen = (row) => {
    setIsModalOpen(true);
    setEditedRowData({ ...row });
  };
    // Handle the "Show Details" button click on the table row


    
  

  // Function to handle saving changes from the modal
  const handleModalSave = (updatedData) => {
    // Find the edited row in the tableData array and update it
    const tabDataIndex = tabs.findIndex((tab) => tab.title === activeTab.title);
    if (tabDataIndex !== -1 && editedRowData) {
      const rowIndex = tableData[tabDataIndex].findIndex((row) => row.id === editedRowData.id);
      if (rowIndex !== -1) {
        const updatedTableData = [...tableData];
        updatedTableData[tabDataIndex][rowIndex] = updatedData;
        setTableData(updatedTableData);
      }
    }
    setIsModalOpen(false);
  };

  // Function to handle showing field details in the card
  const handleShowCard = (row) => {
    setShowCard(true);
    setCardData(row);
  };

  if (!tabs || tabs.length === 0) {
    return <div>No tabs found.</div>;
  }
  let cardContent = null;
  if (showProductDetails) {
    cardContent = (
      <div className="card">
        <h2>{productDetails.title}</h2>
        <p>{productDetails.description}</p>
        <p>{productDetails.price}</p>
        {/* Add more product details here */}
      </div>
    );
  }

  return (
    <div className="content">
      <h1>Welcome to the Dashboard!</h1>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {cardContent}

      {showCard && (
        <div className="popup-background">
          <div className="popup-card card">
          <div className="card-body">
          <h2 className='card-title'>Field Details</h2>
          {tableData[activeTab.index].map((row) => (
            <>
          <div className='row'>

                {/* <div className="popup-card"> */}
                {/* <div className="popup-content" key={row.id}> */}
                  {/* Render the details of all fields from the 'data' object */}
                 <div className='col-md-3'>
                  <p className='card-text'>{row.field1}</p>
                  </div>
                  <div className='col-md-3'>

                  <p className='card-text'>{row.field2}</p>
                  </div>
                  <div className='col-md-3'>

                  <p className='card-text'>{row.field3}</p>
                  </div>

                  {/* Add other fields as needed */}
                {/* </div> */}


              {/* </div> */}
              </div>

                      </>

      ))}
                      <div className="card-footer">


                <button onClick={() => setShowCard(false)}>Close</button>
                </div>


      </div>
      </div>
      </div>
      )}
      
      <div className="content-outline">
        {/* Add Product button */}

        {/* Render table content */}
        {activeTab && (
          <div>
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>Field 1</th>
                  <th>Field 2</th>
                  <th>Field 3</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData[activeTab.index].map((row) => (
                  <tr key={row.id}>
                    <td>{row.field1}</td>
                    <td>{row.field2}</td>
                    <td>{row.field3}</td>
                    <td>
                      <button onClick={() => handleModalOpen(row)}>Open Modal</button>
                      {/* <button onClick={() => handleShowDetails(data)}>Show Details</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        <PopupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Edit Row"
          onSave={handleModalSave}
          rowData={editedRowData}
        />
      </div>
      <center>
      <button className='mt-3' onClick={() => setShowCard(true)}>Show details</button>
      </center>
    </div>
  );
                
};

export default Content;
