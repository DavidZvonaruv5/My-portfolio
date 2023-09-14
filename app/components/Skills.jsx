"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Skills() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#Skills") {
        setHighlight(true);
        setTimeout(() => setHighlight(false), 800);
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "TailWindCSS",
    "MongoDB",
    "SQL",
    "Python",
    "Flask",
    "Git",
    "HTML",
    "CSS",
    "Google Cloud Platform",
    "Google console",
    "ML",
    "API integration & development",
    "RESTful API Development",
    "Java",
    "JavaFX",
  ];

  return (
    <div className=" text-white bg-zinc-700 ml-3">
      <br />

      <h1
        id="Skills"
        className={`text-2xl underline ${highlight ? "gradient-text-2" : ""}`}
      >
        Skills
      </h1>
      <br />

      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex">
            <p className="border-2 border-blue-600 px-10 py-3 text-lg bg-transparent text-white hover:text-gray-200 skill-hover hover:bg-[#333] m-1 rounded-3xl">
              {skill}
            </p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
