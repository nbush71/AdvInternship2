"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { auth } from "../firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";


const Auth = ({ isLoginOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setUser((prev) => ({ ...prev, password: e.target.value }));
  };

  const login = async (email, password) => {
    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("Logged in:", userCredential.user);

      onClose();
      router.push("/for-you");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const logout = async () => {
    try {
      console.log("Logout attempt");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative flex columns-1 transition-all duration-300 ease-in-out">
      <div className="top-0 bottom-0 w-full h-full bg-brand-smoke transition-normal opacity-.4s delay-0 duration-300 z-10">
        <div className="w-full z-9999 bg-black/0.75">
          <aside
            className={`fixed top-0 bottom-0 w-full h-full ${isLoginOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="relative max-w-100 bg-white border rounded-8 shadow-md w-full z-10">
              <div className="pt-12 px-8 pb-6">
                <div className="text-center text-2xl font-bold text-brand-darkteal mb-6">
                  Log in to Summarist
                </div>

                <button
                  type="button"
                  onClick={() => login(user.email, user.password)}
                  className="relative flex justify-center text-white bg-brand-guest w-full h-10 text-[18px] transition hover:brightness-95"
                >
                  <div className="bg-transparent flex pt-1 rounded-sm items-center justify-center w-9 h-9  rounded-4 absolute left-0.5">
                    <IoPersonSharp className="w-7 h-7" />
                  </div>
                  <div className="text-white content-center text-md font-semibold text-[16px]">
                    Login as a Guest
                  </div>
                </button>

                <div className="flex items-center py-4">
                  <span className="mr-6 ml-6 text-[14px] text-brand-links">
                    or
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => login(user.email, user.password)}
                  className="relative flex px-2justify-between text-white bg-brand-google rounded-sm w-full h-10 text-[18px] transition hover:brightness-95"
                >
                  <div className="flex items-center justify-center w-9 h-9 pt-2 border-b bg-white rounded-sm">
                    <FcGoogle className="w-full h-full" />
                  </div>
                  <div className="text-white content-center text-md font-semibold text-[16px]">
                    Login with Google
                  </div>
                </button>

                <div className="flex items-center justify-between py-4">
                  <span className="mr-6 ml-6 text-[14px] text-brand-links">
                    or
                  </span>
                </div>

                <form className="grid grid-cols-1 gap-4">
                  <input
                    className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none"
                    type="text"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleEmailChange}
                  />

                  <input
                    className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handlePasswordChange}
                  />

                  <div className="grid grid-cols-1 place-items-center mt-8">
                    <button
                      type="button"
                      onClick={() => login(user.email, user.password)}
                      className="inline-flex w-full max-w-50 items-center justify-center rounded-md bg-brand-green px-6 py-4 text-lg font-medium text-brand-darkteal shadow-sm transition hover:brightness-95 md:text-xl"
                    >
                      Login
                    </button>

                    <div className="text-center text-shadow-brand-passAcct font-semibold text-[14px] w-fit mx-auto mb-4 cursor-not-allowed">
                      Forgot your password?
                    </div>

                    <button
                      type="button"
                      className="bg-brand-ltgreen h-10 text-center text-brand-passAcct w-full rounded-br-sm rounder-bl-sm font-semibold text-[16px] cursor-not-allowed outline-0 p-0 border-0 "
                    >
                      Don't have an account?
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute top-4 right-4 text-brand-links hover:text-brand-darkteal"
                    >
                      <IoClose className="w-7 h-7" />
                    </button>

                    {loading ? (
                      <div className="text-center text-brand-links font-semibold text-[14px]">
                        Logging in...
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Auth;
