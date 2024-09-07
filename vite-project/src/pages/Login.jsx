import React, { useState } from 'react';
import { useAuth } from '../hooks/UseAuth'; // Adjust path if needed

const Login = ({ darkMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Access login function from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirect or show a success message after login
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
            <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} p-6 rounded-md shadow-md w-full max-w-md transition-colors duration-300`}>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-2 border ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100' : 'border-gray-300 bg-white text-gray-900'} rounded-md transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-2 border ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-100' : 'border-gray-300 bg-white text-gray-900'} rounded-md transition-colors duration-300`}
                    />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
