import React from 'react';

const FeatureCard = ({ feature, isActive, onPrev, onNext, isFirst, isLast }) => {
  return (
    <div
      className={`h-screen w-full text-white text-center flex flex-col items-center justify-center transition-opacity transform ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-400 mb-4">{feature.description}</p>
      <div className="mb-6 flex justify-center space-x-6">
        {!isFirst && (
          <div
            onClick={onPrev}
            className="cursor-pointer text-indigo-500 text-4xl"
          >
            ▲
          </div>
        )}
        {!isLast && (
          <div
            onClick={onNext}
            className="cursor-pointer text-indigo-500 text-4xl"
          >
            ▼
          </div>
        )}
      </div>
    </div>
  )
};

export default FeatureCard;
