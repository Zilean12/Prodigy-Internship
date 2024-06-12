import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password, role });
            console.log(res.data);
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'An error occurred during registration');
            } else {
                setErrorMessage('An error occurred during registration');
            }
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
            <h1 className="text-2xl mb-4">Register</h1>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <div className="mb-4">
                <label className="block">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border w-full p-2" />
            </div>
            <div className="mb-4">
                <label className="block">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full p-2" />
            </div>
            <div className="mb-4">
                <label className="block">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border w-full p-2" />
            </div>
            <div className="mb-4">
                <label className="block">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="border w-full p-2">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
        </form>
    );
};

export default Register;
