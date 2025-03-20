import React from 'react'
import { motion } from "framer-motion";
import { AllImage } from '../../Utility/ImageUtility';
import kaneki from "../../../public/image/png/Kaneki-PNG-Cutout.png";
function Image3dGallary() {
    const angle = 360 / AllImage.length;
  return (
    <div 
    className="relative h-screen flex justify-center items-center bg-white overflow-hidden"
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
      className="w-[150px] h-[150px] absolute"
      style={{
        transform: "rotateX(-15deg) rotateY(15deg)",
        transformStyle: "preserve-3d",
      }}
      
    >
      {AllImage.map((d, i) => (
        <div
          className="absolute w-full h-full inset-0"
          style={{
            transform: `rotateY(${i * angle}deg) translateZ(300px)`,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            key={i}
            src={d}
            alt="/"
            className="absolute w-full h-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  </div>
  )
}

export default Image3dGallary
