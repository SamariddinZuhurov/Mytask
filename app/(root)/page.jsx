"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoScreenFull } from "react-icons/go";
import Link from "next/link";
import { SignedOut, SignedIn } from "@clerk/nextjs";

function page() {
  const [ChatgptStyle, setChatgptStyle] = useState(false);

  return (
    <main className="px-8">
      <Navbar />
      <SignedIn>
        <section className="  w-full gap-5 pt-24 h-[100vh] pb-6 grid grid-cols-3 ">
          <div className="   flex flex-col  justify-evenly  rounded-3xl ">
            <h1 className="text-blue-500 font-bold italic  tracking-widest text-5xl  ">
              Dashboard.
            </h1>
            <div className="   shadow-2xl shadow-gray-500  bg-white  rounded-3xl py-7 flex justify-between items-center   px-5">
              <div className="flex   flex-col gap-5">
                <h1 className=" text-gray-600 text-xl  font-semibold">
                  Result of your works
                </h1>
                <h1 className="text-slate-900 text-xl  font-semibold">
                  Your Monday plans
                </h1>
                <h1 className="text-blue-500 font-bold italic  tracking-widest text-3xl  ">
                  Is Almost Down
                </h1>
              </div>
              <div className="   flex justify-center items-center  border-[8px] border-blue-600  w-40 h-40 rounded-full">
                <h1 className="text-blue-600 font-bold italic  tracking-widest text-4xl   ">
                  100%
                </h1>
              </div>
            </div>
          </div>
          <div
            className={`${
              ChatgptStyle
                ? "     backdrop-blur-3xl  absolute top-0 bottom-0 left-0 right-0 h-full w-full flex justify-center items-center "
                : ""
            }`}
            onClick={() => {
              setChatgptStyle(!ChatgptStyle);
            }}
          >
            <h1 className=" absolute hover:bg-[#f8f5f5]  transition duration-300  rounded-xl text-white  top-14 hover:text-blue-600 bg-blue-500 text-4xl  ">
              <GoScreenFull className="   " />
            </h1>
            <iframe
              className={`${
                ChatgptStyle
                  ? " shadow-2xl  bg-white     rounded-3xl   w-[90%] h-[80%]"
                  : " shadow-2xl  bg-white     rounded-3xl   w-full h-full "
              }`}
              src="https://www.blackbox.ai/"
            />
          </div>

          <div className=" rounded-3xl bg-gray-500"></div>
          <div className="  flex flex-col  justify-evenly items-start px-5 rounded-[30px] bg-black  shadow-gray-500">
            <h1 className="text-4xl text-white  font-bold ">
              Upgrade to <span className=" text-blue-700 ">Premium</span>
            </h1>
            <p className="text-gray-400 tracking-widest">
              Go Pro To Unlock AI Futures
            </p>
            <button class="bg-gradient-to-r from-purple-800 to-blue-500  hover:to-blue-400 text-white font-bold py-2 px-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400">
              Update New
            </button>
          </div>
          <div className=" rounded-3xl bg-gray-500"></div>
          <div className=" rounded-3xl bg-gray-500"></div>
        </section>
      </SignedIn>
      <SignedOut>
        <section class="  pt-24  py-10  h-[88vh]  flex justify-between ">
          <div className=" w-full border-l-2 border-l-slate-900      flex  justify-center items-center">
            <div class="">
              <h1 class=" italic tracking-wider text-5xl font-bold mb-4 text-slate-900">
                Welcome to Mytask
              </h1>
              <p class="text-lg text-slate-500 mb-8 italic tracking-wider">
                Get started with our platform by Sign in or sign up below.
              </p>
              <div class="flex space-x-4">
                <Link href={"sign-in"}>
                  <button class="   drop-shadow-xl    hover:drop-shadow-2xl italic tracking-wider  bg-slate-900 text-3xl transition duration-300 hover:bg-blue-500 text-white  py-3 px-5 rounded-lg  w-80">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="dashboardImage  w-full   bg-[#4150d1]  rounded-lg"></div>
        </section>
      </SignedOut>
      <Footer />
    </main>
  );
}

export default page;
