import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="max-sm:w-[878px] text-center border-y-2 border-black py-12">
      <h2 className="text-[50px] font-[600]">(Connect)</h2>
      <h1 className="text-[170px] font-[700] leading-none mb-10">Let's talk</h1>
      <Link
        to="/contact"
        className="cursor-pointer text-[25px] px-6 py-4 bg-black text-white inline rounded-full hover:bg-white hover:text-black transion-all"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default Connect;
