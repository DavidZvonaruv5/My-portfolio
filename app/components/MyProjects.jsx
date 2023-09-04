import Link from "next/link";
import Image from "next/image";
import Project from "./Project";

export default function MyProjects({ projects }) {
  if (!projects) {
    return <div>Loading...</div>;
  }

  const content = projects.map((project) => (
    <Link href={`/projects/${project.id}`} key={project.id}>
      <Project project={project} />
    </Link>
  ));

  return (
    <div className="w-6/12 text-white bg-zinc-700 mr-8 ml-8">
      <h1 className="text-2xl underline mt-2">My Projects</h1>
      <Image
        src={projects[0].owner.avatar_url}
        alt="David Zvonaruv profile picture"
        width={100}
        height={100}
        className="mt-2 rounded-full border-4 border-double border-gray-500"
      />
      {content}
    </div>
  );
}
