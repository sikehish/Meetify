import React, { useState } from 'react';
import {Link} from "react-router-dom"
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {state, dispatch} = useAuthContext()

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
           <Link to="/" className='text-white'>
              Home
          </Link>
          {!state.user && <Link to="/login" className='text-white'>
              Login
          </Link>}
          {state.user && <Link to="/" className='text-white'>
              Meets
          </Link>}
          {state.user && <Link to="/profile" className='text-white'>
              Profile
          </Link>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
