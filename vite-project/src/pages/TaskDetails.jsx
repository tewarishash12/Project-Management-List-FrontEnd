import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`/tasks/${taskId}`);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task details:', error);
            }
        };

        fetchTask();
    }, [taskId]);

    if (!task) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <p className="text-gray-500 mb-2">Status: {task.status}</p>
            <p className="text-gray-500 mb-2">Priority: {task.priority}</p>
            <p className="text-gray-500 mb-2">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            {/* Check if task.project exists before accessing its properties */}
            <p className="text-gray-500">Project: {task.project ? task.project.title : 'No project assigned'}</p>
        </div>
    );
};

export default TaskDetails;
