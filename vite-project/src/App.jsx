import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import ProjectView from './pages/ProjectView';
import TaskDetails from './pages/TaskDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
// import AuthProvider from './context/AuthContext'; // Assuming you are using the Context API for authentication
// import ProjectProvider from './context/ProjectContext'; // Assuming you are using the Context API for projects

const App = () => {
    return (
        <>
        {/* // <AuthProvider> */}
            {/* <ProjectProvider> */}
                <Router>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/projects/:id" element={<ProjectView />} />
                        <Route path="/tasks/:id" element={<TaskDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            {/* </ProjectProvider> */}
        {/* </AuthProvider> */}
        </>
    );
};

export default App;
