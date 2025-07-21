'use client';
import React, { useState } from 'react';
import Nav from '../component/nav';
import Footer from '../component/footer';
// import Slider from './gallery';

export default function Page() {


  const [activeIndex, setActiveIndex] = useState(0); // 0 is the first item opened

  const experiences = [
    // {
    //   title: 'Head of Computer Science Society',
    //   content: `Joined CS Society in Grade 9, grew it into a schoolwide platform with 10+ workshops, 2 hackathons, and a magazine that documented our journey.`,
    // },
    // {
    //   title: 'Founder and Head of Design Society',
    //   content: 'Mentored 30+ students in CAD and design history, developing technical fluency.Created portfolio-ready projects that address real-life issues.',
    // },
    {
      title: 'Engineering Intern & Project Manager',
      content: 'At PEEC Mobility, I worked on reimagining a classic 1971 Fiat 500 as an electric vehicle, combining vintage aesthetics with modern sustainability. This project explored how retrofitting legacy vehicles can promote circular innovation and contribute to the future of eco-friendly transportation.',
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
      title: 'Founder & CEO at Logic Labs',
      content: 'Sold CS hardware kits via Logic Labs, raising AED 1K. Built robotics labs with Pehchaan Street School, driving STEM access to underserved students.',
    },
    // {
    //   title: '⁠Head of Media for the Sustainability Club',
    //   content: 'Lead media for Sustainability Club; design posters, film events, write monthly newsletter, and create yearbook page and social content.',
    // },
    {
      title: 'Junior Volunteering Coach',
      content: 'Volunteer weekly as junior coach at golf academy; assist with training younger players and support coaches in developing core skills.',
    },
    {
      title: 'Independent Drone Engineer',
      content: 'Trained a drone to fly by itself and navigate directions through GPS tracking.',
    },
    {
      title: 'Head of Dubai College Debrief',
      content: 'Co-created student podcast covering global campus issues.Produced over 25 episodes amplifying student perspectives on school policies and mental health.',
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
            href="https://www.linkedin.com/in/ayaan-raj-khanna-316529324/" // Update with real link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full px-8 py-4 mb-8 transition"
          >
            Visit LinkedIn For More Information
          </a>
          <a
            href="https://www.instagram.com/p/DL4ec6Kvmji/?igsh=MWYyb2FhbXRydHd0MA%3D%3D" // Update with real link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full px-8 py-4 mb-8 transition"
          >
            Visit Instagram For More Information
          </a>

          <img
            src="images/x4/x41.jpeg"
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
