import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';


const Dashboard = ({ darkMode }) => {
    const tasks = [
        { id: 1, title: 'Design Homepage', description: 'Create the homepage design' },
        { id: 2, title: 'Implement Auth', description: 'Implement user authentication' },
        { id: 3, title: 'Setup Database', description: 'Setup the project database' },
    ];

    return (
        <div className={`flex ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
            <Sidebar darkMode={darkMode}/>
            <main className="flex-1 p-6">
                <Header darkMode={darkMode}/>
                <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tasks.map(task => (
                        <TaskCard 
                            key={task.id} 
                            task={task} 
                            className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} p-4 rounded-lg shadow-lg transition-all duration-300`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
