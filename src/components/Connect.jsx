import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="text-center border-y-2 border-black py-12">
      <h2 className=" text-[20px] lg:text-[30px] font-[600]">(Connect)</h2>
      <h1 className="lg:text-[150px] md:text-[100px] text-[50px] font-[700] leading-none mb-10">
        Let's talk
      </h1>
      <Link
        to="/contact"
        className="cursor-pointer text-[15px] md:text-[16px] lg:text-[18px] px-5 py-3 bg-black text-white inline rounded-full hover:bg-white hover:text-black transion-all"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default Connect;
