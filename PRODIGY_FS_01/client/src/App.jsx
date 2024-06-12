import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Protected from './components/Protected.jsx';

function App() {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/protected" element={<Protected />} />
                    <Route path="*" element={<div>Default Route</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;