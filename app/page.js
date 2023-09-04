import "./globals.css"
import Aboutme from "./components/Aboutme"
import MyProjects from "./components/MyProjects"
import repos from "./api/repos";

export default async function Home() {
  const projects = await repos(process.env.API_KEY);
  return (
    <main >
      <div className='grid grid-cols-2 md:grid-cols2 gap-4'>
        <Aboutme />
        <MyProjects projects={projects} />
        </div>
    </main >
  )
}