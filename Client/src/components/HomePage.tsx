"use client";
import React from "react";
import Navbar from "./Navbar";

const HomePage = () => {
  const features = [
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "Understands and responds to human language naturally.",
    },
    {
      icon: "⚡",
      title: "Fast & Efficient",
      description: "Delivers instant responses with minimal latency.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data is always safe and encrypted.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your AI-Powered Chatbot Solution
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Experience the future of conversational AI with ChatBot AI.
            Intelligent, fast, and reliable.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose ChatBot AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2023 ChatBot AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
