"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-gradient-to-r from-[#1B263B] to-[#A8DADC] text-white text-center py-20 px-4"
      aria-label="Hero Section"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your Journey with Expert Tools and Insights.
        </h1>
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-1 bg-[#E07A5F] rounded mr-3"></div>
          <p className="text-lg md:text-xl max-w-xl">
            Explore a curated collection of resources designed to help you thrive.
          </p>
        </div>
        <button
          type="button"
          className="bg-[#E07A5F] hover:bg-[#A8DADC] hover:text-[#1B263B] text-white font-semibold py-3 px-8 rounded transition-colors duration-300"
        >
          Browse Resources
        </button>
      </div>
    </section>
  );
}
