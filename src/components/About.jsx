import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="read-more"
      className="w-full flex sm:flex-col-reverse md:flex-row h-[45%] max-sm:flex-col-reverse max-md:gap-4 justify-start md:px-[40px] lg:px-[60px] px-[10px] py-[50px] border-b-2 border-black"
    >
      <h2 className="md:w-[64%] w-full max-sm:text-[35px] max-md:text-[40px]  md:text-[40px] lg:text-[60px] font-semibold leading-[35px] md:leading-[40px] lg:leading-[60px] md:pr-[40px]">
        As a digital designer, I focus on producing top-notch and impactful
        digital experiences.
      </h2>
      <div className="about-right md:w-40% max-sm:w-full flex flex-col justify-between items-start md:border-l-2 border-black md:pl-[50px]">
        <Link to="./about/about.html">
          <h2 className="max-sm:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] block font-[500]">
            ( About Me )
          </h2>
        </Link>
        <div className="flex justify-center items-center  text-xl gap-4 py-2 text-white">
          <i className="ri-instagram-line bg-black rounded-full max-sm:px-3 max-sm:py-2 py-3 px-4 cursor-pointer transion-all hover:bg-orange-500"></i>
          <i className="ri-facebook-line bg-black rounded-full max-sm:px-3 max-sm:py-2 py-3 px-4 cursor-pointer transion-all hover:bg-blue-500"></i>
          <i className="ri-dribbble-line bg-black rounded-full max-sm:px-3 max-sm:py-2 py-3 px-4 cursor-pointer transion-all hover:bg-pink-500"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
