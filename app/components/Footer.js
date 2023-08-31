import Link from 'next/link';

export default function Footer() {

  const date = new Date()


  return (
    <footer className="bg-black text-white fixed w-full bottom-0">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-3">© {date.getFullYear()} David. All rights reserved.</p>
        <ul className="flex space-x-4">
        </ul>
      </div>
    </footer>
  );
};

