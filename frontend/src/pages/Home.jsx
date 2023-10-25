import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      <Navbar />

      <header className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-700 animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Meetify</h1>
        <p className="text-2xl">Connect, Collaborate, Create Memories</p>
      </header>

      <section className="h-screen relative overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            feature={feature}
            isActive={index === activeFeature}
            isFirst={index === 0}
            isLast={index === features.length - 1}
            onNext={nextFeature}
            onPrev={prevFeature}
          />
        ))}
      </section>

      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-700">
        <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
        <p className="text-xl mb-6">
          Join Meetify to discover a world of possibilities on your campus. Connect with like-minded peers, collaborate on exciting projects, create lasting memories, and enjoy a personalized experience like never before.
        </p>
        <button className="bg-indigo-600 text-white py-3 px-6 text-lg rounded-full hover:bg-indigo-800 transition">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
