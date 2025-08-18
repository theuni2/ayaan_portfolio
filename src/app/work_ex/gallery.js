// // pages/index.js

// import Head from 'next/head';
// import Image from 'next/image';

// export default function Gallery() {
//   const messages = [
//     { src: '/images/peec/peec1.jpeg', alt: 'Chat message 1' },
//     { src: '/images/peec/peec2.jpeg', alt: 'Chat message 2' },
//     { src: '/images/peec/peec3.jpeg', alt: 'Chat message 3' },
//   ];
//   const x4 = [
//     { src: '/images/x4/x4.jpeg', alt: 'Chat message 1' },
//     { src: '/images/x4/x41.jpeg', alt: 'Chat message 2' },
//     { src: '/images/x4/x42.jpeg', alt: 'Chat message 3' },
//     { src: '/images/x4/x43.jpeg', alt: 'Chat message 3' },
//     { src: '/images/x4/x45.jpeg', alt: 'Chat message 3' },
//     { src: '/images/x4/x46.jpeg', alt: 'Chat message 3' },
//   ];
//   const extra = [
//     { src: '/images/extra/img.jpeg', alt: 'Chat message 1' },
//     { src: '/images/extra/img1.jpeg', alt: 'Chat message 2' },
//     { src: '/images/extra/img2.jpeg', alt: 'Chat message 3' },
    
//   ];

//   return (
//     <>
//     <div>
//       <Head>
//         <title>Wall Of Love</title>
//       </Head>
//       <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
//           PEEC Mobility
// (retrofits classic vehicles into EVs to promote circular innovation) <span className="text-pink-400">♡</span>
//         </h1>
//         <p className="text-center text-yellow-300 text-lg mb-12">
//           Reimagined a 1971 Fiat 500 as an EV vehicle.  
//  Explored how retrofits can drive innovation in sustainable mobility.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
//             >
//               <Image
//                 src={message.src}
//                 alt={message.alt}
//                 width={300}
//                 height={200}
//                 className="rounded-md"
//               />
//             </div>
//           ))}
//         </div>
//       </main>
//       </div>


//     <div>
     
//       <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
//           4x4 in Schools – Professional Category<span className="text-pink-400">♡</span>
//         </h1>
//         <p className="text-center text-yellow-300 text-lg mb-12">
//           Re-engineered a 4x4 with our 5-member school team for nationals. 
// Led engineering upgrades, beating two university teams at Yas Marina with precision.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {x4.map((message, index) => (
//             <div
//               key={index}
//               className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
//             >
//               <Image
//                 src={message.src}
//                 alt={message.alt}
//                 width={300}
//                 height={200}
//                 className="rounded-md"
//               />
//             </div>
//           ))}
//         </div>
//       </main>
//       </div>

//       <div>
     
//       <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
//           Won the JGE pairs scramble club tournament / Organised guest lecture for CSS<span className="text-pink-400">♡</span>
//         </h1>
//         {/* <p className="text-center text-yellow-300 text-lg mb-12">
//           Re-engineered a 4x4 with our 5-member school team for nationals. 
// Led engineering upgrades, beating two university teams at Yas Marina with precision.
//         </p> */}

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {extra.map((message, index) => (
//             <div
//               key={index}
//               className="bg-[#001f5f] p-6 rounded-xl flex justify-center items-center"
//             >
//               <Image
//                 src={message.src}
//                 alt={message.alt}
//                 width={300}
//                 height={200}
//                 className="rounded-md"
//               />
//             </div>
//           ))}
//         </div>
//       </main>
//       </div>
//     </>
//   );
// }



'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  const slides = [
    { src: '/images/golf/golf1.jpeg', text: '' },
    { src: '/images/golf/golf4.gif', text: '' },
    { src: '/images/golf/golf2.jpeg', text: '' },
    { src: '/images/golf/golf5.gif', text: '' },
    { src: '/images/golf/golf3.jpeg', text: '' },
    { src: '/images/golf/golf6.jpeg', text: '' },
    
    
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-full flex justify-center items-center bg-black"
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Optional Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                {slide.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
