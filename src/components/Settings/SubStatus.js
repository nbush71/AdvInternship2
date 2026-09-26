//https://summarist.vercel.app/settings

import Link from "next/link";

function SubStatus() {
  return (
    <div className="block p-10 w-full">
      <div className="block max-w-267.5 w-full mr-auto ml-auto pr-6 pl-6">
        <div className="text-left border-b border-solid border-brand-searchgray pb-4 text-[32px] text-brand-darkteal mb-8 font-bold ">
          Settings
        </div>
        <div className="flex flex-col items-start gap-4 mb-8 border-b border-solid border-brand-searchgray pb-6">
          <div className="block text-xl font-bold text-brand-darkteal ">Your Subscription plan</div>
          <div className="block text-brand-darkteal text-xl">Basic - status</div>
        <Link href="/ChoosePlan" className="flex items-center justify-center min-w-[180px] text-brand-darkteal h-10 rounded-sm text-base   bg-brand-green w-fit transition-colors duration-200 ease-in-out delay-0 transition-normal" >Upgrade to Premium </Link> 
        </div>
        <div className="flex flex-col content-start gap-2 pb-6 last:mb-0 last:border-b-0">
          <div className="block text-lg font-bold text-brand-darkteal">Email</div>
          <div className="block text-brand-darkteal">hanna@gmail.com - email</div>
        </div>
      </div>
    </div>
  );
}

export default SubStatus;
