import React, { useState } from 'react';
// import Chat from './Chat';  // Import the Chat component

const Sidebar = ({ darkMode }) => {
    const [showChat, setShowChat] = useState(false); // State for showing chat
    const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing sidebar

    const toggleChat = () => {
        setShowChat(!showChat);  // Toggle chat visibility
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed); // Toggle sidebar collapse
    };

    return (
        <div
            className={`fixed top-0 left-0 h-full flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
        >
            {/* Button to toggle sidebar collapse */}
            <button
                className={`absolute top-1 left-2 p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full transition-colors duration-200 focus:outline-none z-10`}
                onClick={toggleSidebar}
            >
                <i className={`fa-solid fa-bars${isCollapsed ? '-staggered' : ''} text-xl`}></i>
            </button>

            {/* Sidebar content */}
            <div className={`flex-1 ${isCollapsed ? 'flex-col items-center pt-10' : 'items-start pt-10'} transition-all duration-300`}>
                <ul className={`flex-1 ${isCollapsed ? 'flex-col items-center' : 'flex-col'}`}>
                    <li className={`py-4 px-3 flex items-center space-x-4 ${isCollapsed ? 'hover:bg-gray-200' : 'hover:bg-gray-200 hover:text-black'} transition-colors duration-200`}>
                        <i className="fa-solid fa-house text-xl"></i>
                        {!isCollapsed && <a href="/">Home</a>}
                    </li>
                    <li className={`py-4 px-3 flex items-center space-x-4 ${isCollapsed ? 'hover:bg-gray-200' : 'hover:bg-gray-200 hover:text-black'} transition-colors duration-200`}>
                        <i className="fa-solid fa-list-check text-xl"></i>
                        {!isCollapsed && <a href="#">My Task</a>}
                    </li>
                    <li className={`py-4 px-3 flex items-center space-x-4 ${isCollapsed ? 'hover:bg-gray-300' : 'hover:bg-gray-300 hover:text-black'} transition-colors duration-200`}>
                        <i className="fa-solid fa-plus text-xl"></i>
                        {!isCollapsed && <a href="#">Create Tasks</a>}
                    </li>
                    <li className={`py-4 px-3 flex items-center space-x-4 ${isCollapsed ? 'hover:bg-gray-300' : 'hover:bg-gray-300 hover:text-black'} transition-colors duration-200`} onClick={toggleChat}>
                        <i className="fa-solid fa-comments text-xl"></i>
                        {!isCollapsed && <a href="#">Inbox</a>}
                    </li>
                    <li className={`py-4 px-3 flex items-center space-x-4 ${isCollapsed ? 'hover:bg-gray-300' : 'hover:bg-gray-300 hover:text-black'} transition-colors duration-200`}>
                        <i className="fa-solid fa-bell text-xl"></i>
                        {!isCollapsed && <a href="#">Notification</a>}
                    </li>
                </ul>

                {/* Conditionally render the Chat component */}
                {showChat && (
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-white shadow-lg">
                        {/* <Chat /> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
