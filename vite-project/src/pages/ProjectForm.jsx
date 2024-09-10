import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [managers, setManagers] = useState([]);
    const [assignedManager, setAssignedManager] = useState('');

    useEffect(() => {
        const fetchManagers = async () => {
            try {
                // Fetch the list of managers
                const managersRes = await axios.get('http://localhost:3000/managers');
                console.log('Managers Response:', managersRes.data);
                const managersData = Array.isArray(managersRes.data) ? managersRes.data : [];
                setManagers(managersData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setManagers([]);
            }
        };
        fetchManagers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newProjectResponse = await fetch('http://localhost:3000/projects/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Include cookies in the request
                body: JSON.stringify({
                    title,
                    content,
                    priority,
                    managers: [assignedManager] // Include assigned manager in the request
                })
            });

            if (!newProjectResponse.ok) {
                const errorText = await newProjectResponse.text();
                console.error('Error Response:', errorText);
                throw new Error('Failed to create project');
            }

            const newProject = await newProjectResponse.json();
            console.log('Project added:', newProject);

            // Reset form fields
            setTitle('');
            setContent('');
            setPriority('Medium');
            setAssignedManager('');
        } catch (err) {
            console.error('Error adding project:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Project Title</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div>
                <label htmlFor="assignedManager">Assign Manager</label>
                <select
                    id="assignedManager"
                    value={assignedManager}
                    onChange={(e) => setAssignedManager(e.target.value)}
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
            <button type="submit">Add Project</button>
        </form>
    );
};

export default ProjectForm;
