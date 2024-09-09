import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');
    const [project, setProject] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [assignedTo, setAssignedTo] = useState('');
    const [projects, setProjects] = useState([]); // Initialize as an empty array
    const [users, setUsers] = useState([]); // Initialize as an empty array

    useEffect(() => {
        // Fetch projects and users for dropdowns
        const fetchOptions = async () => {
            try {
                const [projectsRes, usersRes] = await Promise.all([
                    axios.get('/projects'),
                    axios.get('/users')
                ]);

                // Ensure that the responses contain arrays
                setProjects(Array.isArray(projectsRes.data) ? projectsRes.data : []);
                setUsers(Array.isArray(usersRes.data) ? usersRes.data : []);
            } catch (err) {
                console.error(err);
                setProjects([]); // In case of error, keep them as empty arrays
                setUsers([]);
            }
        };
        fetchOptions();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/tasks/add', { title, description, status, dueDate, project, priority, assignedTo });
            // Clear form or handle success
        } catch (err) {
            console.error(err);
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
                <label htmlFor="description" className="block">Description</label>
                <textarea 
                    id="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
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
            <div>
                <label htmlFor="assignedTo" className="block">Assigned To</label>
                <select 
                    id="assignedTo" 
                    value={assignedTo} 
                    onChange={(e) => setAssignedTo(e.target.value)} 
                    className="border p-2 w-full"
                >
                    <option value="">Select User</option>
                    {users.map(user => (
                        <option key={user._id} value={user._id}>{user.title}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Add Task</button>
        </form>
    );
};

export default TaskForm;
