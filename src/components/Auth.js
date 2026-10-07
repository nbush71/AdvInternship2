"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { auth } from "../firebase/init";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "@/src/redux/authModalSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.authModal.isOpen);
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

      dispatch(closeAuthModal());
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

  const guestLogin = () => {
    login("guest@gmail.com", "guest123");
  };

  return (
    <>
       <aside
    className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-brand-smoke/80 transition-opacity duration-300 ${
      isLoginOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
  >

      <div className="relative flex columns-1 w-100">
        <div className="w-full h-full">
          <div className="w-full h-full bg-brand-smoke/60">
            <div className="relative max-w-100 w-full bg-white rounded-lg shadow-md z-9999">
              <div className="pt-12 px-8 pb-6">
                <div className="text-center text-2xl font-bold text-brand-darkteal mb-6">
                  Log in to Summarist
                </div>

                <button
                  type="button"
                  onClick={guestLogin}
                  className="relative flex justify-center text-white bg-brand-guest w-full h-10 text-[18px] transition hover:brightness-95"
                >
                  <div className="bg-transparent flex pt-1 rounded-sm items-center justify-center w-9 h-9 rounded-4 absolute left-0.5">
                    <IoPersonSharp className="w-7 h-7" />
                  </div>
                  <div className="text-white content-center text-md font-semibold text-[16px]">
                    Login as a Guest
                  </div>
                </button>

                <div className="flex items-center gap-2 w-full max-w-80 mx-auto my-6 text-[14px] text-brand-slate before:h-px before:flex-1 before:bg-brand-ltgray before:content-[''] after:h-px after:flex-1 after:bg-brand-ltgray after:content-['']">
                  or
                </div>

                <button
                  type="button"
                  onClick={() => login(user.email, user.password)}
                  className="relative flex items-center text-white bg-brand-google justify-between w-full h-10 text-[18px] transition hover:brightness-95"
                >
                  <div className="absolute pb-1 flex items-center justify-center w-9 h-9 pt-2 border-b bg-white ml-1 rounded-md">
                    <FcGoogle className="w-7 h-7" />
                  </div>
                  <div className="text-white content-center pl-22 text-md font-semibold text-[16px]">
                    Login with Google
                  </div>
                </button>

                <div className="flex items-center gap-2 w-full max-w-80 mx-auto my-6 text-[14px] text-brand-slate before:h-px before:flex-1 before:bg-brand-ltgray before:content-[''] after:h-px after:flex-1 after:bg-brand-ltgray after:content-['']">
                  or
                </div>

                <form className="grid grid-cols-1 gap-4">
                  <input
                    className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none bg-white"
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

                    <button className="text-center h-10 items-center pt-3 text-brand-passAcct font-semibold text-[16px] max-w-50 mx-auto mb-4 cursor-not-allowed">
                      Forgot your password?
                    </button>

                    <button
                      type="button"
                      className="bg-brand-ltgreen h-10 text-center text-brand-passAcct w-full rounded-br-sm rounder-bl-sm font-semibold text-[16px] cursor-not-allowed outline-0 p-0 border-0"
                    >
                      Don't have an account?
                    </button>

                    <button
                      type="button"
                      onClick={() => dispatch(closeAuthModal())}
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
          </div>
        </div>
      </div>
      </aside>
    </>
  );
};

export default Auth;
