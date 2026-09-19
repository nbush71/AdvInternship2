"use server"

import { FcGoogle } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";

function Login() {
  return (
    <div className="relative flex columns-1 transition-all duration-300 ease-.3s">
      <div className="top-0 bottom-0 w-full h-full bg-brand-smoke transition-normal opacity-.4s delay-0 duration-300 hidden opacity-0 pointer-events-none z-10">
        <div className="w-full z-9999 bg-black/0.75">
          <div className="top-0 bottom-0 w-full h-full">
            <div className="relative max-w-100 bg-white border rounded-8 shadow-md w-full z-10">
              <div className="pt-12 px-8 pb-6">
                <div className="text-center text-2xl font-bold text-brand-darkteal mb-6">Log in to Summarist</div>
                <button className="relative flex justify-center text-white bg-brand-guest w-full h-10 text-[18px] transition hover:brightness-95">
                  <div className="bg-transparent flex items-center justify-center w-9 h-9 border rounded-4 absolute left-0.5">
                    <IoPersonSharp size={24} />
                  </div>
                  <div className="text-white content-center text-md font-semibold text-[16px]">Login as a Guest</div>
                </button>
                <div className="flex items-center py-4">
                  <span className="mr-6 ml-6 text-[14px] text-brand-links">or</span></div>
                <button className="relative flex justify-center text-white bg-brand-google w-full h-10 text-[18px] transition hover:brightness-95">
                  <div className="google__icon--mask"><FcGoogle size={24} /></div>
                  <div className="text-white content-center text-md font-semibold text-[16px]">Login with Google</div></button>
                <div className="flex items-center py-4">
                <span className="mr-6 ml-6 text-[14px] text-brand-links">or</span></div>
                <form className="grid grid-cols-1 gap-4">
                  <input className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none" type="text" placeholder="Email Address" />
                  <input className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none" type="password" placeholder="Password" />
                  <div className="grid grid-cols-1 place-items-center mt-8">
                    <button className="inline-flex w-full mx-w-160 items-center justify-center rounded-md bg-brand-green px-6 py-4 text-lg font-medium text-brand-darkteal shadow-sm transition hover:brightness-95 md:text-xl">Login</button>
                    <div className="text-center text-shadow-brand-passAcct font-semibold text-[14px] w-fit mx-auto mb-4 cursor-pointer">Forgot your password?</div>
                    <button type="button" className="bg-brand-ltgreen h-10 text-center text-brand-passAcct w-full rounded-br-sm rounder-bl-sm font-semibold text-[16px] cursor-pointer outline-0 p-0 border-0 ">Don't have an account?</button>
                    <button type="button" className="auth__close--btn" aria-label="Close">
                      <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.42056 5.20161 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;