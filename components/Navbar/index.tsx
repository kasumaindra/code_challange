import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 md:p-8 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <Image src={logo} alt="logo" width={200} height={150} />
          </a>
        </div>
        <div className="block md:hidden">
          <button id="nav-toggle" className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-11 items-center text-xl" id="nav-menu">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="business" className="text-white hover:text-gray-300">
              Opportunity
            </a>
          </li>
          <li>
            <button className="rounded-xl bg-white p-4">Login</button>
          </li>
        </ul>
      </div>
      <ul className="flex-col hidden space-y-4 mt-4 items-center text-xl md:hidden" id="nav-menu-mobile">
        <li>
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300">
            About Us
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="business" className="text-white hover:text-gray-300">
            Opportunity
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
