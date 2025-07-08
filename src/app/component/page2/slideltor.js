import React from 'react';
import './patnership.css'; // Ensure this contains your animation CSS

export default function Slideltor() {
  return (
    <section className="overflow-x-hidden pb-16 bg-white">
      {/* Heading Section */}
      <div className="text-center mt-36 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Research & Global Partnerships
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Through strategic collaborations with <strong>25+ professors and institutions</strong>, we connect students to impactful research internships across domains like AI, Climate, Economics, and more.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-left flex gap-6 sm:gap-10 mt-16 px-4 animate-slide">
        {/* Example Images — You can expand this or render via .map */}
        <img src="/images/research/img2.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
        <img src="/images/research/img.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
        <img src="/images/research/img2.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
        <img src="/images/research/img.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
        <img src="/images/research/img2.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
        <img src="/images/research/img.png" alt="Partner Logo" className="slide border h-[100px] w-auto rounded-lg border-gray-300 shadow-sm" />
      </div>
    </section>
  );
}



