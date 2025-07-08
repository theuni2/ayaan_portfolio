'use client';

import React, { useEffect } from 'react';
import Hero from '../component/page2/hero';
import Nav from '../component/nav';
import Footer from '../component/footer';
import Slideltor from '../component/page2/slideltor';
import ResearchSection from '../component/page2/paper_link';
import Teaser from '../component/page2/teaser';
import Engineering from '../component/page2/engineering';

export default function Page() {
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
      <Footer />
    </div>
  );
}
