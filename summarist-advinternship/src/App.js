"use server";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoPersonSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "../../app/globals.css";
import { auth } from "src/firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  function handleLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);``
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className="App">
      <div className="relative flex columns-1 transition-all duration-300 ease-in-out">
        <div className="top-0 bottom-0 w-full h-full bg-brand-smoke transition-normal opacity-.4s delay-0 duration-300 hidden opacity-0 pointer-events-none z-10">
          {/* Auth Wrapper */}
          <div className="w-full z-9999 bg-black/0.75">
            <aside className="top-0 bottom-0 w-full h-full">
              <div className="relative max-w-100 bg-white border rounded-8 shadow-md w-full z-10">

                <div className="pt-12 px-8 pb-6">
                  <div className="text-center text-2xl font-bold text-brand-darkteal mb-6">
                    Log in to Summarist
                  </div>
                  {/* Guest Login */}
                  <button
                    onClick={() => login(auth, email, password)}
                    className="relative flex justify-center text-white bg-brand-guest w-full h-10 text-[18px] transition hover:brightness-95"
                  >
                    <div className="bg-transparent flex items-center justify-center w-9 h-9 border rounded-4 absolute left-0.5">
                      <IoPersonSharp size={24} />
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
                  {/* Google Login */}
                  <button
                    onClick={() => login(auth, email, password)}
                    className="relative flex justify-center text-white bg-brand-google w-full h-10 text-[18px] transition hover:brightness-95"
                  >
                    <div className="google__icon--mask">
                      <FcGoogle size={24} />
                    </div>
                    <div className="text-white content-center text-md font-semibold text-[16px]">
                      Login with Google
                    </div>
                  </button>
                  <div className="flex items-center py-4">
                    <span className="mr-6 ml-6 text-[14px] text-brand-links">
                      or
                    </span>
                  </div>
                  <form className="grid grid-cols-1 gap-4">
                    <input
                      className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none"
                      type="text"
                      placeholder="Email Address"
                    />
                    <input
                      className="h-10 border-2 border-solid rounded-sm border-brand-ltgray text-brand-input px-3 outline-none"
                      type="password"
                      placeholder="Password"
                    />
                    {/* Email login */} 
                    <div className="grid grid-cols-1 place-items-center mt-8">
                      <button
                        onClick={() => login(auth, email, password)}
                        className="inline-flex w-full  max-w-50 items-center justify-center rounded-md bg-brand-green px-6 py-4 text-lg font-medium text-brand-darkteal shadow-sm transition hover:brightness-95 md:text-xl"
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
                        className="w-7 h-7 "
                        aria-label="Close"
                      >
                        <IoClose className="w-full h-full" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
