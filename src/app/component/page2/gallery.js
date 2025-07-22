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

export default function Gallery() {
  const messages = [
    { src: '/images/peec/peec1.jpeg', alt: 'Chat message 1' },
    { src: '/images/peec/peec2.jpeg', alt: 'Chat message 2' },
    { src: '/images/peec/peec3.jpeg', alt: 'Chat message 3' },
  ];

  const x4 = [
    { src: '/images/x4/x41.jpeg', alt: 'Chat message 2' },
    { src: '/images/x4/x4.jpeg', alt:  'Chat message 1' },
    { src: '/images/x4/x42.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x43.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x45.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/4x4.jpeg', alt: 'Chat message 3' },
  ];


  const extra = [
    // { src: '/images/extra/img.jpeg', alt: 'Chat message 1' },
    { src: '/images/extra/img1.jpeg', alt: 'Chat message 2' },
    { src: '/images/extra/img2.jpeg', alt: 'Chat message 3' },
    
  ];

  return (
    <div className="bg-black">
    <div>
      <Head>
        <title>Wall Of Love</title>
      </Head>
      <main className="min-h-screen  text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Building a Rubrics Cube Solving Robot & Hosting Workshop
           {/* <span className="text-pink-400">♡</span> */}
        </h1>
        <p className="text-center text-orange-400  text-lg mb-12">
          From solving cubes to shaping minds—guided 20 young innovators through their first robot builds.
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
      </div>





    <div>
     
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          4x4 in Schools – Professional Category
          {/* <span className="text-pink-400">♡</span> */}
        </h1>
        <p className="text-center text-orange-400  text-lg mb-12">
          Re-engineered a 4x4 with our 5-member school team for nationals. 
Led engineering upgrades, beating two university teams at Yas Marina with precision.
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
      </div>


<div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left items-center text-center"
        >
          <h1 className={`${breeSerif.className} text-4xl sm:text-5xl font-semibold mb-6 text-white`}>
            Organised Guest Lecture for CSS
          </h1>
          <p className="mb-8 text-lg leading-relaxed  text-orange-400 ">
            Hosted an expert-led guest lecture on advanced CSS techniques to enhance frontend design knowledge among students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0"
        >
          <img
            className="rounded-2xl shadow-xl object-cover object-center"
            alt="CSS Lecture"
            src="/images/extra/img.jpeg"
          />
        </motion.div>
      </div>



<section className="py-20 px-6 md:px-24">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Image with caption */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <Image
          src="/images/peec/peec5.jpeg"
          alt="PEEC Founder and Chief Engineer"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl"
        />
        <p className="text-center text-orange-400 text-lg mb-12">
          PEEC’s Founder, Zach Faizal (left), and Chief Engineer, Luis Antonio (right), leading the transformation of a classic car into a fully electric vehicle.
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
        PEEC Mobility
      </h2>
      <p className="text-lg md:text-xl text-orange-400 mb-6">
        Retrofitting classic vehicles into EVs to drive circular innovation.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Breathing New Life into Classics
      </h3>
      <p className="text-gray-50 leading-relaxed mb-4">
        PEEC Mobility is on a mission to turn classic vehicles into clean, sustainable electric machines. Through advanced retrofitting, we fuse timeless automotive design with cutting-edge green technology.
      </p>
      <p className="text-gray-50 leading-relaxed">
        Our work promotes a circular economy—extending vehicle life, reducing waste, and creating powerful, efficient EVs that honor the past while driving the future.
      </p>
    </motion.div>
  </div>
</section>





      <div>
     
  <main className="min-h-screen text-white flex flex-col items-center justify-start py-12 px-4">
  <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
    Won the JGE pairs scramble club tournament
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
    {extra.map((message, index) => (
      <div
        key={index}
        className=" p-6 rounded-xl flex justify-center items-center"
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



      </div>


    </div>
  );
}
