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
        <div className={`login-container ${darkMode ? 'dark' : ''}`}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
                <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="teammember">Team Member</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
