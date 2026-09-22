import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrMicrophone } from "react-icons/gr";
import { LuBookOpenText } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";


function InsideBook() {
   return (
      <div className="flex flex-col gap-6 mt-12 col-span-3 w-full min-h-full pl-8">
         <div className="flex flex-col col-span-3 w-[75%] gap-6">
            {/* Search Background */}
            <div className="flex text-brand-darkteal text-4xl font-bold">
               The Lean Startup (Premium) title
            </div>
            <div className="flex flex-col text-lg text-brand-darkteal">
               author
            </div>
            <div className="flex flex-col text-xl pb-4 text-brand-darkteal">
               subTitle
            </div>
         </div>
         {/* Icons */}
         <div className="w-full flex flex-col flex-1 p-4 border-brand-searchgray border-b border-t max-w-[50%]">
            <div class="flex flex-wrap max-w-100 gap-y-3 ">
               <div class="flex flex-1 items-center w-[50%] text-brand-darkteal font-medium text-sm gap-8">
                  <div class="flex flex-1 items-center gap-3">
                     <div class="flex w-6 h-6 mr-1">
                        <FaRegStar className="w-full h-full text-brand-icons" />
                     </div>
                     <div class="flex text-brand-darkteal font-medium text-sm">
                        averageRating
                     </div>
                     <div class="flex text-brand-darkteal font-medium text-sm">
                        totalratings
                     </div>
                  </div>
                  <div class="flex items-center w-[50%] text-brand-darkteal font-medium text-[14px] gap-4">
                     <div class="flex w-6 h-6 mr-1">
                        <FaRegClock className="w-full h-full text-brand-darkteal" />
                     </div>
                     <div class="text-brand-darkteal font-medium text-sm">
                        03:23
                     </div>
                  </div>
                  <div class="flex flex-1 text-wrap items-center w-[50%] text-brand-darkteal font-medium text-sm">
                     <div class="flex w-6 h-6 mr-1">
                        <GrMicrophone className="w-full h-full text-brand-darkteal" />
                     </div>
                     <div class="text-brand-darkteal font-medium text-sm">
                        type
                     </div>
                  </div>
                  <div class="flex items-center col-span-1 w-[50%] text-brand-darkteal font-medium text-[14px]">
                     <div class="flex w-6 h-6 mr-1">
                        <HiOutlineLightBulb className="w-full h-full text-brand-darkteal" />
                     </div>
                     <div class="text-brand-darkteal font-medium text-sm">
                        keyIdeas
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Buttons */}
         <div class="flex gap-4 mb-6">
            <button className="flex items-center justify-center w-36 h-12 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer transition-colors opacity transition-normal ease-[.2s] hover:bg-brand-darkteal/80 border-0 outline-0">
               <div
                  className="flex text-white text-base justify-center pr-4
               cursor-pointer"
               >
                  <LuBookOpenText className="w-6 h-6" />
               </div>
               <div class="flex text-inherit text-lg">Read</div>
            </button>
            <button className="flex items-center justify-center w-36 h-12 bg-brand-darkteal text-white text-base rounded-sm cursor-pointer transition-colors opacity transition-normal ease-[.2s] hover:bg-brand-darkteal/80 border-0 outline-0">
            <div className="flex pr-4">
                  <GrMicrophone className="w-6 h-6" />
               </div>
               <div className="text-white text-lg">Listen</div>
            </button>
         </div>
         <div className="flex items-center gap-2 text-brand-blue font-medium cursor-pointer mb-10 text-lg transition-colors opacity transition-normal ease-[.2s] hover:text-brand-blue/80">
            <div class="flex w-5 h-5 ">
               <IoBookmarkOutline className="size-7 w-full h-full outline-brand-blue" />
            </div>
            {/*Add to library button */}
            <div className="text-brand-blue text-lg cursor-pointer font-medium">
               Add title to My Library
            </div>
         </div>
         <div className="text-lg text-brand-darkteal mb-4 font-semibold">
            What's it about?
         </div>
         <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex bg-brand-graybutton px-4 h-12 items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm transition-colors delay-200 duration-200 ease-in-out transition-normal ">
               tag
            </div>
            <div className="flex bg-brand-graybutton px-4 h-12 items-center cursor-not-allowed text-brand-darkteal font-medium rounded-sm transition-colors delay-200 duration-200 ease-in-out transition-normal ">
               tag
            </div>
         </div>
         <div className="text-brand-darkteal mb-4 leading-1.5">bookDescription</div>
         <p class="text-lg text-brand-darkteal mb-4 font-semibold ">
            About the author
         </p>
         <div className="inner-book__author--description">
            authorDescription
         </div>
         <div className="flex col-span-2 h-75 w-75 border min-w-75">
            <div className="h-full w-full ">
               <div className="block w-full h-full">
                  imageLink
               </div>
            </div>
         </div>
      </div>
   );
}

export default InsideBook;
