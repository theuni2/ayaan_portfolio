// import React from 'react'

// export default function Comunity_gallery() {
//   return (
//     <div>community_gallery</div>
//   )
// }


'use client';
// pages/index.js
import { Bree_Serif } from "next/font/google";
const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
});


import Head from 'next/head';
import Image from 'next/image';
// import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Community_gallery() {
  const messages = [
    // { src: '/images/pehchaan/img.jpeg', alt: '1' },
    { src: '/images/pehchaan/img1.jpeg', alt: '2' },
    { src: '/images/pehchaan/img2.jpeg', alt: '3' },
    { src: '/images/pehchaan/img3.jpeg', alt: '4' },
    { src: '/images/pehchaan/img4.jpeg', alt: '5' },
    { src: '/images/pehchaan/img5.jpeg', alt: '6' },
    { src: '/images/pehchaan/img6.jpeg', alt: '7' },
    // { src: '/images/pehchaan/img7.jpeg', alt: '8' },
  ];

  const x4 = [
       { src: '/images/paras/img1.jpeg', alt: '1' },
       { src: '/images/paras/img2.jpeg', alt: '2' },
       { src: '/images/paras/img3.jpeg', alt: '3' },
       { src: '/images/paras/img4.jpeg', alt: '4' },
       { src: '/images/paras/img5.jpeg', alt: '5' },
       { src: '/images/paras/img6.jpeg', alt: '6' },
    //    { src: '/images/paras/img7.jpeg', alt: '7' },
       { src: '/images/paras/img8.jpeg', alt: '8' },
    //    { src: '/images/paras/img9.jpeg', alt: '9' },
       { src: '/images/paras/img10.jpeg', alt: '10' },
       { src: '/images/paras/img11.jpeg', alt: '11' },

  ];
  const img = [
       { src: '/images/nab/img1.jpeg', alt: '1' },
       { src: '/images/nab/img2.jpeg', alt: '2' },
    //    { src: '/images/nab/img3.jpeg', alt: '3' },
       { src: '/images/nab/img4.jpeg', alt: '4' },
       { src: '/images/nab/img5.jpeg', alt: '5' },
       { src: '/images/nab/img6.jpeg', alt: '6' },
    //    { src: '/images/nab/img7.jpeg', alt: '7' },
       { src: '/images/nab/img8.jpeg', alt: '8' },
       { src: '/images/nab/img9.jpeg', alt: '9' },
       { src: '/images/nab/img10.jpeg', alt: '10' },
       { src: '/images/nab/img11.jpeg', alt: '11' },

  ];


//   const extra = [
//     // { src: '/images/extra/img.jpeg', alt: 'Chat message 1' },
//     { src: '/images/extra/img1.jpeg', alt: 'Chat message 2' },
//     { src: '/images/extra/img2.jpeg', alt: 'Chat message 3' },
    
//   ];

  return (
<div className="bg-black">
      

      {/* Pehchaan Section */}
      <main className="min-h-screen text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Pehchaan - Community Service
        </h1>
        <p className="text-center text-orange-400 text-lg mb-12">
         Conducted a workshop at Pehchaan NGO, which is dedicated to empowering underprivileged communities through education, healthcare, and skill development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
            >
              <Image
                src={message.src}
                alt={message.alt}
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Paras Foundation Section */}
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Paras Foundation - Community Service
        </h1>
        <p className="text-center text-orange-400 text-lg mb-12">
          Conducted a Fibonacci Clock Workshop with Paras India, an organization committed to fostering innovation, learning, and community-driven growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {x4.map((message, index) => (
            <div
              key={index}
              className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
            >
              <Image
                src={message.src}
                alt={message.alt}
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </main>

      {/* National Association for the Blind Section */}
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          National Association for the Blind - Community Service
        </h1>
        <p className="text-center text-orange-400 text-lg mb-12">
          Engaged in community workshop with the National Association for the Blind, an organization dedicated to empowering visually impaired individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {img.map((message, index) => (
            <div
              key={index}
              className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
            >
              <Image
                src={message.src}
                alt={message.alt}
                width={300}
                height={200}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </main>

<section className="py-20 px-6 md:px-24 bg-gray-900">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Video with caption */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <video
          src="/images/mission_access/video.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl shadow-xl w-full h-auto"
        />
        <p className="text-center text-orange-400 text-lg mt-6">
          Ayaan (me), along with the co-founder of Mission Accessibility, Rahul Bajaj.

        </p>
      </div>
    </motion.div>

    {/* Right: Content */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Mission Accessibility
      </h2>
      <p className="text-lg md:text-xl text-orange-400 mb-6">
        Advancing disability rights through accessibility, especially in the digital realm.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Turning Mission into Impact
      </h3>
      <p className="text-gray-50 leading-relaxed mb-4">
        Mission Accessibility is a non-profit co-founded by seasoned legal professional by Rahul Bajaj he is blind committed to removing barriers and ensuring persons with disabilities can fully and effectively participate across society.
      </p>
      <p className="text-gray-50 leading-relaxed mb-4">
        They’ve secured groundbreaking victories from obtaining a first-of-its-kind order mandating digital accessibility for private service providers, to ensuring accessibility in Bollywood releases like <em>Pathaan</em>, and set new precedents for digital and legal inclusion.
      </p>
      <p className="text-gray-50 leading-relaxed">
        Through strategic partnerships including with Belongg’s Inclusive Product Management fellowship, the Billion Readers Initiative, and educational institutions like BML Munjal School of Law we empower systemic change, advance accessibility in media, education, and design, and cultivate a more inclusive future.
      </p>
    </motion.div>
  </div>
</section>




    </div>


    );
  
}
