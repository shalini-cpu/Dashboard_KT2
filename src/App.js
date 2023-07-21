// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import PopupModal from './PopupModal';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const tabs = [
    { title: 'Tab 1',index:0 },
    { title: 'Tab 2',index:1 },
    // Add more tabs as needed
  ];
  const handleAddProductClick = (product) => {
    setShowProductDetails(true);
    // Set the product details using the clicked subItem data
    setProductDetails(product);
  };

  const handleAddProduct = () => {
    setShowContent(true);
  };
  const handleMenuClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar onAddProductClick={handleAddProductClick} handleMenuClick={handleMenuClick} />
      <Content tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} showProductDetails={showProductDetails} productDetails={productDetails} handleModalOpen={handleModalOpen} />
      <PopupModal isOpen={isModalOpen} onClose={handleModalClose} title="Modal Title">
        {/* Modal content */}
      </PopupModal>
    </div>
  );
};

export default App;
