import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
            <h1 className="text-2xl mb-4">Login</h1>
            <div className="mb-4">
                <label className="block">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2" />
            </div>
            <div className="mb-4">
                <label className="block">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
        </form>
    );
};

export default Login;
