import React, { useState } from "react";
import { AllImage } from "../../Utility/ImageUtility";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

function AdvanceSlider() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(true);
  const [thumble, setThumble] = useState(true);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setIndex((pre) => (pre + 1) % AllImage.length);
    setDirection(1);
  };
  const handlePrevios = () => {
    setIndex((pre) => (pre - 1 + AllImage.length) % AllImage.length);
    setDirection(-1);
  };

  return (
    <div className="h-screen">
      <div className="mt-8 m-auto w-[80%] overflow-hidden flex justify-center items-center space-x-4 p-4">
        {AllImage.map((d, i) => (
          <motion.div
            animate={{ scale: index == i ? 1.2 : 1 }}
            transition={{duration:1}}
            className={`relative w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded ${
              index === i ? "border-2 border-blue-600" : "border-transparent"
            }`}
          >
            <img
              key={i}
              src={d}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded"
            />
          </motion.div>
        ))}
      </div>
      {/* {render real images} */}
      <div className="mt-6 m-auto w-[80%] md:w-[60%] lg:w-[45%] h-[300px] lg:h-[450px] overflow-hidden flex justify-between items-center">
        <GrPrevious
          onClick={handlePrevios}
          className="active:scale-95"
          size={25}
        />
        <div className="relative w-[90%] h-full overflow-hidden">
          <motion.img
            key={index}
            initial={{ x: direction * 1000, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -direction * 1000, opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            src={AllImage[index]}
            alt={`Slide ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>
        <GrNext onClick={handleNext} className="active:scale-95" size={25} />
      </div>
    </div>
  );
}

export default AdvanceSlider;
