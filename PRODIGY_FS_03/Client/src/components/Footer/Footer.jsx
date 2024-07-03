import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 ZUShop. All rights reserved.</p>
        <div className="mt-4">
          <a href="#privacy" className="text-blue-400 hover:text-blue-200 mx-2">
            Privacy Policy
          </a>
          <span className="text-gray-400 mx-2">|</span>
          <a href="#terms" className="text-blue-400 hover:text-blue-200 mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
