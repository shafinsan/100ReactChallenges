import { motion, transform } from "framer-motion";
import React, { useState } from "react";
function AdvanceLoading() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-[100px] h-[100px] relative"
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(10deg) rotateY(15deg)",
        }}
      >
        {/* {last box} */}
        <motion.div
          className="w-full h-full border-2 border-red-600 absolute inset-0"
          animate={{ rotateX: [360, 0, 360], rotateY: [0, 360, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(-30px)",
          }}
        ></motion.div>
        {/* {outterbox} */}
        <motion.div
          className="w-full h-full border-2 border-yellow-600 absolute inset-0"
          animate={{ rotateX: [0, 360, 0], rotateY: [360, 0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(30px)",
          }}
        ></motion.div>
        {/* {left} */}
        <motion.div
          animate={{ rotateY: [90, 360, 90] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="w-full h-full border-2 border-blue-600 absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0px) rotateY(90deg)",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default AdvanceLoading;
