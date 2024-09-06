import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-2xl mb-4">Page Not Found</p>
                <Link to="/" className="bg-indigo-600 text-white p-2 rounded-md">
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
