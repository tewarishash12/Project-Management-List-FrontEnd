import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <div key={task._id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                        <p className="text-gray-600 mb-2">{task.description}</p>
                        <p className="text-gray-500">Status: {task.status}</p>
                        <p className="text-gray-500">Priority: {task.priority}</p>
                        <div className="mt-4">
                            <a href={`/tasks/${task._id}`} className="text-blue-500 hover:underline">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
