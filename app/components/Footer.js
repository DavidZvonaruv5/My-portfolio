import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex flex-col items-center">
      <p className="mb-3">© 2023 Your Name. All rights reserved.</p>
      <ul className="flex space-x-4">
        <li>
          <Link href="/privacy-policy">
            <span className="cursor-pointer hover:text-gray-300">Privacy Policy</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-gray-300">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
  );
};

