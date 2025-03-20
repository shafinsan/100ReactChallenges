import React, { useEffect, useState } from "react";

function Clock() {
  const now = new Date();
  const [second, setSecond] = useState();
  const [minutes, setMin] = useState();
  const [hours, setHours] = useState();
  useEffect(() => {
    const time = setInterval(() => {
      setSecond(now.getSeconds() * 6);
      setMin(now.getMinutes() * 6 + (now.getSeconds() * 6) / 60);
      setHours((now.getHours() % 12) * 30 + (now.getMinutes() * 30) / 60);
    }, 1000);
    return () => clearInterval(time);
  }, [now]);
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* second */}
      <div
        className="w-2 h-2 border-2 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"
        style={{ rotate: `${second}deg` }}
      >
        <div className="w-0.5 h-12 bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-full -translate-y-11" />
      </div>

      {/* minute */}
      <div
        className="w-2 h-2 border-2 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"
        style={{ rotate: `${minutes}deg` }}
      >
        <div className="w-1 h-10 bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-full -translate-y-10" />
      </div>
      {/* hours */}
      <div
        className="w-2 h-2 border-2 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"
        style={{ rotate: `${hours}deg` }}
      >
        <div className="w-1 h-8 bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 rounded-full -translate-y-8" />
      </div>

      <div className="relative w-[9rem] h-[9rem] border-2 rounded-full">
        {[...Array(12)].map((__, i) => (
          <div
            className={`absolute w-[9rem] h-[9rem] border-red-700 inset-0 text-center`}
            style={{ transform: `rotate(${(i + 1) * 30}deg)` }}
          >
            <p style={{ transform: `rotate(${-(i + 1) * 30}deg)` }}> {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clock;
