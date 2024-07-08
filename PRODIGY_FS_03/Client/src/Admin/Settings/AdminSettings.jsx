import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminSettings = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    phone: '',
    role: '',
    businessName: '',
    businessAddress: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('https://prodigy-internship-fs03.onrender.com/api/profile/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching profile');
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.put('https://prodigy-internship-fs03.onrender.com/api/profile/', profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Profile updated successfully');
      setProfile(data.user);
    } catch (error) {
      setError('Error updating profile');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Settings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {success && <p className="text-green-500">{success}</p>}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Profile Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={profile.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="businessAddress">Business Address</label>
                <input
                  type="text"
                  id="businessAddress"
                  name="businessAddress"
                  value={profile.businessAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update Profile
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSettings;
