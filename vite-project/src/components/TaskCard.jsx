import React from 'react';

const TaskCard = ({ task }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
        </div>
    );
};

export default TaskCard;
