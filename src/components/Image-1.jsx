import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
const Image = ({ url, isHaveUrl = true }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Z-axis movement effect
  const zOffset = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <div className="lg:h-[650px] relative  w-full !object-cover overflow-hidden group transition-all">
      <motion.img
        style={{ scale: scale, translateZ: zOffset }}
        className="w-100% !object-cover scale-150"
        src={url}
        alt="img"
      />
      <div
        className={clsx(
          "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all",
          {
            "cursor-pointer group-hover:inline-block group-hover:-rotate-90 transition-all":
              isHaveUrl,
            hidden: !isHaveUrl,
          }
        )}
      >
        <div
          className="lg:p-3 p-2 bg-yellow-500 rounded-full bg-clip backdrop-filter backdrop-blur-md bg-opacity-10 hover:border border-gray-100
"
        >
          <i className="ri-arrow-right-down-line z-[50] text-3xl lg:text-6xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Image;
