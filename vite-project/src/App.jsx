import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import ProjectView from './pages/ProjectView';
import TaskDetails from './pages/TaskDetails';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import DarkModeToggle from './components/DarkMode';
import { AuthProvider } from './context/AuthContext'; // Assuming you are using the Context API for authentication
import PrivateRoute from './components/PrivateRoute'; // Importing the PrivateRoute component
import ProfilePage from './pages/Profilepage';
import ProjectForm from './pages/ProjectForm';
import TaskForm from './pages/TaskForm';

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
        <Router>
            <AuthProvider>
                <main className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} `}>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Main darkMode={darkMode} />} />
                        <Route path="/auth/login" element={<Login darkMode={darkMode} />} />
                        <Route path="/auth/signup" element={<Signup darkMode={darkMode} />} />

                        {/* Protected Routes */}
                        <Route path="/dashboard" element={<PrivateRoute><DashBoard darkMode={darkMode} /></PrivateRoute>} />
                        <Route path="/auth/profile" element={<PrivateRoute><ProfilePage darkMode={darkMode} /></PrivateRoute>} />
                        <Route path="/projects/:id" element={<PrivateRoute><ProjectView darkMode={darkMode} /></PrivateRoute>} />
                        <Route path="/tasks/:id" element={<PrivateRoute><TaskDetails darkMode={darkMode} /></PrivateRoute>} />
                        {/* Form Routes */}
                        <Route path="/projects" element={<PrivateRoute><ProjectForm darkMode={darkMode} /></PrivateRoute>} />
                        <Route path="/tasks/add" element={<PrivateRoute><TaskForm darkMode={darkMode} /></PrivateRoute>} />
                        {/* Fallback Route */}
                        <Route path="*" element={<NotFound darkMode={darkMode} />} />
                    </Routes>
                </main>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </AuthProvider>
        </Router>
    );
};

export default App;
