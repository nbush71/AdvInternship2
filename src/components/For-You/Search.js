
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Search() {
  return (
    <div className=" flex-col border-2 rounded-sm border-brand-searchgray">
      <div className="relative flex items-center justify-between w-full h-30 pr-8">
        <Image src={Logo} alt="" className="w-300 h-20 invisible" />
            <div className="flex items-center gap-6 max-w-85 w-full">
              <div className="flex items-center w-full ">
                <div className="relative gap-2 flex items-center w-75 h-8">
                  <input className=" sm:w-lg md:w-3xl py-4 outline-0 bg-brand-ltgreen text-brand-searchgray border-2 border-solid border-brand-ltgray rounded-lg placeholder:text-brand-dark/60" placeholder="  Search for books" type="text" name="Search"></input> 
                  <div className="flex items-center absolute h-full right-2 flex-end">
                      <IoIosSearch className="w-7 h-7 bold text-brand-icons" />
                    </div>
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                  <RxHamburgerMenu classNameName=" w-6 h-6 text-brand-icons" />
              </div>
            </div>
          </div>
      </div>
  );
}

export default Search;