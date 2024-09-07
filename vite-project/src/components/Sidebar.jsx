import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ darkMode }) => {
    return (
        <aside
            className={`w-64 h-full p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} 
                        sm:w-72 md:w-80 lg:w-96`}>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/dashboard"
                            className={`block p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`block p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tasks"
                            className={`block p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/notifications"
                            className={`block p-2 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}>
                            Notifications
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
