import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // Replace with your API endpoint
                const response = await fetch('https://backend-7coa.onrender.com/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include your auth token here
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    throw new Error('Failed to fetch profile');
                }
            } catch (error) {
                setError(error.message);
                if (error.message === 'Failed to fetch profile') {
                    navigate('/login'); // Redirect to login if profile fetch fails
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <Link to= "/auth/profile">
        <div className="container mx-auto p-6">
        <div className="flex flex-col items-center">
            <div className="bg-gray-100 p-4 rounded-full shadow-lg w-32 h-32 flex items-center justify-center">
                {/* Placeholder for profile picture */}
                <img
                    src={user?.profilePicture || 'https://via.placeholder.com/150'}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mt-4">{user?.name}</h1>
        </div>
        <div className="bg-white shadow-md rounded p-6 mt-6">
            <p className="text-lg"><strong>Email:</strong> {user?.email}</p>
            <p className="text-lg"><strong>Role:</strong> {user?.role}</p>
            {/* Add other user fields as needed */}
        </div>
    </div>
    </Link>
    );
};

export default ProfilePage;
