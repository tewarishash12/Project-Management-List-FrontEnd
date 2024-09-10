import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = ({ darkMode, isSidebarCollapsed }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/auth/login');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <nav className={`bg-white shadow-sm w-full ${darkMode ? 'bg-gray-800 text-white' : 'text-gray-900'} transition-all duration-300`}>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center w-full">
                <div className="flex items-center space-x-4">
                    <Link to="/dashboard" className="flex items-center">
                        <span className="text-blue-600 text-lg font-semibold ml-2">
                            <i className="fa-solid fa-cube pr-4"></i>PeakPlanner
                        </span>
                    </Link>
                </div>
                <div className="flex items-center space-x-8">
                    <input
                        type="text"
                        className={`border rounded-full py-1 px-8 w-80 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                        placeholder="Search..."
                    />
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={handleLogout} 
                        className="hover:bg-blue-400 bg-blue-600 text-white rounded-full p-1 font-sm pl-4 pr-4"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
