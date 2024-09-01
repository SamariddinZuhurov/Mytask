import React from "react";
import Link from "next/link";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className=" fixed px-8  right-0 left-0   backdrop-blur-xl drop-shadow-xl shadow-slate-900 py-4 flex justify-between items-center">
      <div className=" flex gap-5 items-center">
        <div class="bg-slate-900 h-12 w-12  rounded-md flex justify-center items-center">
          <span class="text-white text-3xl font-bold">M</span>
        </div>
        <span class="text-4xl font-bold text-slate-900 italic tracking-wider">
          Mytask
        </span>
      </div>
      <SignedOut>
        <div class="flex space-x-4">
          <Link href={"sign-in"}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Sign in
            </button>
          </Link>
          <Link href={"sign-up"}>
            <button class=" bg-slate-900 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
              Registration
            </button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

export default Navbar;
