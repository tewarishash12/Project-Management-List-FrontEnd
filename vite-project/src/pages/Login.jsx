import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ darkMode }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('teammember'); // Default role

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password, role); // Pass role to login function
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-end bg-cover bg-center p-6`}
            style={{
                backgroundImage: `url('/form-img.jpg')`, // Use the image from your public folder
                backgroundColor: darkMode ? '#000' : '#fff',
            }}
        >
            <div className={`bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 max-w-sm w-full mx-4`}>
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Login to PeakPlanner</h2>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="name@example.com"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 text-sm transition-transform duration-300 transform hover:scale-105 hover:border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <input 
                            id="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Your password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 text-sm transition-transform duration-300 transform hover:scale-105 hover:border-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
                        <select 
                            id="role"
                            value={role} 
                            onChange={(e) => setRole(e.target.value)}
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 text-sm transition-transform duration-300 transform hover:scale-105 hover:border-blue-400"
                        >
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="teammember">Team Member</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
