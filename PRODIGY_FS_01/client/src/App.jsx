import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Protected from './components/Protected.jsx';
import Navbar from './components/Navbar.jsx';

const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/" />;
};

const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavbar = location.pathname === '/' || location.pathname === '/register';

    return (
        <>
            {!hideNavbar && <Navbar />}
            <div className="container mx-auto p-4">{children}</div>
        </>
    );
};

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/protected" element={<PrivateRoute element={<Protected />} />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
