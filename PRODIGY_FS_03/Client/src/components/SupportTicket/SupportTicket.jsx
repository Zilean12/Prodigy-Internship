import React, { useState } from 'react';
import axios from 'axios';

const SupportTicket = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    if (!token) {
      setError('You must be logged in to submit a support ticket.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/support', {
        subject,
        message,
        contactMethod,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Support ticket submitted successfully.');
      setSubject('');
      setMessage('');
      setContactMethod('email');
      setError('');
    } catch (err) {
      setError('Failed to submit support ticket.');
      console.error('Error submitting support ticket:', err);
    }
  };
  

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Submit a Support Ticket</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full border rounded p-2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="contactMethod">Preferred Contact Method</label>
          <select
            id="contactMethod"
            className="w-full border rounded p-2"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            required
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default SupportTicket;
