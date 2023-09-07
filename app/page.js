import "./globals.css"
import Aboutme from "./components/Aboutme"
import Education from "./components/Education"
import MyProjects from "./components/MyProjects"
import Skills from "./components/Skills"
import Recommendation from "./components/Recommendation"
import repos from "./api/repos";

export default async function Home() {
  const projects = await repos(process.env.API_KEY);
  return (
    <main >
      <div className='flex flex-col  md:flex-row'>
        <div className="w-screen border-r-2 border-zinc-900 p-2 gap-2 ">
          <Aboutme />
          <Education />
          <Recommendation />
          <Skills />
         
        </div>
        <div className="md:w-6/12">
          <MyProjects projects={projects} />
          </div>
        </div>
    </main >
  )
}