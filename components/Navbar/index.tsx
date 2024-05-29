import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';

export const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-8 w-screen">
      <div className="container mx-auto flex justify-between">
        <div className="items-start">
          <Image src={logo} alt="logo" width={200} height={150} />
        </div>
        <ul className="flex space-x-4 items-center">
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
            <button className="rounded-xl bg-white p-3">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
