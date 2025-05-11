'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 sm:py-8 bg-[#1f1f1f] text-center text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm sm:text-base">© {new Date().getFullYear()} Roger Basantes.</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link 
              href="/"
              className="text-gray-400 hover:text-[#f4cda6] text-sm transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-gray-400 hover:text-[#f4cda6] text-sm transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects"
              className="text-gray-400 hover:text-[#f4cda6] text-sm transition-colors"
            >
              Projects
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-4 sm:mt-0">
            <a 
              href="https://github.com/rogb1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img src="/github.png" alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/roger-basantes-1357652b3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="mailto:rnb2@njit.edu"
              className="transition-transform hover:scale-110"
            >
              <img src="/gmail.png" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
