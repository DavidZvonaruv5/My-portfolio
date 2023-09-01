import repos from "../api/repos";
import Image from "next/image";

export default async function myProjects() {
  const projects = await repos();
  console.log(projects);
  const content = projects.map((project) => {
    return (
      <div key={project.id} className="text-xl ">
        {project.name}
      </div>
    );
  });

  return (
    <>
      <div className="w-6/12 text-white bg-zinc-700 mr-8 ml-8">
        <h1 className="text-2xl underline mt-2">My Projects</h1>
        <Image
          src={projects[0].owner.avatar_url} 
          alt="Description of the image"
          width={100}  
          height={100}
          className="mt-2 rounded-full border-4 border-double border-gray-500"
        />
        {content}
      </div>
    </>
  );
}
