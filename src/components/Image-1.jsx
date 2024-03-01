import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Image = ({ url }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  // Z-axis movement effect
  const zOffset = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <div className="lg:h-[700px] xl:h-[850px] md:h-[700px] w-full !object-cover overflow-hidden max-sm:w-[878px]">
      <motion.img
        style={{ scale: scale, translateZ: zOffset }}
        className="w-100% !object-cover scale-150"
        src={url}
        alt="img"
      />
    </div>
  );
};

export default Image;
