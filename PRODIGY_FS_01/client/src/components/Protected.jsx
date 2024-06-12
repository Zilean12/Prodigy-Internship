import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Protected = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/api/auth/protected', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessage(res.data.message);
            } catch (error) {
                console.error(error.response.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="max-w-md mx-auto mt-4">
            <h1 className="text-2xl mb-4">Protected Route</h1>
            <p>{message}</p>
        </div>
    );
};

export default Protected;
