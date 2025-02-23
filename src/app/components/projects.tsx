"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Finance Manager (MERN Stack)",
    image: "/FM.jpeg",
    github: "https://github.com/mekshitijsingh/Finance-Manager",
    preview: "https://github.com/mekshitijsingh/Finance-Manager",
  },
  {
    title: "OutPass (Android Studio)",
    image: "/OP.jpeg",
    github: "https://bit.ly/outpass-prototypes",
    preview: "https://bit.ly/outpass-prototypes",
  },
  {
    title: "WOW - Who Owes Whom (Django)",
    image: "/WOW.jpeg",
    github: "https://github.com/mekshitijsingh/WhoOwesWhom",
    preview: "https://github.com/mekshitijsingh/WhoOwesWhom",
  },
  {
    title: "Inverse Cooking",
    image: "/IC.jpeg",
    github: "https://github.com/mekshitijsingh/Inverse-Cooking",
    preview: "https://github.com/mekshitijsingh/Inverse-Cooking",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen px-6 py-10 text-white bg-gradient-to-t from-gray-900 to-black font-poppins">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Title Section */}
      <div className="relative z-10 mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-purple-500 md:text-4xl lg:text-5xl drop-shadow-lg">
          My Projects
        </h2>
        <p className="mt-3 text-base text-gray-300 font-open-sans md:text-lg">
          A showcase of my innovative work, blending creativity with functionality.
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative z-10 grid max-w-5xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-2">
        {/* Dynamic Horizontal Line */}
        <div className="absolute top-1/2 left-0 hidden w-full h-[3px] bg-gray-300 transform -translate-y-1/2 lg:block"></div>

        {/* Dynamic Vertical Line */}
        <div className="absolute left-1/2 top-0 hidden w-[3px] h-full bg-gray-300 transform -translate-x-1/2 lg:block"></div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full max-w-xs mx-auto overflow-hidden border border-gray-700 rounded-lg shadow-lg group sm:w-[320px] md:w-[360px] h-[320px]"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={360}
              height={360}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
              <h3 className="text-base font-semibold text-white sm:text-lg font-poppins">
                {project.title}
              </h3>
              <div className="flex space-x-3">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                  title="View GitHub"
                >
                  <FaGithub size={22} />
                </a>
                {/* Live Preview Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-white bg-purple-600 rounded-lg hover:bg-purple-500 font-open-sans text-sm"
                  title="Live Preview"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
