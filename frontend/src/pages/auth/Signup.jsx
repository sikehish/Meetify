import React, { useState } from 'react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    usn: '',
    email: '',
    name: '',
    age: '',
    branch: '',
    gender: '',
    year: '',
    hobbies: [],
    description: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHobbiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, hobbies: selectedOptions });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <div className="mb-4 relative">
          <div className="flex mb-2">
            <div className={`w-1/3 ${step >= 1 ? 'bg-indigo-500' : 'bg-gray-300'} h-2 rounded-full`}></div>
            <div className={`w-1/3 ${step >= 2 ? 'bg-indigo-500' : 'bg-gray-300'} h-2 rounded-full`}></div>
            <div className={`w-1/3 ${step >= 3 ? 'bg-indigo-500' : 'bg-gray-300'} h-2 rounded-full`}></div>
          </div>
          <div className="absolute top-0 left-0 text-indigo-500 font-bold" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
        {step === 1 && (
          <>
            {/* Step 1: Basic Information */}
            <div className="mb-4">
              <label htmlFor="usn" className="block text-gray-600 font-medium">
                USN
              </label>
              <input
                type="text"
                id="usn"
                name="usn"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                value={formData.usn}
                onChange={handleInputChange}
              />
            </div>
            {/* More fields... */}
          </>
        )}
        {step === 2 && (
          <>
            {/* Step 2: Additional Information */}
            <div className="mb-4">
              <label htmlFor="hobbies" className="block text-gray-600 font-medium">
                Hobbies
              </label>
              <select
                id="hobbies"
                name="hobbies"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                multiple
                onChange={handleHobbiesChange}
              >
                <option value="reading">Reading</option>
                <option value="gaming">Gaming</option>
                <option value="traveling">Traveling</option>
                <option value="cooking">Cooking</option>
              </select>
            </div>
            {/* More fields... */}
          </>
        )}
        {step === 3 && (
          <>
            {/* Step 3: Account Information */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-600 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-indigo-500"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
        <div className="flex justify-between">
          {step > 1 && (
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600" onClick={handlePrev}>
              Previous
            </button>
          )}
          {step < 3 && (
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600" onClick={handleNext}>
              Next
            </button>
          )}
          {step === 3 && (
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600"
              onClick={handleSignup}
            >
              Signup
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
