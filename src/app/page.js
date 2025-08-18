// import Image from "next/image";
// import Nav from "./component/nav";
// import Hero from "./component/hero";
// import Slider from "./component/swipper";
// import Footer from "./component/footer";

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <Nav />
//       <Hero />
//       <Slider />
//       <Footer />
//     </div>
//   );
// }


'use client';

import React, { useEffect } from 'react';
// import Hero from '../component/page2/hero';

import Hero from './component/page2/hero';


// import Nav from '../component/nav';

import Nav from './component/nav';
// import Footer from '../component/footer';

import Footer from './component/footer';

// import Slideltor from '../component/page2/slideltor';

import Slideltor from './component/page2/slideltor';

// import ResearchSection from '../component/page2/paper_link';
import ResearchSection from './component/page2/paper_link';
// import Teaser from '../component/page2/teaser';
import Teaser from './component/page2/teaser';
// import Gallery from '../component/page2/gallery';
import Gallery from './component/page2/gallery';
// import Engineering from '../component/page2/engineering';
import Engineering from './component/page2/engineering';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <div id="partners"><Slideltor /></div>
      <div id="research"><ResearchSection /></div>
      <div id="teaser"><Teaser /></div>
      <div id="engineering"><Engineering /></div>
      <div id="gallery"><Gallery /></div>
      <Footer />
    </div>
  );
}