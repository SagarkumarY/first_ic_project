import React from 'react';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-yellow-500 text-gray-900 py-6 mt-8 text-center w-full bottom-0 shadow-lg">
      <div className="flex justify-center space-x-4 mb-4">
        {/* Social Media Icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-800 transition-colors duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-gray-900 transition-colors duration-300" />
        </a>
      </div>
      <p className="font-medium">Copyright ⓒ {year} Keeper App</p>
    </footer>
  );
}

export default Footer;
