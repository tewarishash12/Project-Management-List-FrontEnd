import React, { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';

const Signup = ({ darkMode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const { signup } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
        //     signup(email, password);
        // } else {
        //     alert('Passwords do not match');
        // }
    };

    return (
        <div
            className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
        >
            <form
                onSubmit={handleSubmit}
                className={`p-6 rounded-md shadow-md ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} 
                            max-w-md w-full`}
            >
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Signup</h2>
                <div className="mb-4">
                    <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                </div>
                <div className="mb-4">
                    <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                </div>
                <div className="mb-6">
                    <label className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md font-semibold ${darkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'} hover:bg-indigo-700`}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
