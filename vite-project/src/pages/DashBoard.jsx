import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import Footer from '../components/Footer';

const Dashboard = ({ darkMode }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const tasks = [
        { id: 1, title: 'Design Homepage', description: 'Create the homepage design' },
        { id: 2, title: 'Implement Auth', description: 'Implement user authentication' },
        { id: 3, title: 'Setup Database', description: 'Setup the project database' },
    ];

    return (
        <div className={`flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} min-h-screen transition-colors duration-300`}>
            <Sidebar isVisible={isSidebarVisible} darkMode={darkMode} />
            <div className={`flex-1 transition-all duration-300 ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}>
                <Header darkMode={darkMode} toggleSidebarVisibility={toggleSidebarVisibility} />
                <main className="p-6">
                    <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tasks.map(task => (
                            <TaskCard 
                                key={task.id} 
                                task={task} 
                                darkMode={darkMode}
                            />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
