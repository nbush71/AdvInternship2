import Image from "next/image"; 
import logo from "../../assets/logo.png";
import { GoGear } from "react-icons/go";
import { IoMdHelpCircleOutline } from "react-icons/io";

function Sidebar() {
  return (
    //Add Hidden overlay

    <div className="bg-brand-sidebar w-60 min-w-50 fixed t-0 l-t h-screen z-1000 transition-all duration-0.3s">
      <div className="grid grid-cols-1 bg-brand-sidebar w-60 min-w-50 h-screen z-1000 transition-all p-4">
          <div className="flex items-center justify-center h-15 pt-4  mx-auto mt-4">
            <Image
            src={logo}
            alt="Summarist logo"
            className="w-auto h-14 px-2 py-2"
            width={495}
            height={114}
            loading="lazy"
            decoding="async"
          />
          </div>
          <div className="flex flex-col  justify-between h-15 pb-4 text-lg">
            <div className="flex flex-1 gap-1 justify-between grow shrink basis-0 mt-1">
              <a href="/for-you" className="flex items-center h-14 text-brand-icons mb-2 cursor-pointer">
                <div className="active:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal">
                  <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">For you</div>
              </a>              
            </div>
            <div className="flex grow shrink basis-0 mt-1">
              <a href="/library" className="flex items-center h-14 text-brand-icons mb-2 cursor-pointer">
                <div className="active:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-pointer text-brand-darkteal w-6 h-6 text-[14px]">
                  <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-pointer ">My library</div>
              </a>              
            </div>
            <div className="flex grow shrink basis-0 mt-1">
              <a href="/for-you" className="flex items-center h-14 text-brand-icons mb-2 cursor-pointer">
                <div className="active:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.849 11.808l-.707-.707-9.9 9.9H3v-4.243L14.313 5.444l5.657 5.657a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364zm-2.121-2.121l-1.415-1.414L5 17.586v1.415h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.273 15.728 4.03l1.414-1.414a1 1 0 0 1 1.414 0z"></path></g></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">Highlights</div>
              </a>              
            </div>
            <div className="flex grow shrink basis-0 mt-1">
              <div className="flex items-center h-14 text-brand-icons mb-1 cursor-pointer">
                <div className="active:bg-brand-green w-1.5 h-full mr-4" />
                <div className="flex items-center justify-center mr-2 cursor-not-allowed text-brand-darkteal w-6 h-6 text-[14px]">
                  <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </div> 
                <div className="m-0 p-0 text-brand-darkteal cursor-not-allowed ">Search</div>
              </div>              
            </div>
            <div className="whitespace-break-spaces" />
            <div className="flex items-center gap-4 justify-between ml-4 mr-2" >
              <a href="/settings" className="flex items-center gap-3 h-14 text-brand-darkteal mb-2 cursor-pointer decoration-0">
              <GoGear className="w-6 h-6 text-brand-icons"/>
              <div className="cursor-pointer text-brand-darkteal">Settings</div>
              </a>
            </div>
            <div className="flex items-center gap-4 justify-between ml-4 mr-2">
              <a href="/settings" className="flex items-center gap-3 h-14 text-brand-darkteal mb-2 cursor-pointer decoration-0">
              <IoMdHelpCircleOutline className="w-6 h-6 text-brand-icons"/>
              <div className="cursor-not-allowed text-brand-darkteal">Help & Support</div>
              </a>
            </div>
            <div className="flex items-center gap-4 justify-between ml-4 mr-2">
              <a href="/settings" className="flex items-center gap-3 h-14 text-brand-darkteal mb-2 cursor-pointer decoration-0 ">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              <div className="cursor-pointer text-brand-darkteal">Login</div>
              </a>
            </div>
          </div>          
      </div>
    </div>
  );
}

export default Sidebar;