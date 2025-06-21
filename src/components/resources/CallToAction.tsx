"use client";

import React from "react";

export default function CallToAction() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16 bg-white flex flex-col md:flex-row items-center gap-8"
      aria-label="Call to Action Section"
    >
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4 text-[#1B263B]">
          Ready to Transform with the Right Tools?
        </h2>
        <p className="text-[#5E6472] mb-6">
          Sign up to access exclusive resources and updates delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="rounded-md border border-[#5E6472] px-4 py-2 w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
          />
          <button
            type="submit"
            className="bg-[#E07A5F] hover:bg-[#A8DADC] hover:text-[#1B263B] text-white font-semibold px-6 py-2 rounded transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="md:w-1/2">
        <img
          src="/globe.svg"
          alt="Newsletter signup illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
