import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-300">About Me</span>    
          </Link>
        </li>
        <li>
          <Link href="/education">
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
