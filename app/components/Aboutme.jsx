import Link from "next/link";

export default function Aboutme() {
  const text = `Hello! I'm David Zvonaruv, a Software Engineer. Let me tell you a bit about myself.

Passionate about embracing emerging technologies, I am driven by a relentless pursuit of learning. My commitment to self-improvement empowers me to explore new horizons and stay at the forefront of innovation. Whether it's diving into new languages, frameworks, or paradigms, I thrive on the excitement of expanding my skill set.

My journey is a testament to my dedication to continuous growth. Embracing the challenges of both solo exploration and collaborative teamwork, I've cultivated not only the ability to absorb information independently but also to seamlessly integrate into diverse teams. Faced with complex problems, I find satisfaction in devising elegant solutions that harness both creativity and analytical acumen.

Responsibility is at the core of my character. Whether it's taking charge of a project, contributing to a group effort, or embracing the weight of individual tasks, I approach every endeavor with unwavering diligence and conscientiousness.

My academic accomplishments reflect a commitment to excellence. Mastering concepts in Data Structures & Introduction to Algorithms, Elements of Computing Systems, and Operating Systems, I've honed my proficiency in foundational areas that underscore a strong technical foundation.

Recently, my journey has been enriched by an ever-growing fascination with fullstack development. This newfound interest has ignited a desire to grasp the intricate interplay between front-end elegance and back-end functionality, inspiring me to explore the art of creating cohesive digital experiences.

Yet, I don't rest on laurels. Driven by an intrinsic desire for improvement, I continually strive to surpass yesterday's accomplishments, setting higher benchmarks and embarking on a journey towards personal and professional transcendence.`;

  const words = text.split("\n\n");

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
  const skills = [
    "JavaScript",
    "React",
    "NextJS",
    "MongoDB",
    "SQL",
    "Python",
    "Git",
    "HTML",
    "CSS",
    "Google Cloud Platform",
    "Google console",
    "ML",
  ];

  return (
    <div className="w-10/12 text-white bg-zinc-700 border-r-2 border-zinc-900 ml-4 mr-4  mb-5">
      <div id="Aboutme" className="text-s ">
        <h1 className="text-2xl underline mt-2 underline-color-change">
          About me
        </h1>
        <br />
        <p className="text-base leading-7 ">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block transition hover:text-lime-100"
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      <br />

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

      <br />

      <h1 id="Skills" className="text-2xl underline">
        Skills
      </h1>
      <br />

      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex">
            <p className="border-2 border-blue-600 px-6 py-2 text-lg bg-transparent text-white hover:text-gray-200 skill-hover hover:bg-[#333] m-1 rounded-3xl">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
