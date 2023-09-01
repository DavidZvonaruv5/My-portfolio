import Link from 'next/link';
import { FaGithub, FaLinkedin,FaDownload } from "react-icons/fa"
export default function Navbar() {
  return (
    <nav className="bg-black text-white py-2 sticky  top-0 shadow-md shadow-stone-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"> <div className="text-xl font-bold">My Portfolio</div></Link>
        <ul className="flex space-x-4">
        <a href="DavidZvonaruv5_CV.pdf" download="David-Zvonaruv-CV" className='flex'>  <span className='text-xl mt-0.5'>Download CV:</span><FaDownload className='ml-2  text-[2rem] hover:animate-bounce text-gray-300'/></a>
        <Link href="https://github.com/DavidZvonaruv5"><FaGithub className='text-[2rem] hover:animate-bounce' /></Link>
          <Link href="https://www.linkedin.com/in/david-zvonaruv-190a68185/"><FaLinkedin className='text-[2rem] hover:animate-bounce' /></Link>
          
          <li>
            <Link href="#Aboutme">
              <span className="cursor-pointer hover:text-gray-300 text-xl">About Me</span>
            </Link>
          </li>
          <li>
            <Link href="#Education">
              <span className="cursor-pointer hover:text-gray-300 text-xl">Education</span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className="cursor-pointer hover:text-gray-300 text-xl">My Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
