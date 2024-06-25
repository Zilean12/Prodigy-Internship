import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Protected = () => {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({ username: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/');
                    return;
                }

                const res = await axios.get('https://prodigy-internship.onrender.com/api/auth/protected', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessage(res.data.message);
                setUser(res.data.user);
            } catch (error) {
                console.error(error.response?.data);
                navigate('/');
            }
        };
        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User Profile</h1>
                <div className="flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-4xl">{user.username.slice(0, 1).toUpperCase()}</span>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <p className="text-xl font-semibold text-gray-900">{user.username}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full transition duration-300"
                >
                    Logout
                </button>
                {message && (
                    <p className="text-gray-600 mt-4 text-center">{message}</p>
                )}
            </div>
        </div>
    );
};

export default Protected;
