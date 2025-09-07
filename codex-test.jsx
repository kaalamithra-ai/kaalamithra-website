// create a simple button in React with Tailwind that logs "clicked"
import React from "react";

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
      Welcome to Kaalascaffold
    </h1>
    <p className="text-lg md:text-2xl text-gray-600 text-center mb-8">
      Build your next project faster with our powerful tools and templates.
    </p>
    <button
      className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      onClick={() => console.log("CTA clicked")}
    >
      Get Started
    </button>
  </section>
);