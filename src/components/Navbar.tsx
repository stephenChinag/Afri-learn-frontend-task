"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  // State to control the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-wrap justify-between items-center gap-5 px-4 py-3 z-10 bg-white shadow-md md:px-6">
      {/* Left Section - Navigation Path */}
      <div className="flex items-center">
        <button
          className="text-custom-gray font-semibold flex items-center justify-center gap-2 md:gap-5"
          // onClick={() => router.back()}
        >
          <Image src="/left-arrow.svg" alt="arr" width={10} height={10} />
          <span className="text-sm md:text-base">Assessment</span>
        </button>
      </div>

      {/* Center Section - Navigation Path */}
      <div className="flex-grow flex items-center justify-start space-x-1 md:space-x-2 text-xs md:text-base">
        <span className="text-gray-1000 font-bold">Primary 1</span>
        <span className="hidden md:inline">.</span>{" "}
        {/* Hide separator on small screens */}
        <span className="text-gray-1000 font-bold">Mid Term Test</span>
        <span className="hidden md:inline">.</span>{" "}
        {/* Hide separator on small screens */}
        <span className="text-gray-1000 font-bold">Agricultural Science</span>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-black focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - Test Info and Buttons */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-20`}
      >
        <button className="flex items-center text-gray-600 hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-7-3a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <span>Test Info</span>
        </button>

        <button className="flex items-center text-gray-600 hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm5 4a1 1 0 00-2 0v2a1 1 0 102 0v-2zm4-1a1 1 0 10-2 0v3a1 1 0 002 0V8z" />
          </svg>
          <span>Test Preview</span>
        </button>

        {/* Activate Test Button */}
        <button className="flex items-center px-3 md:px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6.414V7.414A1 1 0 0010.707 7l4.586 4.586a1 1 0 010 1.414L10.707 17A1 1 0 009 16.293v-4.707z"
              clipRule="evenodd"
            />
          </svg>
          <span>Activate Test</span>
        </button>
      </div>
    </div>
  );
}
