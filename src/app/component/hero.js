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
            4x4 in Schools – Team Manager & Head Engineer
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
             Led chassis/electronics design for national-level competition vehicle at Yas Marina Circuit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

