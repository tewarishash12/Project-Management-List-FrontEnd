import React from 'react';

const Header = ({ toggleSidebar, darkMode }) => {
    return (
        <nav className={`bg-white shadow-sm w-full ${darkMode ? 'bg-gray-800 text-white' : 'text-gray-900'} transition-all duration-300`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center w-full">
                
                {/* Left Section: Menu Icon */}
                <div className="flex items-center space-x-4">
                    <i 
                        className="fa-solid fa-bars cursor-pointer"
                        onClick={toggleSidebar}
                    ></i>
                    <a href="#" className="flex items-center">
                        <span className="text-blue-600 text-lg font-semibold ml-2">Tasks</span>
                    </a>
                </div>
                
                {/* Middle Section: Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="hover:text-blue-600">Editor</a>
                    <a href="#" className="hover:text-blue-600">Challenges</a>
                    <a href="#" className="hover:text-blue-600">Orgs</a>
                    <a href="#" className="hover:text-blue-600">More</a>
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
    );
};

export default Header;
