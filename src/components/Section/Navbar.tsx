"use client"

import Link from "next/link";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Navbar = () => {

  const user = useUser();
 
  return (
    <>
      <header
        key="1"
        className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white"
      >
        <div className="text-4xl text-green-500 font-bold text-left-top">GENIE</div>
        <div className="ml-auto flex gap-2">
          <div>
            <Link
              className="group inline-flex items-center text-black rounded-md px-4 py-2 text-sm hover:text-black hover:bg-green-500"
              href="/integrations"
            >
              Integrations
            </Link>
          </div>
          {user.isSignedIn ? (
            <div className="inline-flex z-50 h-10 items-center font-semibold justify-center text-white rounded-md bg-green-500 px-6 text-sm shadow transition-colors hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-slate-300">
              <SignOutButton>
                SignOut
              </SignOutButton>
            </div>
          ) : (
            <div className="inline-flex z-50 h-10 items-center font-semibold justify-center text-white rounded-md bg-green-500 px-6 text-sm shadow transition-colors hover:bg-slate-300 focus-visible:outline-none focus-visible:ring-slate-300">
              <SignInButton>
                SignUp
              </SignInButton>
            </div>
          )}
          </div>
      </header>
    </>
  );
};

export default Navbar;
