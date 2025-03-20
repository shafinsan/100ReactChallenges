import { motion } from "framer-motion";
import React from "react";
import TypeWritterUtility from "../../Utility/TypeWritterUtility";

function TypeWritter() {
  return (
    <div className="h-screen flex justify-center items-center">
      <TypeWritterUtility
        delay={500}
        revDelay={1000}
        myValue={[
          "Hello world",
          "Greetings everyone",
          "Welcome aboard",
          "Hi there folks",
          "Hey universe",
        ]}
        className1={"w-full text-center font-mono text-3xl p-4"}
        className2={"font-extrabold"}
      />
    </div>
  );
}

export default TypeWritter;
