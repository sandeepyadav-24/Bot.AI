import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Bot.AI</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Features
          </a>
          <a
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Login
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block py-2 hover:text-gray-400">
            Home
          </a>
          <a href="#" className="block py-2 hover:text-gray-400">
            Features
          </a>
          <a
            href="/signup"
            className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 my-2"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-2"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
