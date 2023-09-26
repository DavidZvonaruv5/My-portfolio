"use client";
import Link from "next/link";
import Project from "./Project";
import { useState, useEffect } from "react";
import React from "react";
import {
  SiTailwindcss,
  SiReactquery,
  SiMongodb,
  SiFastapi,
  SiJupyter,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";

export default function MyProjects({ projects }) {
  const icons = [
    <div className="flex" key="0">
      <div className="mr-2">☁</div>
      <SiJupyter />
    </div>,
    <SiFastapi key="1" />,
    "🧹💣",
    <div className="flex" key="3">
      <div className="mr-1">🙋🏼‍♂️</div>
      <TbBrandNextjs />
    </div>,
    "🍽🎰",
    <SiTailwindcss key="5" />,
    <div className="flex" key="6">
      <SiReactquery /> <SiMongodb />
    </div>,
    <div className="flex" key="7">
      <SiReactquery /> <SiMongodb />
    </div>,
    <SiPython key="8" />,
    <div className="flex" key="9">
      <BiLogoJava className="text-3xl mr-2" /> <SiMysql className="text-3xl" />
    </div>,
    ,
  ];

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
    <div key={project.id}>
      <Link href={`/projects/${project.id}`} className="mr-2">
        <div className="flex text-2xl leading-6">
          <div className="mr-2">{icons[index]}</div>
          {project.name}
        </div>
      </Link>
      <Project project={project} index={index} />
    </div>
  ));

  return (
    <div id="projects" className="text-white bg-transparent  ml-6 ">
      <h1 className={`text-3xl mb-5 ${highlight ? "gradient-text-2" : ""}`}>
        My Projects
      </h1>

      {content}
    </div>
  );
}
