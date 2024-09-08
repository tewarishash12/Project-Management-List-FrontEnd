import React from 'react';

const TaskCard = ({ task, darkMode }) => {
    return (
        <div 
            className={`p-4 mb-4 rounded-lg transition-all duration-300 transform ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} 
            hover:scale-105 hover:shadow-xl`}
            style={{ height: '80px', width: '100%' }}
        >
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-gray-400">{task.description}</p>
        </div>
    );
};

export default TaskCard;
