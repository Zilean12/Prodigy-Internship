// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { isAuthenticated } from './services/authService';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/employees"
          element={isAuthenticated() ? <EmployeeList /> : <Navigate to="/login" />}
        />
        <Route
          path="/employees/:id"
          element={isAuthenticated() ? <EmployeeForm /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-employee"
          element={isAuthenticated() ? <EmployeeForm /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/employees" />} />
      </Routes>
    </Router>
  );
};

export default App;
