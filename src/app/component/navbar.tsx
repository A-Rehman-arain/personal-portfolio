"use client";
import navlogo from "../../../public/assests/picture/1.svg";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hamburg from '../../../public/assests//picture/burger-menu-svgrepo-com.svg'
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className="z-50 sticky top-0"
      style={{ backgroundColor: "rgb(0, 51, 102)" }}
    >
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-1 items-center justify-between">
          <div className="flex items-center">
            <Image
              src={navlogo}
              width={100}
              height={100}
              alt="abdul rehman"
              className="h-[60px] w-[60px] mix-blend-color-burn "
            />
            <span className="ml-5 text-3xl text-black font-semibold">
              Abdul Rehman
            </span>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image
                 src={hamburg}
                  width={30}
                  height={30}
                  alt="Close Menu"
                />
              ) : (
                <Image
                  src={hamburg}
                  width={30}
                  height={30}
                  alt="Open Menu"
                />
              )}
            </button>
          </div>

          <nav
            className={`${
              navbar ? "block" : "hidden"
            } md:flex md:items-center md:w-auto w-full md:ml-auto flex flex-col md:flex-row items-center text-lg justify-center text-black font-medium`}
          >
            <Link href={"/"} className="mr-5 cursor-pointer hover:text-white">
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-5 cursor-pointer hover:text-white"
            >
              About
            </Link>
            <Link
              href={"#skills"}
              className="mr-5 cursor-pointer hover:text-white"
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="mr-5 cursor-pointer hover:text-white"
            >
              Projects
            </Link>
            <Link
              href={"#Contact"}
              className="mr-5 cursor-pointer hover:text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
