import React from "react";

function Footer() {
  return (
    <footer className=" mb-5 bg-slate-900  justify-between items-center flex gap-7 rounded-lg px-14  shadow-xl text-white p py-12  ">
      <div className=" flex gap-5 items-center">
        <div className="bg-white h-12 w-12  rounded-md flex justify-center items-center">
          <span className="text-slate-900 text-3xl font-bold">M</span>
        </div>
        <span className="text-4xl font-bold text-white italic tracking-wider">
          Mytask
        </span>
      </div>
      <p className=" text-white ">Copyright 2025 Taskup. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
