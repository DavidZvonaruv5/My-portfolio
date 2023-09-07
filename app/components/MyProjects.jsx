import Link from "next/link";
import Image from "next/image";
import Project from "./Project";

export default function MyProjects({ projects }) {
  if (!projects) {
    return <div>Loading...</div>;
  }

  const content = projects.map((project, index) => (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <Project project={project} index={index} />
    </Link>
  ));

  return (
    <div id="projects" className="text-white bg-zinc-700  ml-6 mb-5">
      <h1 className="text-2xl underline mt-2  ">My Projects</h1>
      <Image
        src={projects[0].owner.avatar_url}
        alt="David Zvonaruv profile picture"
        width={125}
        height={125}
        className="mt-2 rounded-full border-4 border-double border-gray-900"
      />
      {content}
    </div>
  );
}
