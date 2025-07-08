import React from 'react';

export default function Teaser() {
  const images = [
    "/images/research/rp1.png",
    "/images/research/rp2.png",
    "/images/research/rp3.png",
    "/images/research/rp4.png",
    "/images/research/rp5.png",
    "/images/research/rp6.png",
  ];

  return (
    <section className="bg-[#001f5f] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold italic text-[#fff7e6] mb-12">
          teasers of my research
        </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
                   <div
  key={index}
  className="bg-white h-64 flex items-center justify-center p-2 rounded shadow-lg transition-transform hover:scale-105"
>
  <img
    src={src}
    alt={`Research Teaser ${index + 1}`}
    className="max-h-full max-w-full object-contain"
  />
</div>
          ))}
        </div> 


        {/* <div
  key={index}
  className="bg-white h-64 flex items-center justify-center p-2 rounded shadow-lg transition-transform hover:scale-105"
>
  <img
    src={src}
    alt={`Research Teaser ${index + 1}`}
    className="max-h-full max-w-full object-contain"
  />
</div> */}
      </div>
    </section>
  );
}
