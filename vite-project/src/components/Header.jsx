import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Header = ({ darkMode, toggleSidebarVisibility }) => {
  return (
    <div className={`flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="flex-1">
        <nav className={`bg-white shadow-sm ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
          <div className="container mx-auto px-4 py-2 flex justify-between items-center w-full">
            {/* Left Section: Menu Icon and Logo */}
            <div className="flex items-center space-x-4">
              {/* Menu Icon */}
              <i
                className="fa-solid fa-bars cursor-pointer"
                onClick={toggleSidebarVisibility}
              ></i>

              {/* Logo */}
              <a href="#" className="flex items-center">
                <div>
                  <span></span>
                </div>
                <span className="text-blue-600 text-lg font-semibold ml-2">Tasks</span>
              </a>
            </div>
            
            {/* Middle Section: Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Editor</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Challenges</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Orgs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">More</a>
            </div>

            {/* Right Section: Search Bar */}
            <div className="flex items-center space-x-8">
              <input
                type="text"
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Search..."
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
