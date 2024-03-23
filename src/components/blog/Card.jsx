import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const Card = ({ url, date, title, desc, id }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [2.5, 1.4]);

  // Z-axis movement effect
  const zOffset = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <Link to={`/post/${id}`}>
      <div className="flex flex-col group cursor-pointer">
        <div className="!object-cover overflow-hidden">
          <motion.img
            style={{ scale: scale, translateZ: zOffset }}
            src={url}
            alt="card-pic"
            className="object-cover object-center"
          />
        </div>

        <div className="py-10 px-[10px] lg:p-10 group-hover:bg-gray-900 group-hover:text-white transition-all">
          <h3 className="text-[16px] md:text-[17px]">({date})</h3>
          <h2 className="text-[40px] md:text-[35px] font-[600] leading-[40px] md:leading-[40px] py-6">
            {title}
          </h2>
          <p className="text-[22px] md:text-[16px] leading-[30px] md:leading-[25px] tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
