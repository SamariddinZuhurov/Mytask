"use client";

import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function DigitalClock() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const secunds = time.getSeconds();
    const neightOrDay = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}${" : "}${minutes}${" : "}${secunds}${" "}${neightOrDay}`;
  }
  return (
    <div className="bg-white  flex items-center justify-center text-slate-900 text-6xl py-5 font-bold   shadow-2xl w-full rounded-3xl">
      {DigitalClock()}
    </div>
  );
}
export default DigitalClock;
