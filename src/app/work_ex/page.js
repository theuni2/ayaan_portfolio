'use client';
import React, { useState } from 'react';
import Nav from '../component/nav';
import Footer from '../component/footer';

export default function Page() {


  const [activeIndex, setActiveIndex] = useState(0); // 0 is the first item opened

  const experiences = [
    {
      title: 'Head of Computer Science Society',
      content: `Organizing and running Computer Science Society, managing clubs, hosting hackathons/workshops, and compiling photos from sessions for the yearbook. Writing the newsletter for the club and writing/managing and formatting the Yearly Magazine`,
    },
    {
      title: 'Founder and Head of Design Society',
      content: 'Helping students explore creative problem solving through activities like 3D printing, prototyping and sketching. Learning CAD Skills, design history.',
    },
    {
      title: 'Team Manager & Head Engineer',
      content: 'Designed and led development of 4x4 competition car; built custom chassis, body shell, and upgraded electronics. Managed team and documentation for national finals at Yas Marina.',
    },
    {
      title: 'Chief Technical Officer at Muga League',
      content: 'Manage media for Muga League; filme/edite all games and lead talent recruitment to grow this intra-school basketball league.',
    },
    {
      title: '⁠Chief Executive Officer at Logic Labs',
      content: 'CEO of Logic Labs; design and produce CS hardware kits for schools, align content with curriculum, source parts, and lead course development.',
    },
    {
      title: '⁠Head of Media for the Sustainability Club',
      content: 'Lead media for Sustainability Club; design posters, film events, write monthly newsletter, and create yearbook page and social content.',
    },
    {
      title: 'Junior Volunteering Coach',
      content: 'Volunteer weekly as junior coach at golf academy; assist with training younger players and support coaches in developing core skills.',
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Nav/>
    <section className="bg-[#fff7e6] text-[#001f5f] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold italic mb-6">
            Experience
          </h2>

          <a
            href="https://www.linkedin.com" // Update with real link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full px-8 py-4 mb-8 transition"
          >
            Visit LinkedIn For More Information
          </a>

          <img
            src="/images/experience-img.png"
            alt="Experience"
            className="w-[300px] rounded shadow"
          />
        </div>

        {/* Right side */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="border-t border-[#001f5f] pt-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-bold italic text-lg text-[#001f5f]"
              >
                <span>{exp.title}</span>
                <span className="text-xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && exp.content && (
                <p className="mt-3 text-sm whitespace-pre-line">{exp.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
