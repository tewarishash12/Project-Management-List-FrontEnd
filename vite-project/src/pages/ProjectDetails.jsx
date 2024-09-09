import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`/projects/${projectId}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProject();
    }, [projectId]);

    if (!project) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <h2 className="text-xl font-semibold mb-2">Tasks:</h2>
            <ul className="list-disc list-inside pl-5">
                {project.tasks && project.tasks.length > 0 ? (
                    project.tasks.map(task => (
                        <li key={task._id} className="mb-2">
                            <a href={`/tasks/${task._id}`} className="text-blue-500 hover:underline">{task.title}</a>
                        </li>
                    ))
                ) : (
                    <p>No tasks available for this project.</p>
                )}
            </ul>
        </div>
    );
};

export default ProjectDetails;
