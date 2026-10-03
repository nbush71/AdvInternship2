import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="container flex flex-1 col-span-1 md:flex-col px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex w-300 justify-between items-center gap-3">
        <Image
          src={logo}
          alt="Summarist logo"
          className="w-45 px-2 py-2 md:w-75"
          width={300}
          height={60}
        />

        <div className="flex flex-wrap items-center justify-center gap-6 text-lg pt-4 md:mt-4 md:gap-6 md:text-2xl">
          <Link onClick={() => login(auth, email, password)} href="/Auth" className="cursor-pointer text-black/60 transition-colors duration-200 font-medium hover:text-black">Login</Link>
          <a href="#" className="cursor-not-allowed text-black/60 transition-colors duration-200">About</a>
          <a href="#" className="cursor-not-allowed text-black/60 transition-colors duration-200">Contact</a>
          <a href="#" className="cursor-not-allowed text-black/60 transition-colors duration-200">Help</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;