import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext'; // Adjust path if needed
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ darkMode }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // Add state for role
    const [roleLabel, setRoleLabel] = useState('Select a role'); // Add state for role label
    const [error, setError] = useState(''); // Add state for error message

    // const { login } = useAuth(); // Access login function from AuthContext

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole);

        switch (selectedRole) {
            case 'admin':
                setRoleLabel('admin');
                break;
            case 'manager':
                setRoleLabel('manager');
                break;
            case 'teammember':
                setRoleLabel('teammember');
                break;
            default:
                setRoleLabel('Select a role');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!role) {
            setError('Please select a role.');
            return;
        }

        try {
            // await login(email, password);
            navigate('/');
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
            navigate('/auth/login');
        }
    };

    return (
        <div 
            className={`flex justify-center items-center h-screen bg-no-repeat bg-center bg-cover`} 
            style={{ backgroundImage: `url('https://img.freepik.com/free-vector/stylish-white-background-with-diagonal-lines_1017-33199.jpg')` }} // Adjust with the actual background URL
        >
            <form 
                onSubmit={handleSubmit} 
                className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-900'} p-6 rounded-md shadow-md w-full max-w-md transition-colors duration-300`}
            >
                <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
                
                {error && <p className="text-red-500 mb-4">{error}</p>}

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

                <div className="mb-4">
                    <label htmlFor="role" className={`block mb-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</label>
                    <select
                        id="role"
                        value={role}
                        name='role'
                        onChange={handleRoleChange}
                        className={`w-full mb-7 p-3 border rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300`}
                    >
                        <option disabled>Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="teammember">Team Member</option>
                    </select>
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Login
                </button>

                <div className="block mt-8 text-center">
                    Don't have an account? <Link to="/auth/signup" className='text-blue-600 hover:text-blue-700 hover:underline'>Sign up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
