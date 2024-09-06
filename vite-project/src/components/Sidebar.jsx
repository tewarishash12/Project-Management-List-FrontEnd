import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full p-4">
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/tasks">Tasks</Link></li>
                    <li><Link to="/notifications">Notifications</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
