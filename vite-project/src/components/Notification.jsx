import React from 'react';

const Notification = ({ message, type, darkMode }) => {
    const getNotificationStyle = () => {
        switch (type) {
            case 'success':
                return darkMode ? 'bg-green-600' : 'bg-green-500';
            case 'error':
                return darkMode ? 'bg-red-600' : 'bg-red-500';
            case 'info':
                return darkMode ? 'bg-blue-600' : 'bg-blue-500';
            default:
                return darkMode ? 'bg-gray-600' : 'bg-gray-500';
        }
    };

    return (
        <div
            className={`p-3 rounded-md text-sm sm:text-base md:text-lg lg:text-xl ${getNotificationStyle()}`}>
            {message}
        </div>
    );
};

export default Notification;
