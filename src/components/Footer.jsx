import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <p>&copy; {new Date().getFullYear()} Mini Unsplash Clone. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;