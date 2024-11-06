import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1   from "../../../public/assests//projects/ai-assistant.png"
import img2  from "../../../public/assests//projects/ecommerce.png"
import img3  from "../../../public/assests//projects/login.png"
const Project = () => {
  return (
    <div id='project'  style={{ backgroundColor:"RGB(244, 244, 244)" }}>
       <hr className="border-black border-2 "  />
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-16 mx-auto" >
      <div
        className="flex flex-col text-center w-full mb-20"
      
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My  Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Explore my recent projects, showcasing my skills in web development, design, and animation. Each project demonstrates a unique set of features and technologies.
        </p>
      </div>
      <div className="flex flex-wrap -m-4" >
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
          src={img1}
            />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Voice Command Assitant
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                AI Assistant
              </h1>
              <p className="leading-relaxed line-clamp-3">     
               AI Assistant leveraging voice commands for task automation, built with React and Next.js, featuring real-time NLP and API integration.
              </p>
               <Link   target='_blank'            
                href={'https://ai-assistant-gamma-ivory.vercel.app/'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={img2}
              />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Website
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Ecommerce Website
              </h1>
              <p className="leading-relaxed line-clamp-3">     
              A  eCommerce website showcasing products with features like category product details, and a responsive design for easy browsing.
              </p>
               <Link   target='_blank'            
                href={'https://ecoummerce-web.vercel.app/'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer "  >
          <div className="flex relative" >
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={img3}
            />
            <div
              className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100"
         
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Login Page
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Animated Login Page
              </h1>
              <p className="leading-relaxed line-clamp-3">     
              An animated login page featuring smooth transitions and interactive elements, providing an engaging user experience with a modern and responsive design.
              </p>
               <Link   target='_blank'            
                href={'https://animated-login-page-ten.vercel.app/'} >
               <p className='leading-relaxed  text-indigo-500 hover:underline '> View Project</p>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Project