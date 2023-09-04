import fetchRepos from "../../api/repos";
import "../../globals.css";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const projects = await fetchRepos(process.env.API_KEY);
  const project = projects.map((project) =>
    String(project.id) === params.projectId ? (
      <div className="text-xl" key={project.id}>
        <h1>{project.name}</h1> <div>{project.url}</div>
      </div>
    ) : null
  );
  if (projects === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {project}
      <Link href="/" className="text-xl border-white border-2 ">
        Go Back
      </Link>
    </div>
  );
}
