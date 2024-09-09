import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project._id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                        <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <div className="mt-4">
                            <a href={`/projects/${project._id}`} className="text-blue-500 hover:underline">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
