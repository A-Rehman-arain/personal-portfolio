import React from "react";

const Skills = () => {
  return (
    <div id="skills"  style={{ backgroundColor:"RGB(0, 0, 0)" }}>
      <hr className="border-black border-2 "   />
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-3xl font-medium title-font text-center text-white mb-20">
            MY SKILLS
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex border rounded-msm ">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                Frontend Developer
                </h2>
                <p className="leading-relaxed text-base text-white">
                Developed dynamic, responsive websites using HTML, CSS, and JavaScript. Collaborated with designers and developers to create user-friendly interfaces, focusing on performance and accessibility for diverse audiences
                </p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex border rounded-sm m- ">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                UI/UX Designer
                </h2>
                <p className="leading-relaxed text-base text-white ">
                Designed visually appealing and user-focused interfaces for websites and apps. Conducted user research and testing to ensure optimal user experiences, while creating detailed wireframes, prototypes, and interactive elements.
                </p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex border rounded-sm ">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                TypeScript Developer
                </h2>
                <p className="leading-relaxed text-base text-white">
                Proficient in building type-safe, scalable applications using TypeScript. Experienced in integrating TypeScript with frameworks like React and Next.js to enhance code reliability, maintainability, and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
