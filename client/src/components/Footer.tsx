import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0 flex items-center space-x-2">
          <span className="font-bold">© {new Date().getFullYear()} HLSG Industries.</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="/policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="/policy" className="hover:text-blue-400 transition-colors">Data Protection Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 