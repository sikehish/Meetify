import React from 'react';

const FeatureCard = ({ feature, isActive }) => {
  return (
    <div className={`bg-white p-6 rounded-xl ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
