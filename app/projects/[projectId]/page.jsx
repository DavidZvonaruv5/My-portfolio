import fetchRepos from "../../api/repos";
import "../../globals.css";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  const technologies = [
    "Pyton, Jupyter, Google Drive API, python widgets",
    "Python, FastAPI, CRUD, Asynchronous Programming",
    "Java, JavaFX, GUI",
    "NextJS, TailwindCSS, JavaScript, APIs, Nodemailer, swiper",
    "Python, C, Console Applications",
    "NextJS, TailwindCSS, JavaScript, APIs, Nodemailer, swiper, framer motion, parralex effects",
    "TailwindCSS, HTML ",
    "React, Firebase, MongoDB,Backend,Mongoose, Authentication, Authorization",
    "React, Frontend",
    "Python, Flask",
    "Java, JavaFX, MySQL",
  ];

  const info = [
    "In this project I learned how to use Jupyter / IPython Notebook. I learned how to plot graphs in python and use widgets to display and use GUI. I also learned how to mount google drive and access it using python.",
    "This project is a simple RESTful API built using FastAPI, a modern Python web framework. The API provides basic CRUD (Create, Read, Update, Delete) operations for managing users. I've learned FastAPI basics, data modeling error handling, crud operations, Asynchronous Programming and more.",
    "In this project I made the minesweeper game in Java. I've learned how to structure a project, code in Java, use classes, grid logic, JavaFX, GUI, testing and more.",
    "In building this website with NextJS, TailwindCSS, JavaScript. I've really gotten a deep dive into full-stack development. I've learned so much, from getting the hang of NextJS basics like routing and data fetching, to styling the site just the way I wanted with TailwindCSS. I also got to work on backend technologies, like setting up APIs and even integrating an email delivery system with nodemailer. Learned how to properly use gitHub via command shell and the GUI provide. All in all, I'm really proud of what I've created. This project has taught me a lot and I can't wait to apply what I've learned to future projects, and explore new technologies as well.",
    "These two projects combined into one shows how much I have progressed in my Journey as a developer. You can clearly see the difference in my skills and knowledge. Restaurant in C is one of the first small projects I have created, I have made a restaurant management program where users can see the menu, order food and pay for it, it involves output to the console. The casino machine in python is also one of my first projects, I't is just a simple slot machine that I wrote in python. these two projects taught me a lot about programming in Python & C, everything I need to know as beginner is in these two projects. I have learned how to use functions, loops, if statements, variables, data types, classes, objects, arrays, lists, dictionaries, and more.",

    "In this project, I have enriched my proficiency in NextJS by incorporating various advanced features such as framermotion, parallax effects, and more. It remains an ever-evolving and continuously updated endeavor as I consistently revisit and acquire new skills. This project holds a special place for me, as it is dedicated to serving the needs of a photography business, reflecting my ongoing commitment to growth and innovation.",
    "Learning Tailwindcss",
    "React project I have created, It is a task management system with users, admins, live chat created via firebase live database, mongoDB Database using mongoose, I have learned DB integration, React basics and advanced React, live rendering, authentication, authorization, cookies, cache encryption and much more. ",
    "This is the Frontend of the React project I have created, it is seperated into two repositories, the one above is the Backend",
    "In this project I have learned how to use Flask, micro web framework for Python",
    "This project is a snack machine system built in Java, using JavaFX, MySQL, I've build this project with instructions from a client, it has a user interface, admin interface, delivery system, graphs and more.",
  ];

  const projects = await fetchRepos(process.env.API_KEY);

  // Check if projects is null or undefined, and return a loading or error message
  if (!projects) {
    return (
      <div>Projects are currently unavailable. Please try again later.</div>
    );
  }

  // Find the specific project based on params.projectId
  const projectIndex = projects.findIndex(
    (project) => String(project.id) === params.projectId
  );

  // Check if the project was found
  if (projectIndex === -1) {
    return <div>Project not found. Please check the project ID.</div>;
  }

  // At this point, we have a valid project
  const project = projects[projectIndex];

  return (
    <div className="text-white bg-transparent ml-6 mb-5 min-h-screen flex flex-col">
      <div key={project.id} className="text-white bg-transparent ml-1 mb-5">
        <h1 className="text-5xl mt-2 mb-[40px] text-center">{project.name}</h1>
        <h2 className="text-3xl text-center mb-5 hover:glow">Description</h2>
        <p className="text-lg mb-10 text-center">{info[projectIndex]}</p>
        <h2 className="text-3xl text-center mb-5 hover:glow">
          Skills I Learned & Technologies Used
        </h2>
        <p className="text-md mb-10 text-center">
          {technologies[projectIndex]}
        </p>

        <h2 className="text-3xl text-center mb-5 hover:glow">
          GitHub Repository
        </h2>
        <Link href={project.html_url} passHref>
          <Image
            className="rounded-full m-auto"
            src="/GitHub.gif"
            alt="GitHub GIF"
            width={200}
            height={150}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
