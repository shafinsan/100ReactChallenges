import React from "react";
import { motion } from "framer-motion";

function Cube() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-gray-100"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{
            rotateX: [0, 90, 180, 270, 360], // Full rotation with even steps
            rotateY: [0, 90, 180, 270, 360], // Simplified to match rotateX
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
        className="relative w-32 h-32"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* face  */}
        <div
          className="absolute w-full h-full bg-red-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "translateZ(4rem)" }}
        >
          <p>Font</p>
        </div>
        {/* back  */}
        <div
          className="absolute w-full h-full bg-green-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "rotateY(180deg) translateZ(4rem)" }}
        >
          <p>Back</p>
        </div>

        {/* left  */}
        <div
          className="absolute w-full h-full bg-yellow-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "rotateY(-90deg) translateZ(4rem)" }}
        >
          <p>Left</p>
        </div>
        {/* right  */}
        <div
          className="absolute w-full h-full bg-pink-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "rotateY(90deg) translateZ(4rem)" }}
        >
          <p>Right</p>
        </div>
        {/* top  */}
        <div
          className="absolute w-full h-full bg-teal-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "rotateX(90deg) translateZ(4rem)" }}
        >
          <p>Top</p>
        </div>
        {/* bottom  */}
        <div
          className="absolute w-full h-full bg-green-600 opacity-80 flex justify-center items-center text-white"
          style={{ transform: "rotateX(-90deg) translateZ(4rem)" }}
        >
          <p>Bottom</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Cube;
