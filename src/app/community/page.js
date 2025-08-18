import React from 'react';
import Nav from '../component/nav';
import Slider from '../work_ex/gallery';
import Footer from '../component/footer';
import Comunity_gallery from './community_gallery';

export default function Page() {
  const communityRoles = [
    {
      title: 'Assistant to a Golf Coach – Tommy Fleetwood Academy (2021–Present)',
      description: 'Supports junior coaching weekly, helping develop core skills for ages 7–10.',
    },
    {
      title: 'LAMDA Acting (Grade 8 in Progress) (2020–Present)',
      description: 'Trained over 200 hrs in vocal technique earning LAMDA Grade 6 Distinction.Explored ambition and instability through Macbeth and Pinter’s fractured characters.',
    },
    // {
    //   title: 'Head of Media – Sustainability Club (2023–Present)',
    //   description: 'Created over 10 visual campaigns spotlighting student-led sustainability efforts.Filmed 5 events and wrote newsletters to drive eco-action on campus.',
    // },
  ];

  return (
    <div>
        <Nav/>
    <section className="bg-white py-20 px-6" id="community">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#001f5f] text-center mb-12 italic">
          Community Work
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {communityRoles.map((role, index) => (
            <div
              key={index}
              className="bg-gray-100 border-l-4 border-orange-500 shadow-md rounded-lg p-6 transition hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
              <p className="text-gray-700 text-sm">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
    <Slider/>
    <Comunity_gallery/>
    <Footer/>
    </div>
  );
}

