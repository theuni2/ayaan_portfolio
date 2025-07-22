
        {/* Building a Rubrics Cube Solving Robot & Hosting Workshop   */}
{/* Building a drone with autonomous capabilities */}
{/* Designed and led development of 4x4 competition car; built custom chassis, body shell, and upgraded electronics. Managed team and documentation for national finals at Yas Marina.
 */}


{/* Leadership */}

{/* : Head of Computer Science Society */}
{/* Founder and Head of Design Society */}
{/* Student led podcast that sheds light on various global affairs & internal news and action. Integrating student vision on world and local news. */}
{/* : ⁠Head of Media for the Sustainability Club */}


{/* work ex */}
{/* Position/ Leadership Description: ⁠Chief Technical Officer 
Organization Name: Muga League
Description of Activity (150 Characters): 
Managemedia for Muga League; filme/edite all games and lead talent recruitment to grow this intra-school basketball league. */}

{/* Chief Executive Officer
Organization Name: Logic Labs */}

{/* Activity Type: Internship 
Position/ Leadership Description: Engineer & Project Manager
Organization Name: Peec Mobility */}

{/* community service */}

{/* Community Service (Volunteering)
Position/ Leadership Description: ⁠Junior Volunteering Coach
Organization Name: Tommy Fleetwood Academy
Description of Activity (150 Characters):
Volunteer weekly as junior coach at golf academy; assist with training younger players and support coaches in developing core skills. */}

import React from 'react';

export default function Engineering() {
  const projects = [
    {
      title: "Building a Rubrics Cube Solving Robot & Hosting Workshop",
      description:
        "Launched a hands-on robotics workshop after building my own Rubik’s Cube solver, empowering 20 passionate students to build their own robots.",
      video: "",
      image: "/images/extra/rubric.jpeg",
    },
    {
      title: "4x4 in Schools – Professional Category",
      description:
        "Re-engineered a 4x4 with our 5-member school team for nationals. Led engineering upgrades, beating two university teams at Yas Marina with precision",
      video: "/4x4",
      image: "/images/x4/x43.jpeg",
    },
    {
      title: "Building a drone with autonomous capabilities",
      description:
        "Designed and built a custom drone with autonomous capabilities to follow waypoints and complete missions without human intervention.",
      video: "",
      image: "/images/extra/drone.png",
    },

  ];

  return (
    <section className="bg-[#001f5f] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold italic text-[#fff7e6] mb-12">
          Engineering Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#fff7e6] text-black px-6 py-8 rounded shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold italic mb-3">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <p className="text-xs font-semibold italic"></p>
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-sm underline break-all"
              >
                {project.video==''?'':"Learn More"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



