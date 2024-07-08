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
      const response = await axios.post('https://prodigy-internship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.com/api/support', {
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
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-12 mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Submit a Support Ticket</h2>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-5">
          <label className="block text-gray-800 font-medium mb-2" htmlFor="contactMethod">Preferred Contact Method</label>
          <select
            id="contactMethod"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            required
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-500 transition duration-300">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default SupportTicket;
