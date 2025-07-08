'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function Slider() {
  const slides = [
    { src: '/images/hero_slider_1.gif', text: '' },
    { src: '/images/hero_slider_2.jpeg', text: '' },
    { src: '/images/hero_slider_3.jpeg', text: '' }
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
