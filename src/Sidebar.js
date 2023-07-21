import React, { useState } from 'react';

const Sidebar = ({ onAddProductClick }) => {
  // Replace this data with your actual sidebar menu data
  const sidebarData = [
    {
      title: 'Dashboard',
      link: '/dashboard',
    },
    {
      title: 'Products',
      link: '/products',
      subMenu: [
        {
          title: 'Add Product',
          link: '/products/add',
        },
        {
          title: 'Manage Products',
          link: '/products/manage',
        },
      ],
    },
    // Add more menu items as needed
  ];

  const handleAddProductClick = (event, subItem) => {
    event.preventDefault(); // Prevent the default link behavior
    onAddProductClick(subItem); // Call the parent component's function to handle the click event
  };

  // Render sidebar menu items recursively
  const renderSidebarItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>

        <a href={item.link}>{item.title}</a>

        {item.subMenu && (
          <ul>
            {item.subMenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                {/* Pass the subItem data to the handleAddProductClick function */}
                <a href={subItem.link} onClick={(e) => handleAddProductClick(e, subItem)}>
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  return <ul>{renderSidebarItems(sidebarData)}</ul>;
};

export default Sidebar;
