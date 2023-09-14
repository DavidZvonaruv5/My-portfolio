"use client";
import Link from "next/link";
import Image from "next/image";
import Project from "./Project";
import { useState, useEffect } from "react";

export default function MyProjects({ projects }) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#projects") {
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
  if (!projects) {
    return <div>Loading...</div>;
  }

  const content = projects.map((project, index) => (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <Project project={project} index={index} />
    </Link>
  ));

  return (
    <div id="projects" className="text-white bg-transparent  ml-6 mb-5">
      <h1 className={`text-3xl  mt-2  ${highlight ? "gradient-text-2" : ""}`}>
        My Projects
      </h1>
      <Image
        src={projects[0].owner.avatar_url}
        alt="David Zvonaruv profile picture"
        width={130}
        height={130}
        className="mt-2 rounded-full border-4 border-double border-gray-200"
      />
      {content}
    </div>
  );
}
