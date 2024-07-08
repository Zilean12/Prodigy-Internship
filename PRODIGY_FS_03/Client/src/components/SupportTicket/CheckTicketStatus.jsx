import React, { useState } from 'react';
import axios from 'axios';

const CheckTicketStatus = () => {
  const [ticketId, setTicketId] = useState('');
  const [ticket, setTicket] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    if (!token) {
      setError('You must be logged in to check ticket status.');
      return;
    }

    try {
      const response = await axios.get(`https://prodigy-internship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.comnship-fs03.onrender.com/api/support/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTicket(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching ticket status.');
      console.error('Error fetching ticket status:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-16 mb-16 border border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Check Ticket Status</h2>
      {error && <p className="text-red-600 mb-6 text-center">{error}</p>}
      {ticket && (
        <div className="mb-8 bg-gray-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Ticket ID: {ticket._id}</h3>
          <p className="mb-2"><span className="font-medium">Subject:</span> {ticket.subject}</p>
          <p className="mb-2"><span className="font-medium">Message:</span> {ticket.message}</p>
          <p><span className="font-medium">Status:</span> {ticket.status}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="ticketId">Ticket ID</label>
          <input
            type="text"
            id="ticketId"
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          Check Status
        </button>
      </form>
    </div>
  );
};

export default CheckTicketStatus;
