import React from 'react';

const Sidebar = ({ darkMode }) => {
    return (
        <div className={`h-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <h2 className="text-xl font-bold p-4">Sidebar</h2>
            <ul className="p-4">
                <li className="py-2"><a href="#">Dashboard</a></li>
                <li className="py-2"><a href="#">Tasks</a></li>
                <li className="py-2"><a href="#">Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
