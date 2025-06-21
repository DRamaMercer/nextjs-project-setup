"use client";

import React, { useState } from "react";

const categories = [
  "All Categories",
  "E-books & Guides",
  "Templates & Tools",
  "Case Studies & Success Stories",
];

const types = ["All Types", "Download", "Learn More"];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [type, setType] = useState(types[0]);
  const [date, setDate] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search/filter logic or callback here
    alert(
      `Search: ${searchTerm}, Category: ${category}, Type: ${type}, Date: ${date}`
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8" aria-label="Search and Filter">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search for resources..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="rounded-md border border-[#5E6472] px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
        />
        <select
          value={category}
          onChange={handleCategoryChange}
          className="rounded-md border border-[#5E6472] px-4 py-2 w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={date}
          onChange={handleDateChange}
          className="rounded-md border border-[#5E6472] px-4 py-2 w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
        >
          <option value="">All Dates</option>
          <option value="last-7-days">Last 7 Days</option>
          <option value="last-30-days">Last 30 Days</option>
          <option value="last-year">Last Year</option>
        </select>
        <select
          value={type}
          onChange={handleTypeChange}
          className="rounded-md border border-[#5E6472] px-4 py-2 w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-[#A8DADC]"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-[#E07A5F] hover:bg-[#A8DADC] hover:text-[#1B263B] text-white font-semibold px-6 py-2 rounded transition-colors duration-300"
        >
          Search
        </button>
      </form>
    </section>
  );
}
