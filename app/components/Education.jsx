import React from "react";

export default function Education() {
  const education = [
    {
      degree: "BSc in Software Engineering",
      school: "Braude College of Engineering GPA:80",
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
    <div className=" text-white bg-zinc-700 ml-3">
      <h1 className="text-2xl underline">Education</h1>
      <br />

      <div id="Education" className="text-base leading-7">
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-l font-semibold">{edu.degree}</h3>
            <p className="text-s">{edu.school}</p>
            <p className="text-xs text-gray-400">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
