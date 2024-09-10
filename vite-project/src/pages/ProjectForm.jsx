import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [managers, setManagers] = useState([]);
    const [assignedManager, setAssignedManager] = useState('');
    const [tasks, setTasks] = useState([{ taskTitle: '', taskDescription: '' }]);

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                const managersRes = await axios.get('http://localhost:3000/managers');
                const managersData = Array.isArray(managersRes.data) ? managersRes.data : [];
                setManagers(managersData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setManagers([]);
            }
        };
        fetchManagers();
    }, []);

    const handleTaskChange = (index, e) => {
        const { name, value } = e.target;
        const newTasks = [...tasks];
        newTasks[index][name] = value;
        setTasks(newTasks);
    };

    const handleAddTask = () => {
        setTasks([...tasks, { taskTitle: '', taskDescription: '' }]);
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProjectResponse = await fetch('http://localhost:3000/projects/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    title,
                    content,
                    priority,
                    managers: [assignedManager],
                    tasks
                })
            });

            if (!newProjectResponse.ok) {
                const errorText = await newProjectResponse.text();
                console.error('Error Response:', errorText);
                throw new Error('Failed to create project');
            }

            const newProject = await newProjectResponse.json();
            setTitle('');
            setContent('');
            setPriority('Medium');
            setAssignedManager('');
            setTasks([{ taskTitle: '', taskDescription: '' }]);
        } catch (err) {
            console.error('Error adding project:', err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
                <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">Add New Project</h1>
                
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                        rows="4"
                    />
                </div>
                
                <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="assignedManager" className="block text-sm font-medium text-gray-700">Assign Manager</label>
                    <select
                        id="assignedManager"
                        value={assignedManager}
                        onChange={(e) => setAssignedManager(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                    >
                        <option value="">Select Manager</option>
                        {managers.length > 0 ? (
                            managers.map((manager) => (
                                <option key={manager._id} value={manager._id}>
                                    {manager.username}
                                </option>
                            ))
                        ) : (
                            <option value="">No Managers Available</option>
                        )}
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tasks</label>
                    {tasks.map((task, index) => (
                        <div key={index} className="space-y-4">
                            <div>
                                <label htmlFor={`taskTitle-${index}`} className="block text-sm font-medium text-gray-700">Task Title</label>
                                <input
                                    id={`taskTitle-${index}`}
                                    name="taskTitle"
                                    type="text"
                                    value={task.taskTitle}
                                    onChange={(e) => handleTaskChange(index, e)}
                                    className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor={`taskDescription-${index}`} className="block text-sm font-medium text-gray-700">Task Description</label>
                                <textarea
                                    id={`taskDescription-${index}`}
                                    name="taskDescription"
                                    value={task.taskDescription}
                                    onChange={(e) => handleTaskChange(index, e)}
                                    className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                                    rows="2"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemoveTask(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove Task
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddTask}
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition duration-200"
                    >
                        Add Task
                    </button>
                </div>
                
                <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:shadow-lg transition duration-200"
                >
                    Add Project
                </button>
            </form>
        </div>
    );
};

export default ProjectForm;
