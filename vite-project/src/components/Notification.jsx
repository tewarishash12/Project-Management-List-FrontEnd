import React from 'react';

const Notification = ({ message, type }) => {
    const getNotificationStyle = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'info':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className={`text-white p-3 rounded-md ${getNotificationStyle()}`}>
            {message}
        </div>
    );
};

export default Notification;
