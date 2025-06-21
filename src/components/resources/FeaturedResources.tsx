"use client";

import React, { useState } from "react";

const featuredResources = [
  {
    id: 1,
    title: "Ultimate Guide to Productivity",
    description: "Boost your efficiency with proven strategies.",
    thumbnail: "/file.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Marketing Templates Pack",
    description: "Ready-to-use templates for your campaigns.",
    thumbnail: "/globe.svg",
    link: "#",
  },
  {
    id: 3,
    title: "Success Story: Startup Growth",
    description: "Learn how a startup scaled rapidly.",
    thumbnail: "/next.svg",
    link: "#",
  },
  {
    id: 4,
    title: "Design Tools Overview",
    description: "Explore essential design tools for creatives.",
    thumbnail: "/vercel.svg",
    link: "#",
  },
];

export default function FeaturedResources() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredResources.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredResources.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" aria-label="Featured Resources">
      <h2 className="text-3xl font-semibold mb-8 text-[#1B263B]">Featured Resources</h2>
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredResources.map((resource) => (
              <div
                key={resource.id}
                className="min-w-full flex-shrink-0 p-4 cursor-pointer"
              >
                <div className="border border-[#E07A5F] rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#1B263B]">
                      {resource.title}
                    </h3>
                    <p className="text-[#5E6472] mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="inline-block bg-[#E07A5F] text-white px-4 py-2 rounded hover:bg-[#A8DADC] hover:text-[#1B263B] transition-colors duration-300"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#E07A5F] text-white rounded-full p-2 hover:bg-[#A8DADC] hover:text-[#1B263B] transition-colors duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#E07A5F] text-white rounded-full p-2 hover:bg-[#A8DADC] hover:text-[#1B263B] transition-colors duration-300"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
