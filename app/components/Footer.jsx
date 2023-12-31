export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-black text-xs text-white bottom-0  w-screen">
      <div className="container mx-auto flex flex-col items-center">
        <p>
          © {date.getFullYear()}{" "}
          <span className="mr-2 font-bold"> David Zvonaruv,</span>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
