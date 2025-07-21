import React from 'react';

export default function ResearchSection() {
  return (
    <section className="bg-[#001f5f] text-white py-16 relative overflow-hidden">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[100px] text-[#fff7e6]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,40 C480,100 960,0 1440,60 L1440,0 L0,0 Z"
            className="bg-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 z-10 relative py-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFA500] text-center mb-16 italic">
          Research Papers, Publications 
        </h2>

        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {/* Paper 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-400 font-extrabold italic text-lg mb-2">
              IJMR (Accepted February 2025):<br />
              “Life Cycle Carbon Footprint Beyond Manufacturing”
            </h3>
            <p className="text-sm mb-2">
              Lead Author. Accepted at IJMR (International Journal For Multidisciplinary Research) in February 2025.
            </p>
            <a
              href="https://www.ijfmr.com/research-paper.php?id=33383&utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline text-sm"
            >
              https://www.ijfmr.com/research-paper.php?id=33383
            </a>
          </div>

          {/* Paper 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-400 font-extrabold italic text-lg mb-2">
              “Algorithmic Flight Control Theory and Predictive Modelling in Autonomous Drone Navigation”
            </h3>
            <p className="text-sm mb-2">
              Conducted during school year and break. Focused on optimizing AI-assisted drone motion under constraints.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline text-sm"
            >
              Ongoing – To Be Published
            </a>
          </div>

          {/* Paper 3 – HPQ Project */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-400 font-extrabold italic text-lg mb-2">
              HPQ Project:<br />
              “Impact of Overthinking on Golf Performance”
            </h3>
            <p className="text-sm mb-2">
              This research explores the cognitive-emotional aspects of athletic performance, focusing on how overthinking impairs decision-making and consistency in golf.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline text-sm"
            >
              Available on request – HPQ Submission 2025
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

