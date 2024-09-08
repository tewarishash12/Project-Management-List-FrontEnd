import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import Footer from '../components/Footer';

const Dashboard = ({ darkMode }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const tasks = [
        { id: 1, title: 'Design Homepage', description: 'Create the homepage design' },
        { id: 2, title: 'Implement Auth', description: 'Implement user authentication' },
        { id: 3, title: 'Setup Database', description: 'Setup the project database' },
    ];

    return (
        <div className={`flex min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            {/* Sidebar */}
            <div className={`transition-all duration-300 ${isSidebarVisible ? 'w-64' : 'w-0'} overflow-hidden`}>
                <Sidebar darkMode={darkMode} />
            </div>
            
            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300`}>
                <Header toggleSidebar={toggleSidebar} darkMode={darkMode} />
                
                <main className={`p-6 transition-all duration-300`}>
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tasks.map(task => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                className={`p-4 rounded-lg shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
                            />
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
