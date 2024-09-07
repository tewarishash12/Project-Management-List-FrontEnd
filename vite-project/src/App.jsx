import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProjectView from './pages/ProjectView';
import TaskDetails from './pages/TaskDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import DarkModeToggle from './components/DarkMode';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <>
            <Router>
                <main className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} sm:p-4 md:p-6 lg:p-8`}>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/auth/login" element={<Login darkMode={darkMode} />} />
                        <Route path="/auth/signup" element={<Signup darkMode={darkMode} />} />
                        
                        {/* Protected Routes */}
                        <Route path="/" element={<Dashboard darkMode={darkMode} />} />
                        <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
                        <Route path="/projects/:id" element={<ProjectView darkMode={darkMode} />} />
                        <Route path="/tasks/:id" element={<TaskDetails darkMode={darkMode} />} />
                        
                        {/* Fallback Route */}
                        <Route path="*" element={<NotFound darkMode={darkMode} />} />
                    </Routes>
                </main>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </Router>
        </>
    );
};

export default App;
