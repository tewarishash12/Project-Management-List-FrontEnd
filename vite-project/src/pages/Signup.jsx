import React, { useState } from 'react';
import { useAuth } from '../hooks/UseAuth'; // Adjust the path if needed

const Signup = ({ darkMode }) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth(); // Access signup function from AuthContext

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                await signup(email, password, userName);
                // Redirect or show a success message after signup
            } catch (error) {
                console.error('Signup failed:', error);
                // Handle error (e.g., show error message)
            }
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div
            className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}
        >
            <form
                onSubmit={handleSubmit}
                className={`p-6 rounded-md shadow-md ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} max-w-md w-full transition-colors duration-300`}
            >
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Signup</h2>
                <div className="mb-4">
                    <label htmlFor='username' className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
                    <input
                        type="text"
                        value={userName}
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='email' className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='password' className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md font-semibold ${darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700 transition-colors duration-300`}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
