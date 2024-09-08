import React from 'react';
import { Link } from 'react-router-dom';

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
                        <span className="text-blue-600 text-lg font-semibold ml-2"><i class="fa-solid fa-cube pr-4"></i>PeakPlanner</span>
                    </a>
                </div>

                {/* Right Section: Search Bar */}
                <div className="flex items-center space-x-8">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-full py-1 px-8 w-80 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Search..."
                    />
                </div>

                {/* Middle Section: Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="hover:bg-blue-400 bg-blue-600  rounded-full p-1 font-sm pl-4 pr-4">
                        <Link to="/auth/login">Login</Link>
                    </button>
                    <button className="hover:bg-blue-400 bg-blue-600 rounded-full p-1 font-sm pl-4 pr-4">
                        <Link to="/auth/signup">Signup</Link>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Header;
