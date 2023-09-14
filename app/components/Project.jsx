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
export default function Project({ project, index }) {
  const truncateInfo = (str, wordLimit = 20) => {
    const words = str.split(" ");
    if (words.length > wordLimit) {
      return (
        <>
          <span>{words.slice(0, wordLimit).join(" ")}</span>
          <span className="hover:cursor-pointer text-sm text-neutral-200 hover:text-neutral-300 hover:glow">
            ...More
          </span>
        </>
      );
    }
    return str;
  };
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

  const info = [
    "In this project I learned how to use Jupyter / IPython Notebook. I learned how to plot graphs in python and use widgets to display and use GUI. I also learned how to mount google drive and access it using python.",
    "This project is a simple RESTful API built using FastAPI, a modern Python web framework. The API provides basic CRUD (Create, Read, Update, Delete) operations for managing users. I've learned FastAPI basics, data modeling error handling, crud operations, Asynchronous Programming and more.",
    "In this project I made the minesweeper game in Java. I've learned how to structure a project, code in Java, use classes, grid logic, JavaFX, GUI, testing and more.",
    "In building this website with NextJS, TailwindCSS, JavaScript. I've really gotten a deep dive into full-stack development. I've learned so much, from getting the hang of NextJS basics like routing and data fetching, to styling the site just the way I wanted with TailwindCSS. I also got to work on backend technologies, like setting up APIs and even integrating an email delivery system with nodemailer. Learned how to properly use gitHub via command shell and the GUI provide. All in all, I'm really proud of what I've created. This project has taught me a lot and I can't wait to apply what I've learned to future projects, and explore new technologies as well.",
    "These two projects combined into one shows how much I have progressed in my Journey as a developer. You can clearly see the difference in my skills and knowledge. Restaurant in C is one of the first small projects I have created, I have made a restaurant management program where users can see the menu, order food and pay for it, it involves output to the console. The casino machine in python is also one of my first projects, I't is just a simple slot machine that I wrote in python. these two projects taught me a lot about programming in Python & C, everything I need to know as beginner is in these two projects. I have learned how to use functions, loops, if statements, variables, data types, classes, objects, arrays, lists, dictionaries, and more.",
    "In this project I've learned how to integrate and use TailwindCSS. ",
    "React project I have created, It is a task management system with users, admins, live chat created via firebase live database, mongoDB Database using mongoose, I have learned DB integration, React basics and advanced React, live rendering, authentication, authorization, cookies, cache encryption and much more. ",
    "This is the Frontend of the React project I have created, it is seperated into two repositories, the one above is the Backend",
    "In this project I have learned how to use Flask, micro web framework for Python",
    "This project is a snack machine system built in Java, using JavaFX, MySQL, I've build this project with instructions from a client, it has a user interface, admin interface, delivery system, graphs and more.",
  ];

  return (
    <>
      <div className="flex text-2xl mt-1 p-1 mb-1 ">
        <div className="mr-2">{icons[index]}</div>
        {project.name}
      </div>

      <p className="text-sm mr-2 mb-2 hover:text-lime-100">
        {" "}
        {truncateInfo(info[index])}
      </p>
    </>
  );
}
