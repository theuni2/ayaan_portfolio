"use client";

import React from 'react';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/extra/hero1.jpeg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 md:px-0">
        {/* bg-[#001f5f] */}
        <h1
          className={`${lobster.className} text-5xl md:text-6xl font-bold text-blue-700 mb-6 drop-shadow-lg`}
        >
          Empowering Through Tech
        </h1>
      <p className="text-white text-lg md:text-xl max-w-xl mx-auto drop-shadow-md leading-relaxed">
  A student with a dream to empower people <br />
  through the use of technology.
</p>

      </div>
    </section>
  );
}

