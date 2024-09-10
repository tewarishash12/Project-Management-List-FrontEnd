import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');
    const [project, setProject] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [assignedTo, setAssignedTo] = useState('');
    const [projects, setProjects] = useState([]);
    const [teammembers, setTeammembers] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const [projectsRes, teammembersRes, userRes] = await Promise.all([
                    axios.get('http://localhost:3000/projects'),
                    axios.get('http://localhost:3000/teammembers'),
                    axios.get('http://localhost:3000/user/me', {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                ]);

                setProjects(Array.isArray(projectsRes.data) ? projectsRes.data : []);
                setTeammembers(Array.isArray(teammembersRes.data) ? teammembersRes.data : []);
                setIsAdmin(userRes.data.role === 'admin');
            } catch (err) {
                console.error('Error fetching data:', err);
                setProjects([]);
                setTeammembers([]);
            }
        };
        fetchOptions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!project) {
                alert('Please select a project');
                return;
            }

            if (!isAdmin) {
                alert('You do not have permission to add tasks or assign team members.');
                return;
            }

            const response = await fetch(`http://localhost:3000/tasks/project/${project}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                    status,
                    dueDate,
                    priority,
                    project,
                    assignedTo
                })
            });

            const result = await response.json();
            if (response.ok) {
                setTitle('');
                setContent('');
                setStatus('pending');
                setDueDate('');
                setPriority('Medium');
                setAssignedTo('');
                setProject('');
            } else {
                console.error('Error adding task:', result);
            }
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
                <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">Add New Task</h1>
                
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
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
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                    />
                </div>
                
                <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700">Project</label>
                    <select
                        id="project"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        required
                        className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                    >
                        <option value="">Select Project</option>
                        {projects.map(pj => (
                            <option key={pj._id} value={pj._id}>{pj.title}</option>
                        ))}
                    </select>
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
                
                {isAdmin && (
                    <div>
                        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
                        <select
                            id="assignedTo"
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            className="border border-gray-300 rounded-lg p-3 w-full text-sm"
                        >
                            <option value="">Select Team Member</option>
                            {teammembers.map(user => (
                                <option key={user._id} value={user._id}>{user.username}</option>
                            ))}
                        </select>
                    </div>
                )}

                <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full hover:shadow-lg transition duration-200"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
