import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://prodigy-internship.onrender.com/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/protected');
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'An error occurred during login');
            } else {
                setErrorMessage('An error occurred during login');
            }
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
            <h1 className="text-2xl mb-4">Login</h1>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="mb-4">
                <label className="block">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2" />
            </div>
            <div className="mb-4">
                <label className="block">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
            <p className="mt-4">
                Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
            </p>
        </form>
    );
};

export default Login;
