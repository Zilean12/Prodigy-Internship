import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/" className="mr-6 hover:text-gray-300 transition duration-300">MyApp</Link>
                    {token && <Link to="/protected" className="mr-6 hover:text-gray-300 transition duration-300">Profile</Link>}
                </div>
                <div>
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <div>
                            <Link to="/login" className="text-white mr-4 hover:text-gray-300 transition duration-300">Login</Link>
                            <Link to="/register" className="text-white hover:text-gray-300 transition duration-300">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
