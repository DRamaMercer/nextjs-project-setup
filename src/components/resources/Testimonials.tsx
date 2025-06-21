"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "These resources transformed the way I work. Highly recommended!",
    name: "Jane Doe",
  },
  {
    id: 2,
    quote:
      "The guides and tools helped me grow my business faster than I imagined.",
    name: "John Smith",
  },
  {
    id: 3,
    quote:
      "A fantastic collection of resources that are easy to use and very effective.",
    name: "Emily Johnson",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8"
      aria-label="Testimonials Section"
    >
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-8 text-[#1B263B]">
          See How Our Resources Have Made an Impact
        </h2>
        <div className="relative bg-white border border-[#5E6472] rounded-lg p-8 shadow">
          <p className="text-lg italic mb-4 text-[#5E6472]">
            "{testimonials[currentIndex].quote}"
          </p>
          <p className="font-semibold text-[#1B263B]">
            - {testimonials[currentIndex].name}
          </p>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#E07A5F] text-white rounded-full p-2 hover:bg-[#A8DADC] hover:text-[#1B263B] transition-colors duration-300"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#E07A5F] text-white rounded-full p-2 hover:bg-[#A8DADC] hover:text-[#1B263B] transition-colors duration-300"
          >
            &#8594;
          </button>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="/window.svg"
          alt="Success representation"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
