import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';

const ProjectView = () => {
    // Sample project data
    const project = {
        name: 'Web Development Project',
        description: 'This is a sample project description.',
        progress: 75,
    };

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
                <Header />
                <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                <p className="mb-4">{project.description}</p>
                <ProgressBar progress={project.progress} />
            </main>
        </div>
    );
};

export default ProjectView;
