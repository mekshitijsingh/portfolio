"use client";

import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import About from "./aboutme";
import Services from "./services";
import Projects from "./projects";
import Contact from "./contact";

export default function HeroSection() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen pt-[90px] flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black font-poppins"
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay"></div>

        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Hey, I&apos;m Kshitij Singh
            <br />
            Software Developer.
          </h1>

          {/* Subtitle Text */}
          <div className="flex justify-center mt-5">
            <p className="max-w-lg text-sm text-center text-gray-300 font-open-sans sm:text-base md:text-lg lg:text-xl">
              Building seamless digital experiences from front to back, one stack at a time.
            </p>
          </div>

          {/* Decorative Graphic */}
          <div className="flex items-center justify-center w-full mt-8">
            <div className="w-full max-w-xs h-48 sm:max-w-md sm:h-64 md:max-w-2xl md:h-80 lg:h-[380px]">
              <Image
                src="/heroImage.png"
                alt="Decorative Graphic"
                className="object-cover w-full h-full"
                width={700}
                height={350}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
      <section id="experience">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
