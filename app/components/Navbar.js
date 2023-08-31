import Link from 'next/link';
import { FaGithub, FaLinkedin  } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-2 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"> <div className="text-xl font-bold">My Portfolio</div></Link>
        <ul className="flex space-x-4">
        <Link href="https://github.com/DavidZvonaruv5"><FaGithub className='text-[2rem] hover:animate-bounce' /></Link>
        <Link href="https://www.linkedin.com/in/david-zvonar-0b4b0a1b0/"><FaLinkedin className='text-[2rem] hover:animate-bounce'/></Link>
          <li>
            <Link href="#Aboutme">
              <span className="cursor-pointer hover:text-gray-300">About Me</span>
            </Link>
          </li>
          <li>
            <Link href="#Education">
              <span className="cursor-pointer hover:text-gray-300">Education</span>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <span className="cursor-pointer hover:text-gray-300">My Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
