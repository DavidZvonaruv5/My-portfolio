"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function Education() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#Education") {
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

  const education = [
    {
      degree: "BSc in Software Engineering",
      school: "Braude College of Engineering GPA:80, starting my fourth year",
      year: "2020-present",
    },
    {
      degree:
        "High School Diploma in Electro Optics and Physics including IoT study",
      school: "Ort Maalot High School",
      year: "2015-2018",
    },
  ];

  return (
    <div className=" text-white bg-transparent ml-3">
      <h1
        id="Education"
        className={`text-3xl  ${highlight ? "gradient-text-2" : ""}`}
      >
        Education
      </h1>
      <br />

      <div className="text-base leading-7">
        {education.map((edu, index) => (
          <div key={index} className="mb-4 hover:text-lime-100">
            <h3 className="text-l font-semibold">{edu.degree}</h3>
            <p className="text-s">{edu.school}</p>
            <p className="text-xs text-gray-400">⏲{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
