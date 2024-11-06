import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutpic from "../../../public/assests/picture/IMG-20240709-WA0024.jpg"

const About = () => {
  return (
    <div id="about" style={{ backgroundColor: "RGB(245, 245, 245)" }}>
      <hr className="border-black border-2 " />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 ml-4 md:mb-0">
            <Image
              className="object-cover object-center  rounded-full  w-[25rem] h-[30rem]  "
              quality={100}   
              alt="hero"
              src={aboutpic}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center  text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed font-semibold">
              I am a dedicated web developer with a passion for crafting
              dynamic, user-friendly websites and applications. With a strong
              foundation in front-end technologies like HTML, CSS, JavaScript,
              and frameworks such as React, I strive to create responsive and
              visually appealing designs. My focus is on developing interactive
              user interfaces and ensuring smooth functionality across devices.
              I enjoy problem-solving, learning new technologies, and
              continually improving my coding skills to stay current with
              industry trends. Outside of coding, I am interested in exploring
              the latest advancements in web development and AI to enhance user
              experiences and build innovative solutions.
            </p>
            <div className="flex justify-center">
              <Link target="_blank" href={"/assests/cv/cv.pdf"}>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
