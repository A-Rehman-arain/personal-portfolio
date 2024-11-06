import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footlogo from "../../../public/assests/picture/1.svg";


const Footer = () => {
  return (
    <div>
        <footer className=" body-font" style={{ backgroundColor: 'rgb(0, 51, 102)' }}>
          <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <Image
          src={footlogo}
          width={100}
          height={100}
          alt="abdul rehman"
          className="h-17 w-16 mix-blend-color-burn"
          />
              <span className="ml-3 text-xl">Abdul Rehman</span>
            </a>
            <p className="text-base text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
              © 2024 Abdul Rehman 
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link target='_blank'
              href="https://github.com/A-Rehman-arain"  className="text-gray-500">
              <FaGithub className='text-2xl  text-black hover:text-[white]'    />
              </Link >
              <Link target='_blank'
               href="https://www.linkedin.com/in/abdul-rehman-b4ab90329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="ml-3 text-gray-500">
              <FaLinkedin  className='text-2xl  text-black hover:text-[white] '  />
              </Link >
              <Link target='_blank'
               href="https://www.instagram.com/abdul.rehman_arain/" className="ml-3 text-gray-500">
              <FaInstagram  className='text-2xl  text-black hover:text-[white]'  />
              </Link >
            </span>
          </div>
        </footer>    
  </div>
  );
};

export default Footer