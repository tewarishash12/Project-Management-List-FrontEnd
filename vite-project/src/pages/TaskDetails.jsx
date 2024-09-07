import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const TaskDetails = ({ darkMode }) => {
    // Sample task data
    const task = {
        title: 'Design Homepage',
        description: 'Detailed description of the task goes here.',
        dueDate: '2024-09-30',
        assignee: 'John Doe',
    };

    return (
        <div
            className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} sm:p-4 md:p-6 lg:p-8`}>
            <Sidebar darkMode={darkMode} />
            <main className="flex-1 p-6 sm:p-4 md:p-6 lg:p-8">
                <Header darkMode={darkMode} />
                <h2 className="text-3xl font-bold mb-4">{task.title}</h2>
                <p className="mb-2"><strong>Description:</strong> {task.description}</p>
                <p className="mb-2"><strong>Due Date:</strong> {task.dueDate}</p>
                <p className="mb-2"><strong>Assignee:</strong> {task.assignee}</p>
            </main>
        </div>
    );
};

export default TaskDetails;
