import Image from "next/image";
import Login from "../../assets/login.png";

export default function SettingsLogin() {
  return (
    <div className="flex p-8 w-full max-w-267.5 h-full">
      <div className=" w-full mr-auto ml-auto pr-6 pl-6">
        <div className=" flex flex-col text-brand-darkteal w-full text-[32px] font-bold mb-8 text-left border-b-2 border-b-brand-linegray border-solid p-4">Settings</div>
        <div className="max-w-115 flex flex-col items-center mr-auto ml-auto">
          <Image
            alt="login"
            src={Login}
            className="w-full h-full async loading-lazy bg-transparent aspect-auto"
          />
          <div className="text-2xl font-bold text-brand-darkteal text-center mb-4">
            Log in to your account to see your details.
          </div>
          <button className="flex items-center justify-center w-45 min-w-45 text-brand-darkteal h-10 rounded-sm text-4  bg-brand-green cursor-pointer border-none outline-none">Login</button>
        </div>
      </div>
    </div>
  );
}