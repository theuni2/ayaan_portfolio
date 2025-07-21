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
    { src: '/images/x4/x4.jpeg', alt: 'Chat message 1' },
    { src: '/images/x4/x42.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x43.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x45.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x46.jpeg', alt: 'Chat message 3' },
  ];

  
  const extra = [
    // { src: '/images/extra/img.jpeg', alt: 'Chat message 1' },
    { src: '/images/extra/img1.jpeg', alt: 'Chat message 2' },
    { src: '/images/extra/img2.jpeg', alt: 'Chat message 3' },
    
  ];

  return (
    <>

    <div>
     
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          4x4 in Schools – Professional Category
          {/* <span className="text-pink-400">♡</span> */}
        </h1>
        <p className="text-center text-yellow-300 text-lg mb-12">
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

{/* 
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
          <p className="mb-8 text-lg leading-relaxed  text-yellow-300">
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
      </div> */}






    </>
  );
}