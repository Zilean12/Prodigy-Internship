import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 ZUShop. All rights reserved.</p>
        <div className="mt-4 flex justify-center">
          <Link to="/privacy" className="text-blue-400 hover:text-blue-200 mx-2">
            Privacy Policy
          </Link>
          <span className="text-gray-400 mx-2">|</span>
          <Link to="/terms" className="text-blue-400 hover:text-blue-200 mx-2">
            Terms of Service
          </Link>
        </div>
        <div className="mt-8">
          <Link to="/support" className="text-blue-400  hover:text-blue-500">
            Need Help? Submit a Support Ticket
          </Link>
        </div>
        <div className="mt-8">
        <Link to="/check-ticket-status" className="text-blue-400  hover:text-blue-500">
            Check Your Ticket Status
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
