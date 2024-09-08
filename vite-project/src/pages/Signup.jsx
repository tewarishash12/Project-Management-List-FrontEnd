import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the path if needed
import { useNavigate,Link } from 'react-router-dom';

const Signup = ({ darkMode }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useAuth(); // Access signup function from AuthContext

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(username, email, password, role); // Include role in signup
            navigate('/');
        } catch (error) {
            console.error('Signup failed:', error);
            navigate('/auth/signup');
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
                <h2 className={`text-2xl text-center font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Signup</h2>
                <div className="mb-4">
                    <label htmlFor="username" className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Username</label>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</label>
                    <select
                        id="role"
                        value={role}
                        name="role"
                        onChange={handleRoleChange}
                        className={`w-full mb-7 p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    >
                        <option value="" disabled>Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="teamMember">Team Member</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md font-semibold ${darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700 transition-colors duration-300`}
                >
                    Signup
                </button>
                <Link to="/auth/login" className="block mt-8 text-blue-600 hover:text-blue-700 hover:underline text-center">
                    Already Registered? Login
                </Link>
            </form>
        </div>
    );
};

export default Signup;
