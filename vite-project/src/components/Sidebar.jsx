import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ darkMode }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className={`h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} fixed top-0 left-0 w-64`}>
            <ul className="p-4 pt-10">
                <li className={`py-2 pl-4 hover:bg-${darkMode ? 'gray-700' : 'gray-200'} hover:text-${darkMode ? 'white' : 'black'} transition-colors duration-200`}>
                    <Link to="/dashboard"><i className="fa-solid fa-house pr-4"></i>Home</Link>
                </li>
                <li className={`py-2 pl-4 hover:bg-${darkMode ? 'gray-700' : 'gray-200'} hover:text-${darkMode ? 'white' : 'black'} transition-colors duration-200`}>
                    <Link to="/tasks"><i className="fa-solid fa-list-check pr-4"></i>My Task</Link>
                </li>
                <li className={`py-2 pl-4 hover:bg-${darkMode ? 'gray-600' : 'gray-300'} hover:text-${darkMode ? 'white' : 'black'} transition-colors duration-200`}>
                    <Link to="/tasks/add"><i className="fa-solid fa-plus pr-4"></i>Create Tasks</Link>
                </li>
                <li className={`py-2 pl-4 hover:bg-${darkMode ? 'gray-600' : 'gray-300'} hover:text-${darkMode ? 'white' : 'black'} transition-colors duration-200`}>
                    <Link to="/inbox"><i className="fa-solid fa-comments pr-4"></i>Inbox</Link>
                </li>
                <li className={`py-2 pl-4 hover:bg-${darkMode ? 'gray-600' : 'gray-300'} hover:text-${darkMode ? 'white' : 'black'} transition-colors duration-200`}>
                    <Link to="/notifications"><i className="fa-solid fa-bell pr-4"></i>Notification</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
