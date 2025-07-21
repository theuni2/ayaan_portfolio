'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const awards = [
 {
    title: 'Overall Winner',
    src: '/images/x4/innovation.jpeg', // replace with your actual image path
    alt: 'Overall Winner Award',
  },
  {
    title: 'Winner – Professional Category',
    src: '/images/x4/professional.jpeg',
    alt: 'Professional Category Winner',
  },
  {
    title: 'Winner – Innovation Category',
    src: '/images/x4/innovation.jpeg',
    alt: 'Innovation Category Winner',
  },
  {
    title: 'Winner – Best Verbal Presentation',
    src: '/images/x4/presentation.jpeg',
    alt: 'Best Verbal Presentation Winner',
  },
];

export default function FourByFourAwards() {
  return (
    <section className="bg-[#001f5f] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-yellow-300"
        >
          4x4 in Schools Challenge
        </motion.h2>
      </div>

      {/* Awards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-xl hover:scale-105 transform transition-all duration-300"
          >
            <Image
              src={award.src}
              alt={award.alt}
              width={400}
              height={250}
              className="rounded-lg w-full h-60 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-yellow-300 text-center">
              {award.title}
            </h3>
          </div>
        ))}
      </motion.div>

      {/* Challenge Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          The 4x4 in Schools Challenge is an internationally recognized STEM competition where students design, build, and race a remote-controlled 4x4 vehicle over an obstacle track. Teams are evaluated not only on performance but also innovation, professionalism, engineering design, and presentation. Competing against schools and universities, our team secured 4 major category wins at the national stage, including the prestigious overall title.
        </p>
      </motion.div>
    </section>
  );
}
