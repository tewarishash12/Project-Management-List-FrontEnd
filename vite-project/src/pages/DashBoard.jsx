import React, { useState } from 'react';
import { decodeJwt } from 'jose';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import Footer from '../components/Footer';
import Task from '../components/Task';

const Dashboard = ({ darkMode }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const tasks = [
        { id: 1, title: 'Collaborate with your team on tasks', description: 'Tomorrow' },
        { id: 2, title: 'Use subtasks to break down a task', description: 'Tuesday' },
    ];

    const projects = [
        { id: 1, title: 'Task Management System', description: '3 tasks due soon' }
    ];

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    // Decode token to get username
    const token = localStorage.getItem('token');
    const decodedToken = token ? decodeJwt(token) : null;
    const username = decodedToken ? decodedToken.username : "User";

    return (
        <div 
            className={`flex flex-col min-h-screen transition-all duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}
        >
            {/* Sidebar */}
            <Sidebar darkMode={darkMode} isVisible={isSidebarVisible} />

            {/* Main Content */}
            <div 
                className={`flex-1 transition-all duration-300 ${isSidebarVisible ? 'ml-64' : 'ml-16'}`}
            >
                <Header toggleSidebar={toggleSidebar} darkMode={darkMode} />

                {/* Greeting Section */}
                <div className="px-6 py-4 flex justify-center flex-col">
                    <p className="text-lg text-center">{currentDate}</p>
                    <h1 className="text-2xl text-center font-bold mb-2">{`${greeting}, ${username}`}</h1>
                    <div className="flex justify-center items-center space-x-4">
                        <div>My week</div>
                        <div>0 tasks completed</div>
                        <div>0 collaborators</div>
                    </div>
                </div>

                {/* Task and Project Sections */}
                <main className="p-6 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* My Tasks */}
                        <div className={`rounded-lg shadow-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} h-70`}>
                            <h2 className="text-xl text-black font-bold mb-4 col-span-full">My tasks</h2>
                            {tasks.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    darkMode={darkMode}
                                    className={`p-2 rounded-lg transition-all duration-300 transform ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} hover:scale-105 hover:shadow-xl mb-4`}
                                    style={{ height: '150px', width: '100%' }}
                                />
                            ))}
                        </div>
                        <Task />
                        {/* Projects */}
                        <div className={`rounded-lg shadow-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} h-70`}>
                            <h2 className="text-xl text-white font-bold mb-4">Projects</h2>
                            <div>
                                {projects.map(project => (
                                    <div key={project.id} className="flex items-center space-x-4">
                                        <div className="bg-teal-500 rounded-full h-10 w-10 flex items-center justify-center">
                                            <i className="fas fa-project-diagram text-white"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold">{project.title}</p>
                                            <p className="text-sm text-gray-400">{project.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default Dashboard;
