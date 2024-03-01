import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="overflow-hidden">
      <div className="max-h-[30%] max-md:w-[878px] max-lg:w-[1000px]  overflow-hidden py-[40px] flex whitespace-nowrap leading-none">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          className="text-[130px] max-sm:w-[878px] inline font-black tracking-tight uppercase "
        >
          Work Work Work Work Work
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: "10", repeat: Infinity }}
          className="text-[130px] max-sm:hidden inline font-black tracking-tight uppercase pl-6"
        >
          Work Work Work Work Work
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
