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

        <div className="p-10 group-hover:bg-gray-900 group-hover:text-white transition-all">
          <h3 className="text-[30px] md:text-[20px]">({date})</h3>
          <h2 className="text-[70px] md:text-[44px] font-[600] leading-[70px] md:leading-[45px] py-6">
            {title}
          </h2>
          <p className="text-[40px] md:text-[18px] leading-[60px] md:leading-[29px] tracking-wide">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
