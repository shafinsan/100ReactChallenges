import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function TypeWritterUtility({ myValue, delay, revDelay, className1, className2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [worldIndex, setWordIndex] = useState(0);
  const [targetValue, setTargetValue] = useState("");
  const [rev, setRev] = useState(false);
  const [dispaly, setDispaly] = useState("");
  useEffect(() => {
    setTargetValue(myValue[currentIndex]);
    const writter = setTimeout(
      () => {
        if (!rev) {
          if (worldIndex < targetValue.length) {
            setDispaly((pre) => pre + targetValue[worldIndex]);
            setWordIndex((pre) => pre + 1);
          } else {
            setRev(true);
          }
        } else {
          if (worldIndex > 0) {
            setDispaly((pre) => pre.slice(0, -1));
            setWordIndex((pre) => pre - 1);
          } else {
            setRev(false);
            setCurrentIndex((pre) => (pre + 1) % myValue.length);
          }
        }
      },
      rev ? revDelay || 1000 : delay || 500
    );
    return () => clearTimeout(writter);
  }, [targetValue, currentIndex, rev, dispaly]);
  const cursorDuration = (rev ? revDelay/1000 : delay/1000)
  return (
    <div className={className1}>
      {dispaly}
      <motion.span
        className={className2}
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: cursorDuration, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </div>
  );
}

export default TypeWritterUtility;
