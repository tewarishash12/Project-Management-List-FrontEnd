import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomDropdown from './CustomDropdown'; // Import the custom dropdown component

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');
    const [project, setProject] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [assignedTo, setAssignedTo] = useState([]);
    const [projects, setProjects] = useState([]);
    const [teammembers, setTeammembers] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const [projectsRes, teammembersRes, userRes] = await Promise.all([
                    axios.get('http://localhost:3000/projects'),
                    axios.get('http://localhost:3000/teammembers', { // Fetch current user details
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                ]);

                setProjects(Array.isArray(projectsRes.data) ? projectsRes.data : []);
                setTeammembers(Array.isArray(teammembersRes.data) ? teammembersRes.data : []);
                
                // Check if the user is an admin
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
            
            const response = await fetch(`http://localhost:3000/tasks/project/add/${project}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify({
                    title,
                    content,
                    status,
                    dueDate,
                    priority,
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
                setAssignedTo([]);
                setProject('');
            } else {
                console.error('Error adding task:', result);
            }
        } catch (err) {
            console.error('Error adding task:', err);
        }
    };    

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <div>
                <label htmlFor="title" className="block">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="content" className="block">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="status" className="block">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label htmlFor="dueDate" className="block">Due Date</label>
                <input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div>
                <label htmlFor="project" className="block">Project</label>
                <select
                    id="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    required
                    className="border p-2 w-full"
                >
                    <option value="">Select Project</option>
                    {projects.map(pj => (
                        <option key={pj._id} value={pj._id}>{pj.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="priority" className="block">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            {isAdmin && (
                <div>
                    <label htmlFor="assignedTo" className="block">Assigned To</label>
                    <select
                        id="assignedTo"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        className="border p-2 w-full"
                    >
                        <option value="">Select Team Member</option>
                        {teammembers.map(user => (
                            <option key={user._id} value={user._id}>{user.username}</option>
                        ))}
                    </select>
                </div>
            )}
            <button type="submit" className="bg-blue-500 text-white p-2">Add Task</button>
        </form>
    );
};

export default TaskForm;
