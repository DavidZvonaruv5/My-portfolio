import React from "react";

export default function Skills() {
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

      <h1 id="Skills" className="text-2xl underline">
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
