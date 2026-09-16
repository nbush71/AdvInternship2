import Image from "next/image";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="grid grid-cols-1 px-6 py-6 w-full">
      <div className="max-width-[1100px] max-auto flex items-center justify-between">
        <Image src={logo} alt="Summarist logo" className="px-4 py-4" width={300} height={60}/>
        <div className="flex gap-6 mt-4 text-2xl ">
          <a href="#" className="text-black/60 transition-colors duration-200 cursor-pointer">Login</a>
          <a href="#" className="text-black/60 transition-colors duration-200 cursor-not-allowed">About</a>
          <a href="#" className="text-black/60 transition-colors duration-200 cursor-not-allowed">Contact</a>
          <a href="#" className="text-black/60 transition-colors duration-200 cursor-not-allowed">Help</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;