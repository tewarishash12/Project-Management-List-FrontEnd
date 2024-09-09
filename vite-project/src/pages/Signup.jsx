import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = ({ darkMode }) => {
    const { signup } = useAuth();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('teammember'); // Default role

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(username, email, password, role);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className={`signup-container ${darkMode ? 'dark' : ''}`}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="teammember">Team Member</option>
                </select>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
