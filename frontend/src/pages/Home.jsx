import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
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

  const goToFeature = (index) => {
    setActiveFeature(index);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
    <Navbar />

      <header className="py-16 text-center bg-gradient-to-r from-blue-500 to-indigo-700 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Meetify</h1>
        <p className="text-2xl">Connect, Collaborate, Create Memories</p>
      </header>

      <section className="text-center mb-12 p-6">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        {features.map((feature, index) => (
          <div key={index} className="mb-8">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-700">
        <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
        <p className="text-xl mb-6">
          Join Meetify to discover a world of possibilities on your campus. Connect with like-minded peers, collaborate on exciting projects, create lasting memories, and enjoy a personalized experience like never before.
        </p>
        <button className="bg-indigo-600 text-white py-3 px-6 text-lg rounded-full hover:bg-indigo-800 transition">Sign Up Now</button>
      </section>

      <footer className="bg-indigo-800 p-8 text-center">
        <p className="text-white">© 2023 Meetify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
