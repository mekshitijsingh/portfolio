"use client";
import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 text-white md:flex-row bg-gradient-to-b from-black to-gray-900 font-poppins">
      {/* Grid Overlay Background */}
      <div className="grid-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full md:flex-row md:items-center md:space-x-10">
        {/* Heading */}
        <div className="mb-5 text-center md:hidden">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            About Me
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex justify-center flex-1 mt-6 md:mt-0">
          <div className="overflow-hidden rounded-full shadow-lg w-56 h-56 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]">
            <Image
              src="/myImage.jpeg"
              alt="Profile"
              className="object-cover w-full h-full"
              width={320}
              height={320}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-5xl px-4 sm:px-6 md:px-8 lg:pr-16">
          {/* Heading for larger screens */}
          <div className="hidden mb-5 text-left md:block">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              About Me
            </h2>
          </div>
          <p className="mt-3 text-base leading-relaxed text-center text-gray-300 font-open-sans md:text-left sm:text-lg lg:text-lg">
            I’m Kshitij Singh, a dedicated B.Tech Computer Science student at SRM University, AP, graduating in 2025. Proficient in Java, JavaScript, and Data Structures, I have built hands-on expertise with the MERN stack.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-center text-gray-400 font-open-sans md:text-left sm:text-base lg:text-base">
            My journey in tech is driven by a passion for software development and innovation. Through active roles in the Student Council and as a School Head Boy, I’ve honed my leadership, teamwork, and problem-solving skills that extend well beyond the classroom.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-center text-gray-400 font-open-sans md:text-left sm:text-base lg:text-base">
            I have successfully executed projects such as the Finance Manager using the MERN stack, an OutPass application developed in Android Studio, and WOW - Who Owes Whom using Django. Each project has enabled me to merge technical precision with practical problem-solving to create user-centric solutions.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-center text-gray-400 font-open-sans md:text-left sm:text-base lg:text-base">
            Beyond academics, my involvement in extracurricular activities has enriched my skill set and broadened my perspective. I continuously seek opportunities to learn, adapt, and innovate, whether through collaborative initiatives or independent projects.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-center text-gray-400 font-open-sans md:text-left sm:text-base lg:text-base">
            With a strong foundation in both technical and soft skills, I am committed to leveraging technology to drive meaningful change and deliver impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
