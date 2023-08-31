import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"> <div className="text-xl font-bold">My Portfolio</div></Link>
        <ul className="flex space-x-4">
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
            <Link href="/projects">
              <span className="cursor-pointer hover:text-gray-300">My Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
