"use client";

import React from "react";
import HeroSection from "@/components/resources/HeroSection";
import ResourceCategories from "@/components/resources/ResourceCategories";
import FeaturedResources from "@/components/resources/FeaturedResources";
import SearchFilter from "@/components/resources/SearchFilter";
import Testimonials from "@/components/resources/Testimonials";
import CallToAction from "@/components/resources/CallToAction";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function ResourcesPage() {
  return (
    <main className={`${montserrat.variable} font-sans bg-white text-[#1B263B]`}>
      <HeroSection />
      <ResourceCategories />
      <FeaturedResources />
      <SearchFilter />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
