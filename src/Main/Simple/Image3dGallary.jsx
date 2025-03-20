import React from 'react'
import { motion } from "framer-motion";
import { AllImage } from '../../Utility/ImageUtility';
import kaneki from "../../../public/image/png/Kaneki-PNG-Cutout.png";
function Image3dGallary() {
    const angle = 360 / AllImage.length;
  return (
    <div 
    className="flex bg-white h-screen justify-center items-center overflow-hidden relative"
    style={{ perspective: "1000px" }}
  >
    <motion.div
      animate={{
        rotateY: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="h-[100px] w-[100px] absolute lg:h-[150px] lg:w-[150px]"
      style={{
        transform: "rotateX(-15deg) rotateY(15deg)",
        transformStyle: "preserve-3d",
      }}
      
    >
      {AllImage.map((d, i) => (
        <div
          className="h-full w-full absolute inset-0"
          style={{
            transform: `rotateY(${i * angle}deg) translateZ(200px)`,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            key={i}
            src={d}
            alt="/"
            className="h-full w-full absolute object-cover"
          />
        </div>
      ))}
    </motion.div>
  </div>
  )
}

export default Image3dGallary
