"use client";

import React from "react";
import { Bree_Serif } from "next/font/google";
import { motion } from "framer-motion";

const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="bg-white text-gray-700 body-font">

{/* left img  */}

      <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        {/* Image Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0"
        >
          <img
            className="rounded-2xl shadow-xl object-cover object-center"
            alt="Founder"
            src="/images/extra/hero1.png"
          />
        </motion.div>

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-orange-700`}
          >
            Head of Computer Science Society
          </h1>
          {/* <h1
            className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-orange-700`}
          >
            Founder & Head of Design Society
          </h1> */}
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            {/* Inspiring students to explore creative problem-solving through 3D
            printing, prototyping, sketching, and CAD design. Building a
            foundation in design thinking and innovation. */}
             Joined CS Society in Grade 9, grew it into a schoolwide platform with over 10 workshops, 2 hackathons, and a magazine that documented our journey.
          </p>
        </motion.div>
      </div>


{/* right img */}

     <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
  {/* Text Section with animation */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left items-center text-center"
  >
    <h1
      className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-orange-700`}
    >
      Head of Media for Sustainability Society
    </h1>
    <p className="mb-8 text-lg leading-relaxed text-gray-600">
      Created over 10 visual campaigns spotlighting student-led sustainability efforts.
Filmed 5 events and wrote newsletters to drive eco-action on campus.
    </p>
  </motion.div>

  {/* Image Section with animation */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0"
  >
    <img
      className="rounded-2xl shadow-xl object-cover object-center"
      alt="Founder"
      src="/images/founder.jpeg"
    />
  </motion.div>
</div>

{/* left img  */}

 <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        {/* Image Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0"
        >
          <img
            className="rounded-2xl shadow-xl object-cover object-center"
            alt="Founder"
            src="/images/founder.jpeg"
          />
        </motion.div>

        {/* Text Section with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1
            className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-orange-700`}
          >
            Founder and Head of Design Society
          </h1>
          {/* <h1
            className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-orange-700`}
          >
            Founder & Head of Design Society
          </h1> */}
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            {/* Inspiring students to explore creative problem-solving through 3D
            printing, prototyping, sketching, and CAD design. Building a
            foundation in design thinking and innovation. */}
            Mentored over 30 students in CAD and design history, developing technical fluency. 
Created portfolio-ready projects that address real-life issues.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

