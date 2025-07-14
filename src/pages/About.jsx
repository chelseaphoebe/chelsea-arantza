  import React from "react";
  import "../styles/custom.css";

  export default function About() {
    const skills = [
      // {
      //   title: "Software Design",
      //   description:
      //     "I'm passionate about building and designing software products across financial tech, productivity, CRM, and community. I specialize in designing SaaS products from ideation to launch.",
      // },
      {
        title: "UI & Visual Design",
        description:
          "I'm a skilled visual designer with an eye for graphics, typography, layout, and color. I love building functional web products and infusing modern aesthetics.",
        // "I'm a skilled visual designer with an eye for graphics, typography, layout, and color. I love building functional web, software & mobile products and infusing modern aesthetics.",
      },
      {
        title: "User Research",
        description:
          "I believe that user research is the most important step of the design process. I love speaking to users and understanding their process & problems first, before even considering design.",
      },
      {
        title: "Project Management",
        description:
          // "I'm a certified Professional Scrum Master (PSM I) from Scrum.org, and believe in infusing agile processes and methodologies to my design process.",
          "I'm skilled in project management, with experience leading creative work while infusing agile processes and methodologies to my design process.",
      },
      {
        title: "Prototyping",
        description:
          // "I'm skilled in prototyping products with users and stakeholders across the entire design lifecycle. I love using Adobe XD, Sketch, & Invision to wireframe and prototype designs.",
          "I'm skilled in prototyping products with users and stakeholders across the entire design lifecycle. I love using Figma to prototype designs.",
      },
      // {
      //   title: "Cognitive Science",
      //   description:
      //     "I'm a huge proponent of consumer psychology and understanding how users think, behave, and interact with products. I believe in analyzing user behavior for an interaction science-backed approach.",
      // },
    ];

    return (
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((item, index) => (
            <div key={index}>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
