'use client';

import React, { useState } from 'react';
import { Bree_Serif } from 'next/font/google';
import Link from 'next/link';

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex title-font font-medium items-center text-gray-900">
          <span className={`${breeSerif.className} ml-3 text-xl`}>Ayaan Raj Khanna</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none transition-all duration-300`}
        >

          <Link href="/" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/#research" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Research/Publication</Link>
          <Link href="/#engineering" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Engineering</Link>
          <Link href="/#gallery" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/leadership" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Leadership</Link>
          <Link href="/work_ex" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Work Experience</Link>
          <Link href="/community" className="text-gray-800 hover:text-orange-600" onClick={() => setIsOpen(false)}>Community Service</Link>
        </nav>
      </div>
    </header>
  );
}



