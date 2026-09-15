import Image from "next/image";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="px-6 py-6 w-full">
      <div className="max-width-[1200px] max-auto flex items-center justify-between">
        <Image src={logo} alt="Summarist logo" className="px-6 py-4" width={260} height={50}/>
        <div className="flex gap-6 mt-4 ">
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