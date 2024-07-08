import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManageTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('https://prodigy-internship-fs03.onrender.com/api/support/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found');
      }

      await axios.put(`https://prodigy-internship-fs03.onrender.com/api/support/${id}/status`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Ticket status updated successfully');
      
      // Update the ticket status locally
      setTickets(tickets.map(ticket => ticket._id === id ? { ...ticket, status } : ticket));
    } catch (error) {
      console.error('Error updating ticket status:', error);
      alert('Failed to update ticket status');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Manage Support Tickets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
              <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">User</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map(ticket => (
              <tr key={ticket._id}>
                <td className="py-4 px-6 whitespace-nowrap">{ticket._id}</td>
                <td className="py-4 px-6 whitespace-nowrap">{ticket.subject}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={ticket.status}
                    onChange={(e) => handleStatusChange(ticket._id, e.target.value)}
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  {ticket.userId ? ticket.userId.username : 'No User'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTickets;
