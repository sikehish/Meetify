import React from 'react';

const FeatureCard = ({ feature, isActive, isFirst, isLast, onNext, onPrev }) => {
  const cardClasses = `w-80 mx-auto ${
    isActive ? 'opacity-100' : 'opacity-0'
  } absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-500 ease-in-out mx-28`;

  return (
    <div className={cardClasses}>
      <div className="bg-white bg-opacity-20 p-8 rounded-xl text-center">
        <div className="text-5xl mb-4">{feature.icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
