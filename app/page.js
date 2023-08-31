import "./globals.css"
import Aboutme from "./components/Aboutme"
import MyProjects from "./components/MyProjects"


export default function Home() {
  return (
    <main className='bg-zinc-700 flex'>
      <Aboutme />
      <MyProjects />
    </main >
  )
}
