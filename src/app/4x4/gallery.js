// pages/index.js
import { Bree_Serif } from "next/font/google";
const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
});


import Image from 'next/image';

export default function Gallery() {


  const x4 = [
    { src: '/images/x4/x41.jpeg', alt: 'Chat message 2' },
    { src: '/images/x4/x4.jpeg', alt: 'Chat message 1' },
    { src: '/images/x4/x42.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x43.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x45.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x46.jpeg', alt: 'Chat message 3' },
    { src: '/images/x4/x46.jpeg', alt: 'Chat message 3' },
    // { src: '/images/x4/x46.jpeg', alt: 'Chat message 3' },
  ];

  


  return (
    <>

    <div>
     
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
          4x4 in Schools – Professional Category
          {/* <span className="text-pink-400">♡</span> */}
        </h1>
        <p className="text-center text-orange-400 text-lg mb-12">
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

    </>
  );
}