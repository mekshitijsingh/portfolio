"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Import green tick icon

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    const email = "singh.ksh007@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide the notification after 3 seconds
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 text-white bg-gradient-to-b from-gray-900 to-black font-poppins">
      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="fixed z-50 flex items-center gap-2 px-4 py-2 text-sm text-black transition-all duration-300 transform -translate-x-1/2 bg-white rounded-lg shadow-lg top-5 left-1/2 md:text-base">
          <span>Email copied to clipboard!</span>
          <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
        </div>
      )}

      {/* Get in Touch Section */}
      <div className="relative z-10 mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Get in <span className="text-purple-500">Touch</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Email */}
          <div
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-white border border-gray-500 rounded-lg cursor-pointer md:text-lg font-open-sans hover:bg-gray-800"
            onClick={handleCopyEmail}
            title="Click to copy email"
          >
            <FaEnvelope />
            <span>singh.ksh007@gmail.com</span>
          </div>
          {/* Phone */}
          <div className="flex items-center gap-2 px-4 py-2 text-base font-medium text-white border border-gray-500 rounded-lg md:text-lg font-open-sans hover:bg-gray-800">
            <FaPhone />
            <span>+91 9905238986</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 px-4 py-2 text-base font-medium text-white border border-gray-500 rounded-lg md:text-lg font-open-sans">
            <FaMapMarkerAlt />
            <span>Bokaro Steel City, India</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative z-10 text-center">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/mekshitijsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaGithub className="text-gray-800" />
            <span>GitHub</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://in.linkedin.com/in/mekshitijsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-base font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 md:text-lg font-open-sans"
          >
            <FaLinkedin className="text-blue-700" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
