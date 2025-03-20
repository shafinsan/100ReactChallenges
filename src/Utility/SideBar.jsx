import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { motion, useScroll } from "framer-motion";
import { HiDotsVertical } from "react-icons/hi";
function SideBar({ sidebarItems }) {
  const [open, setOpen] = useState(true);
  return (
    <motion.div
      initial={{ width: "10rem" }}
      animate={{ width: open ? "10rem" : "2.5rem" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`border-2
      flex flex-col p-2 m-1 rounded`}
    >
      <div className={`relative group flex justify-between items-center`}>
        <motion.div
          animate={{ scale: open ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          profile
        </motion.div>
        {!open && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 35 }}
            className="absolute opacity-0 group-hover:opacity-100 transition-all 
            duration-500 border px-1 py-[0.7px] rounded group-hover:bg-[#000000] group-hover:text-white cursor-pointer"
          >
            profile
          </motion.div>
        )}
        <motion.div
          animate={{ x: open ? 0 : -43 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="active:scale-95 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu size={20} />
        </motion.div>
      </div>
      <motion.div
        initial={{ width: "12rem" }}
        animate={{ width: open ? "10rem" : "2.5rem" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="my-1"
      >
        <motion.ul className="flex flex-col space-y-2">
          {sidebarItems.map((d, i) => (
            <motion.li
              key={i}
              className={`relative group flex justify-between items-center w-[9rem]`}
            >
              <motion.div
                animate={{ opacity: open ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {d.title}
              </motion.div>

              {!open && (
                <motion.div
                  initial={{ x: -400 }}
                  animate={{ x: 35 }}
                  className="absolute opacity-0 group-hover:opacity-100 transition-all 
            duration-500 border px-1 py-[0.7px] rounded group-hover:bg-[#000000] group-hover:text-white cursor-pointer"
                >
                  {d.title}
                </motion.div>
              )}
              <motion.div
                animate={{ x: open ? 0 : -120 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="active:scale-95 cursor-pointer"
              >
                {d.icon}
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <div
        className={`relative group flex justify-between items-center p-2 m-1 h-[2rem]`}
      >
        <motion.p
        initial={{x:-12}}
         animate={{ opacity: open ? 1 : 0,x:-12 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Elias
        </motion.p>
        {!open && (
          <motion.p
            initial={{ x: -400 }}
            animate={{ x: 23 }}
            className="absolute text-center w-[6rem] opacity-0 group-hover:opacity-100 transition-all 
            duration-500 border px-1 py-[0.7px] rounded group-hover:bg-[#000000] group-hover:text-white cursor-pointer"
          >
            Elias
          </motion.p>
        )}

        <motion.span
        initial={{x:10}}
          animate={{ x: open ? 10 : -42 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <HiDotsVertical size={20} />
        </motion.span>
      </div>
    </motion.div>
  );
}

export default SideBar;
