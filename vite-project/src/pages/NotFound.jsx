import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ darkMode }) => {
    return (
        <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
            <div className="text-center px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
                <p className="text-2xl md:text-3xl mb-4">Page Not Found</p>
                <Link
                    to="/"
                    className={`p-2 rounded-md ${darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700 transition duration-300`}
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
