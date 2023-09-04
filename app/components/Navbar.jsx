"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#010101] text-white mb-2 py-2 w-full shadow-md relative">
      <div className="mx-auto px-4 flex flex-wrap items-center justify-between w-full">
        <Link href="/">
          <div className="text-xl lg:text-3xl font-bold cursor-pointer flex-shrink-0 lg:ml-4 gradient-text">
            My Portfolio
          </div>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <span className="text-white text-2xl">{isOpen ? "✖" : "☰"}</span>
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 overflow-y-auto w-64 h-[100vh] bg-[#010101] text-white transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden flex items-center justify-center`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-2 right-2 text-white text-3xl"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-3 mr-[40px] ">
            <a
              href="DavidZvonaruv5_CV.pdf"
              download="David-Zvonaruv-CV"
              className="flex"
            >
              {" "}
              <span className="text-xl mt-0.5">Download CV:</span>
              <FaDownload className="ml-2  text-[2rem] hover:animate-bounce text-gray-300" />
            </a>
            <Link href="https://github.com/DavidZvonaruv5">
              <FaGithub className="text-[2rem] hover:animate-bounce" />
            </Link>
            <Link href="https://www.linkedin.com/in/david-zvonaruv-190a68185/">
              <FaLinkedin className="text-[2rem] hover:animate-bounce" />
            </Link>
            <Link href="mailto:davidze99@gmail.com">
              <HiOutlineMail className="ml-1  text-[2.2rem] hover:animate-bounce text-gray-300" />
            </Link>
            <Link href="tel:+972543111631">
              <FaPhoneAlt className="ml-1  text-[1.7rem] hover:animate-bounce text-gray-300" />
            </Link>
            <li>
              <Link href="/#Aboutme">
                <span className="cursor-pointer hover:text-gray-300 text-xl">
                  About Me
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#Education">
                <span className="cursor-pointer hover:text-gray-300 text-xl">
                  Education
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#Skills">
                <span className="cursor-pointer hover:text-gray-300 text-xl">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <span className="cursor-pointer hover:text-gray-300 text-xl">
                  My Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href={`/contact`}>
                <span className="cursor-pointer hover:text-gray-300 text-xl">
                  Contact me
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`hidden lg:flex lg:space-x-6 lg:justify-end`}>
          <a
            href="DavidZvonaruv5_CV.pdf"
            download="David-Zvonaruv-CV"
            className="flex"
          >
            {" "}
            <span className="text-xl mt-0.5">Download CV:</span>
            <FaDownload className="ml-2  text-[2rem] hover:animate-bounce text-gray-300" />
          </a>
          <Link href="https://github.com/DavidZvonaruv5">
            <FaGithub className="text-[2rem] hover:animate-bounce" />
          </Link>
          <Link href="https://www.linkedin.com/in/david-zvonaruv-190a68185/">
            <FaLinkedin className="text-[2rem] hover:animate-bounce" />
          </Link>
          <Link href="mailto:davidze99@gmail.com">
            <HiOutlineMail className="ml-1  text-[2.2rem] hover:animate-bounce text-gray-300" />
          </Link>
          <Link href="tel:+972543111631">
            <FaPhoneAlt className="ml-1  text-[1.7rem] hover:animate-bounce text-gray-300" />
          </Link>
          <li>
            <Link href="/#Aboutme">
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                About Me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#Education">
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                Education
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#Skills">
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                My Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href={`/contact`}>
              <span className="cursor-pointer hover:text-gray-300 text-xl">
                Contact me
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
