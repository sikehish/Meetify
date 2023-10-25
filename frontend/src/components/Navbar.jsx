import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-white">Meetify</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <a className="text-white" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="#login">
              Login
            </a>
          </li>
          <li>
            <a className="text-white" href="#meets">
              Meets
            </a>
          </li>
          <li>
            <a className="text-white" href="#profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
