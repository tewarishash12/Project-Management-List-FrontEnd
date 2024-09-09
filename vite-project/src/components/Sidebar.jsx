import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ darkMode }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={`h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <ul className="p-4 pt-10">
                <li className="py-2 pl-4 hover:bg-gray-200 hover:text-black transition-colors duration-200">
                    <Link to="/dashboard"><i className="fa-solid fa-house pr-4"></i>Home</Link>
                </li>
                <li className="py-2 pl-4 hover:bg-gray-200 hover:text-black transition-colors duration-200">
                    <Link to="/tasks"><i className="fa-solid fa-list-check pr-4"></i>My Task</Link>
                </li>
                <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200">
                    <Link to="/tasks/add"><i className="fa-solid fa-plus pr-4"></i>Create Tasks</Link>
                </li>
                <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200" /*onClick={toggleChat}*/>
                    <Link to="/inbox"><i className="fa-solid fa-comments pr-4"></i>Inbox</Link>
                </li>
                <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200">
                    <Link to="/notifications"><i className="fa-solid fa-bell pr-4"></i>Notification</Link>
                </li>
            </ul>

            {/* Conditionally render the Chat component */}
            {/* {showChat && (
                <div className="absolute top-0 right-0 h-screen w-1/3 bg-white shadow-lg">
                    <Chat />
                </div>
            )} */}
        </div>
    );
};

export default Sidebar;
