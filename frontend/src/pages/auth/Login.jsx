import React, { useState } from 'react';

const Login = () => {
  const [usn, setUsn] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (usn && password) {
      console.log('Login successful');
    } else {
      console.log('Login failed. Please fill in both fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login to Your Account</h2>
        <div className="mb-4">
          <label htmlFor="usn" className="block text-gray-600 font-medium">
            USN or Email
          </label>
          <input
            type="text"
            id="usn"
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-indigo-500 text-white rounded w-full py-2 font-semibold hover:bg-indigo-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
