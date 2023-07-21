// Tabs.js
import React from 'react';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab.title === tab.title ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
