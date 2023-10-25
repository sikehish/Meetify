import React, { useState } from 'react';

const App = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Find Like-minded Peers",
      description: "Discover students who share your interests and passions.",
      icon: "🤝",
    },
    {
      title: "Collaborate Effortlessly",
      description: "Work on projects and assignments together with your newfound friends.",
      icon: "🤝📚",
    },
    {
      title: "Create Lasting Memories",
      description: "Enjoy college life to the fullest with fun events and adventures.",
      icon: "📷🎉",
    },
    {
      title: "Personalized Experience",
      description: "Tailored recommendations and meetups just for you.",
      icon: "🧩✨",
    },
  ];

  const nextFeature = () => {
    setActiveFeature((activeFeature + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveFeature((activeFeature - 1 + features.length) % features.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-700 text-white p-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold">Welcome to Meetify</h1>
        <p className="text-2xl mt-4">Connect, Collaborate, Create Memories</p>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Features</h2>
        <div className="relative mt-6">
          <div className="absolute top-0 left-0 bottom-0 right-0 z-10 flex items-center justify-center">
            <button
              className="text-3xl text-white hover:text-indigo-300 transition transform hover:scale-110 focus:outline-none"
              onClick={prevFeature}
            >
              &#9664;
            </button>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="p-8 mx-4 bg-white bg-opacity-10 rounded-xl">
              <div className="text-5xl mb-4">{features[activeFeature].icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{features[activeFeature].title}</h3>
              <p className="text-gray-400">{features[activeFeature].description}</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 bottom-0 right-0 z-10 flex items-center justify-center">
            <button
              className="text-3xl text-white hover:text-indigo-300 transition transform hover:scale-110 focus:outline-none"
              onClick={nextFeature}
            >
              &#9654;
            </button>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold">Get Started</h2>
        <p className="text-xl mt-4">Join Meetify and make your college life unforgettable!</p>
        <button className="bg-indigo-600 text-white py-3 px-6 mt-6 text-lg rounded-full hover:bg-indigo-700 transition">Sign Up Now</button>
      </section>
    </div>
  );
};

export default App;
