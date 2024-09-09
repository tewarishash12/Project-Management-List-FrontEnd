import React, { useState } from 'react';

const Sidebar = ({ darkMode }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={`h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <ul className="p-4 pt-10">
                <li className="py-2 pl-4 hover:bg-gray-200 hover:text-black transition-colors duration-200">
                    <a href="/"><i className="fa-solid fa-house pr-4"></i>Home</a>
                </li>
                <li className="py-2 pl-4 hover:bg-gray-200 hover:text-black transition-colors duration-200">
                    <a href="#"><i className="fa-solid fa-list-check pr-4"></i>My Task</a>
                </li>
                        <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200">
                          <a href="#"><i className="fa-solid fa-plus pr-4"></i>Create Tasks</a>
                        </li>
                        <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200">
                        <i className="fa-solid fa-comments pr-4"></i><a href="#">Inbox</a>
                        </li>
                        <li className="py-2 pl-4 hover:bg-gray-300 hover:text-black transition-colors duration-200">
                        <i className="fa-solid fa-bell pr-4"></i><a href="#">Notification</a>
                        </li>
            </ul>  
    
        </div>
    );
};

export default Sidebar;
