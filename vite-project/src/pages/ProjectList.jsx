import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const url = `http://localhost:3000`;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${url}/projects`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const deleteProject = async (projectId) => {
        try {
            await axios.delete(`${url}/projects/${projectId}`);
            setProjects(prevProjects => prevProjects.filter(project => project._id !== projectId));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project._id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600 mb-2">{project.content}</p>
                        <p className="text-sm text-gray-500 mb-2">Priority: {project.priority}</p>
                        <p className="text-sm text-gray-500 mb-2">
                            Manager: {project.managers[0]?.email || 'No manager assigned'}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            Created At: {new Date(project.createdAt).toLocaleDateString()}
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                            <Link to={`/projects/${project._id}`} className="text-blue-500 hover:underline">View Details</Link>
                            <button 
                                onClick={() => deleteProject(project._id)} 
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
