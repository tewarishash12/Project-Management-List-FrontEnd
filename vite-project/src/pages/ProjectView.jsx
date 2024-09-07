import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';

const ProjectView = ({ darkMode }) => {
    const project = {
        name: 'Web Development Project',
        description: 'This is a sample project description.',
        progress: 75,
    };

    return (
        <div className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} 
                        sm:p-4 md:p-6 lg:p-8`}>
            <Sidebar darkMode={darkMode} />
            <main className="flex-1 p-6 sm:p-4 md:p-6 lg:p-8">
                <Header darkMode={darkMode} />
                <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                <p className="mb-4">{project.description}</p>
                <ProgressBar progress={project.progress} darkMode={darkMode} />
            </main>
        </div>
    );
};

export default ProjectView;
