"use client";

import React from "react";

const categories = [
  {
    title: "E-books & Guides",
    description: "Comprehensive guides and e-books to deepen your knowledge.",
  },
  {
    title: "Templates & Tools",
    description: "Ready-to-use templates and tools to boost your productivity.",
  },
  {
    title: "Case Studies & Success Stories",
    description: "Inspiring case studies and success stories from real users.",
  },
];

export default function ResourceCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" aria-label="Resource Categories">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`category-card bg-white border border-[#5E6472] rounded-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:text-[#E07A5F] ${
              index % 2 === 0 ? "bg-[#5E6472] text-white" : "bg-white text-[#1B263B]"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="mb-4">{category.description}</p>
            <button
              type="button"
              className={`inline-block px-4 py-2 rounded text-sm font-medium border ${
                index % 2 === 0
                  ? "border-white text-white hover:bg-[#E07A5F] hover:text-white"
                  : "border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white"
              } transition-colors duration-300`}
            >
              View Resources
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
