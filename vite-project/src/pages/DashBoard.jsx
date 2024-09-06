import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
    // Sample tasks data
    const tasks = [
        { id: 1, title: 'Design Homepage', description: 'Create the homepage design' },
        { id: 2, title: 'Implement Auth', description: 'Implement user authentication' },
        { id: 3, title: 'Setup Database', description: 'Setup the project database' },
    ];

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">
                <Header />
                <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
                <div className="grid grid-cols-3 gap-4">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
