import React from 'react';

const TaskCard = ({ task, darkMode }) => {
    return (
        <div
            className={`p-4 shadow-md rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} sm:p-5 md:p-6 lg:p-8`}>
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-gray-400">{task.description}</p>
        </div>
    );
};

export default TaskCard;
