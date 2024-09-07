"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoScreenFull } from "react-icons/go";
import Gpt from "../../public/Gpt.jpg";
import Link from "next/link";
import DigitalClock from "@/components/DigitalClock";
import { SignedOut, SignedIn } from "@clerk/nextjs";

function page() {
  const [ChatgptStyle, setChatgptStyle] = useState(false);

  return (
    <main className="px-8">
      <Navbar />
      <SignedIn>
        <section className="  w-full gap-5 pt-24  pb-6 grid grid-cols-3   ">
          <Link
            className="flex flex-col  justify-evenly  rounded-3xl "
            href={"/dashboard"}
          >
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
          </Link>
          <div
            className={`${
              ChatgptStyle
                ? " backdrop-blur-md  absolute top-0 bottom-0 left-0 right-0 h-full w-full flex justify-center items-center "
                : "     rounded-[20px] h-96       text-white font-bold  "
            }`}
            onClick={() => {
              setChatgptStyle(!ChatgptStyle);
            }}
          >
            <h1
              className={`${
                ChatgptStyle
                  ? "absolute hover:bg-[#f8f5f5]  transition duration-300  rounded-xl text-white  top-14 hover:text-blue-600 bg-blue-500 text-4xl"
                  : "hidden"
              }`}
            >
              <GoScreenFull className="   " />
            </h1>

            <div
              className={`${
                ChatgptStyle
                  ? "hidden"
                  : "h-full flex  flex-col justify-between   rounded-lg"
              }`}
            >
              <Image className="rounded-xl   " src={Gpt} />
              <button class="bg-gradient-to-r w-[80%] text-2xl from-purple-800 to-blue-500  hover:to-blue-400 text-white font-bold py-2 px-8 rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-400">
                Get started with{" "}
                <span className="text-slate-900 italic track  ">BLACK AI</span>
              </button>
            </div>
            <iframe
              className={`${
                ChatgptStyle
                  ? " shadow-2xl overflow-hidden  bg-white     rounded-3xl   w-[90%] h-[80%]"
                  : " hidden"
              }`}
              src="https://www.blackbox.ai/"
            />
          </div>
          <div className="row-span-2 rounded-3xl flex flex-col justify-between ">
            <div className="       h-[58%] flex flex-col  justify-between items-start rounded-3xl bg-  ">
              <div className="  bg-slate-900   h-64 flex flex-col  justify-evenly items-start px-5 rounded-3xl shadow-lg  ">
                <h1 className="text-4xl text-white  font-bold ">
                  Go to <span className=" text-blue-700 ">Lists</span> page
                </h1>
                <p className="text-gray-400  tracking-widest">
                  You can see the Lists of your Tasks here also can manage you
                  Tasks here
                </p>
                <Link href={"/lists"}>
                  <button class="  italic  font-normal  tracking-widest bg-gradient-to-r from-purple-800 to-blue-500  hover:to-blue-400 text-white text-xl py-2 px-8 rounded-lg hover:shadow-2xl   focus:outline-none focus:ring-2 focus:ring-purple-400">
                    Lists
                  </button>
                </Link>
              </div>
              <DigitalClock />
            </div>
            <div className="  bg-white   h-64 flex flex-col  justify-evenly items-start px-5 rounded-3xl shadow-2xl  shadow-gray-500">
              <h1 className="text-4xl text-black  font-bold ">
                Go to <span className=" text-blue-700 ">Lists</span> page
              </h1>
              <p className="text-gtay-600  tracking-widest">
                You can see the Lists of your Tasks here also can manage you
                Tasks here
              </p>
              <Link href={"/lists"}>
                <button class="  italic  font-normal  tracking-widest bg-gradient-to-r from-purple-800 to-blue-500  hover:to-blue-400 text-white text-xl py-2 px-8 rounded-lg hover:shadow-2xl   focus:outline-none focus:ring-2 focus:ring-purple-400">
                  Lists
                </button>
              </Link>
            </div>
          </div>
          <div className="h-64 flex flex-col  justify-evenly items-start px-5 rounded-[30px] bg-black  shadow-gray-500">
            <h1 className="text-4xl text-white  font-bold ">
              Upgrade to <span className=" text-blue-700 ">Premium</span>
            </h1>
            <p className="text-gray-400 tracking-widest">
              Go Pro To Unlock AI Futures
            </p>
            <Link href={"/upgrade"}>
              <button className="  bg-gradient-to-r from-purple-800 to-blue-500  hover:to-blue-400 text-white font-bold py-2 px-8 rounded-lg hover:shadow-2xl shadow-black shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400">
                Update New
              </button>
            </Link>
          </div>
          <div className="shadow-2xl shadow-gray-400 bg-white text-gray-400   h-64 flex flex-col  justify-evenly items-start px-5 rounded-[30px] ">
            <h1 className="text-4xl text-black  font-bold ">
              Go to <span className=" text-blue-700 ">Create</span> page
            </h1>
            <p className="text-gray-600 tracking-widest">
              You can create your Tasks here{" "}
            </p>
            <Link href={"/create"}>
              <button className="  italic  font-normal  tracking-widest bg-gradient-to-r from-purple-800 to-blue-500  hover:to-blue-400 text-white text-xl py-2 px-8 rounded-lg hover:shadow-2xl   focus:outline-none focus:ring-2 focus:ring-purple-400">
                Create
              </button>
            </Link>
          </div>
        </section>
      </SignedIn>
      <SignedOut>
        <section className="  pt-24  py-10  h-[88vh]  flex justify-between ">
          <div className=" w-full border-l-2 border-l-slate-900      flex  justify-center items-center">
            <div className="">
              <h1 className=" italic tracking-wider text-5xl font-bold mb-4 text-slate-900">
                Welcome to Mytask
              </h1>
              <p className="text-lg text-slate-500 mb-8 italic tracking-wider">
                Get started with our platform by Sign in or sign up below.
              </p>
              <div className="flex space-x-4">
                <Link href={"sign-in"}>
                  <button className="   drop-shadow-xl    hover:drop-shadow-2xl italic tracking-wider  bg-slate-900 text-3xl transition duration-300 hover:bg-blue-500 text-white  py-3 px-5 rounded-lg  w-80">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="    dashboardImage  w-full   bg-[#4150d1]  rounded-lg"></div>
        </section>
      </SignedOut>
      <Footer />
    </main>
  );
}

export default page;
