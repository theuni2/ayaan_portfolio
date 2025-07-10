"use client";

import React from 'react';
import { Bree_Serif } from 'next/font/google';

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <a
          href="/"
          className={`text-xl text-gray-800 hover:text-orange-700 transition-all duration-300 ${breeSerif.className}`}
        >
          Ayaan Raj Khanna
        </a>

        <div className="flex mt-4 md:mt-0 space-x-4">
         
          <a href="https://www.instagram.com/p/DL4ec6Kvmji/?igsh=MWYyb2FhbXRydHd0MA%3D%3D" className="text-gray-500 hover:text-orange-600 transition-transform transform hover:scale-110">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ayaan-raj-khanna-316529324/" className="text-gray-500 hover:text-orange-600 transition-transform transform hover:scale-110">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-6 mt-2">
        © {new Date().getFullYear()} Ayaan Raj Khanna. All rights reserved.
      </div>
    </footer>
  );
}
