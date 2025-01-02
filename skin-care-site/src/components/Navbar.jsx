import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-off-white-background-one shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 md:px-32 py-4 flex justify-between items-center">
        {/* Logo */}
        <img className="h-10" src={Logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Home
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Shop
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Products
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            About Us
          </li>
          <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Account Button (Visible on all screen sizes) */}
        <button className="hidden md:block text-gray-700 border rounded-full px-4 py-1 hover:bg-gray-200">
          My Account
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-off-white-background-one px-6 py-4">
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Shop
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Products
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Contact
            </li>
          </ul>
          <button className="mt-4 w-full text-gray-700 border rounded-full px-4 py-2 hover:bg-gray-200">
            My Account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
